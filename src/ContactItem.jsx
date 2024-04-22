import React from 'react'

export default function ContactItem({data :{id , name , lastName ,email ,phone}}) {
  return (
    <div>
        <li key={id}>
          <p>{name} {lastName}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <button>Delete</button>
        </li>
    </div>
  )
}
