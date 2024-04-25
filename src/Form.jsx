import React, { useState } from "react";
import ContactList from "./ContactList";
import inputs from "./constans/inputs";
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const [contacts, setcontacts] = useState([]);
  const [alert, setalert] = useState("");
  const [contact, setcontact] = useState({
    id : "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const deleteHandler = (id)=>{
  const Newcontacts =contacts.filter(contacts=>contacts.id!==id)
  setcontacts(Newcontacts)
  }

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setcontact({
      ...contact,
      [name]: value,
    });
  };
  const subHandler = (event) => {
    event.preventDefault();
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      setalert("please enter valid data!");

      return;
    }
    setalert("");
    const Newcontact = {...contact , id: uuidv4()}

    setcontacts((contacts) => [...contacts, contact]);
    console.log(Newcontact);
    setcontact({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <form
        action=""
        className="grid grid-cols-2 gap-6 border-4 shadow-lg shadow-blue-950 border-blue-700 rounded-xl px-6 border h-72 mt-6 items-center justify-center w-3/4 m-auto bg-cyan-100"
      >
        {inputs.map((input, index) =>(<input className={inputs.className} value={contact[input.name]} type={input.type} name={input.name} placeholder={input.placeholder} onChange={changeHandler} key={index} />))}
        {/* <input
          className="h-8 w3/4 font-semibold "
          value={contact.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          className="h-8 w3/4 font-semibold "
          value={contact.lastname}
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={changeHandler}
        />

        <input
          className="h-8 w3/4 font-semibold "
          value={contact.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          className="h-8 w3/4 font-semibold "
          value={contact.phone}
          type="number"
          name="phone"
          id=""
          placeholder="Phone"
          onChange={changeHandler}
        /> */}

        <button
          className="w-full h-8 border bg-blue-900 rounded-2xl  m-auto text-white mx-72 hover:bg-blue-800 "
          onClick={subHandler}
        >
          Add Contact
        </button>
      </form>
      <div>{setalert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}
