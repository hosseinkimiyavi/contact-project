import React from 'react'

export default function ContactList({contacts}) {
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map(contacts =>(<li key={contacts.id}>{contacts.name}</li>))}
      </ul>



    </div>
  )
}
