import React from 'react'
import ContactItem from './ContactItem'

export default function ContactList({contacts,deleteHandler}) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ?(  <ul>
        {contacts.map(contacts =>(
          <ContactItem key={contacts.id} data = {contacts} deleteHandler={deleteHandler} />
))}
      </ul>) : <p>No Contacts Yet!!!</p> }

    



    </div>
  )
}
