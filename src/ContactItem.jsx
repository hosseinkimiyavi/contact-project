import React from 'react'

export default function ContactItem({data :{id , name , lastName ,email ,phone},deleteHandler}) {
  return (
    <div>
        <li key={id} className='grid grid-cols-4 gap-1 w-3/4  m-4 mx-auto border-2 border-blue-800 bg-blue-300 text-blue-950 p-2 rounded-lg font-semibold'>
          <p>{name} {lastName}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <button className='hover:bg-blue-500 rounded-2xl transition duration-150  hover:text-white' onClick={()=>deleteHandler(id)}>Delete</button>
        </li>
    </div>
  )
}
