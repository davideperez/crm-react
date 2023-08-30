import { getClient } from "../api/clients"

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


function EditClient() {
  return (
    <div>EditClient</div>
  )
}

export default EditClient