import React from 'react'
import ContactItem from './ContactItem'

export default function ContactList({contacts,deleteHandler}) {
  return (
    <div>
      <h3 className='text-3xl font-bold text-blue-500 mx-48'>Contact List</h3>
      {contacts.length ?(  <ul>
        {contacts.map(contacts =>(
          <ContactItem key={contacts.id} data = {contacts} deleteHandler={deleteHandler} />
))}
      </ul>) : <p className='font-bold border-2 border-red-600 rounded-xl w-1/6 p-1 m-2 mx-48 '>No Contacts Yet!!!</p> }

    



    </div>
  )
}
