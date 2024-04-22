import React from 'react'
import ContactItem from './ContactItem'

export default function ContactList({contacts}) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ?(  <ul>
        {contacts.map(contacts =>(
          <ContactItem key={contacts.id} data = {contacts} />
))}
      </ul>) : <p>No Contacts Yet!!!</p> }

    



    </div>
  )
}
