const Client = ({client}) => {

    const { name, company, email, phone, id } = client
  return (
    <tr>
    <td className="p-6">
      {name}
    </td>
  </tr>  )
}

export default Client