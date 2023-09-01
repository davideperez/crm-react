import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import ClientForm from "../components/ClientForm"
import { getClient, updateClient } from "../api/clients"
import Error from "../components/Error"

export async function loader({params}) {
    const client = await getClient(params.clientId)

    if(Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No results.'
        })
    }

    console.log(client)

    return client
}

export async function action({request, params}) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')

    //1 Validates if all the fields are complete.
    const errors = []
    if(Object.values(data).includes('')) {
        errors.push('All fields are mandatory.')
    }
    
    //2 Validates email
    
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)) {
        errors.push('Email not valid.')
    }

    //3 Return data if there are errors:
    if(Object.keys(errors).length) {
        console.log('There are errors.')

        return errors
    }
    //4 Update the Client
    updateClient(params.clientId, data)
    return redirect('/')
}


function EditClient() {

    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()

  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
        <p className="mt-3 ">Edit the client information below.</p>

        <div className="flex - justify-end">
            <button
                className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"    
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
            {errors?.length && errors.map((error, i ) => <Error key={i}>{error}</Error> )}
            <Form 
                method="POST"
                noValidate 
            >
                <ClientForm
                    client={client}
                />

                <input 
                    type="submit"
                    className='mt-5 w-full bg-blue-800 p-3 uppercase fond-bold text-white text-lg'
                    value='Save Changes'
                />
            </Form>
        </div>
    </>
  )
}

export default EditClient