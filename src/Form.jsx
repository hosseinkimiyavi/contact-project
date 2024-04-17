import React from "react";

export default function Form() {
  return (
    <>
      <form action="" className="grid grid-cols-2 gap-6 border-4 shadow-lg shadow-blue-950 border-blue-700 rounded-xl px-6 border h-72 mt-6 items-center justify-center w-3/4 m-auto bg-cyan-100">
        <input className="h-8 w3/4 font-semibold "  type="text" placeholder="Name" />
        <input className="h-8 w3/4 font-semibold " type="text" placeholder="Last Name" />

        <input className="h-8 w3/4 font-semibold " type="email" placeholder="Email" />
        <input className="h-8 w3/4 font-semibold " type="number" name="" id="" placeholder="Phone" />


        <button className="w-full h-8 border bg-blue-900 rounded-2xl  m-auto text-white mx-72 hover:bg-blue-800 ">Add Contact</button>
      </form>
    </>
  );
}
