import { useState } from "react";
import Orders from "./Orders";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "juli",
    lastName: "Li",
    email: "123@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <div className="Form">
        <label>
          First Name:
          <input value={person.firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last Name:
          <input value={person.lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Email:
          <input value={person.email} onChange={handleEmailChange} />
        </label>
        <p>
          {person.firstName} {person.lastName} {person.email}
        </p>
      </div>
      <Orders />
    </>
  );
}
