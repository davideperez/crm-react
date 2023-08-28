import { Form, useNavigate, useActionData } from 'react-router-dom'
import AddClientForm from '../components/AddClientForm'
import Error from '../components/Error'

export async function action({request}) {
    
    const formData = await request.formData()

    const data = Object.fromEntries(formData)


    //Validation
    const errors = []
    if(Object.values(data).includes('')) {
        errors.push('All fields are mandatory.')
    }

    // Return data if there are errors:
    if(Object.keys(errors).length) {
        console.log('There are errors.')

        return errors
    }
}

const NewClient = () => {

    const errors = useActionData()
    const navigate = useNavigate()
     
    console.log(errors)
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">New Client</h1>
            <p className="mt-3 ">Complete all the fields to add a new client.</p>

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
                >
                    <AddClientForm
                        //client={client}
                    />

                    <input 
                        type="submit"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase fond-bold text-white text-lg'
                        value='Add Client'
                    />
                </Form>
            </div>
        </>
    )
}

export default NewClient