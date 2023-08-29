import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";
import { getClients } from '../api/clients'

export const loader = () => {  
 /*  const clients = [
    {
        id: 1,
        name: 'David',
        phone: 102013313,
        email: "david@facebook.com",
        company: 'Facebook'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@google.com",
        company: 'Google'
    },
    {
        id: 3,
        name: 'Joshua',
        phone: 31983913,
        email: "joshua@x.com",
        company: 'X'
    },
    {
        id: 4,
        name: 'Michael',
        phone: 319381983,
        email: "michael@linkedin.com",
        company: 'Linked-in'
    },
    {
        id: 5,
        name: 'Peter',
        phone: 1398198938,
        email: "peter@owasp.com",
        company: 'OWASP'
    },
]; */

  const clients = getClients()

  return //clients
}


const Index = () => {

  const clients = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 ">Manage your clients.</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800  text-white ">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
            <tbody>
              { clients.map( client => (
                <Client
                  client={client}
                  key={client.id}
                />
              ))}
            </tbody>
        </table>
      ): (
        <p className="text-center mt-10"> There is no clients.</p>
      )}
    </>
    )
}

export default Index