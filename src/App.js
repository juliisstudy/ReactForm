import "./styles.css";
import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Juli",
    lastName: "Li",
    email: ""
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.vale
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.vale
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.vale
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onchange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onchange={handleLastNameChange} />
      </label>
      <label>
        email:
        <input value={person.email} onchange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </>
  );
}
