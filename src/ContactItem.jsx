import React from 'react'

export default function ContactItem({data :{id , name , lastName ,email ,phone},deleteHandler}) {
  return (
    <div>
        <li key={id}>
          <p>{name} {lastName}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <button onClick={()=>deleteHandler(id)}>Delete</button>
        </li>
    </div>
  )
}
