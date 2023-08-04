
const BASE_URL = 'https://64ca2221b2980cec85c2edb3.mockapi.io/';


 export const getContacts = async() =>
 
     {
      const data = await fetch(`${BASE_URL}/contacts`)
      console.log(data)
      return await data.json()
  
}

export const createContacts = async(data) =>
{
 const res = await fetch(`${BASE_URL}/contacts`, {
  body: JSON.stringify(data)})
  console.log(data)
 return await res.json()

}

export const deleteContacts = async(id) =>
{
  const data = await fetch(`${BASE_URL}/contacts/${id}`)
  console.log(data)
  return await data.json()

}