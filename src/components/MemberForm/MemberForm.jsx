import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MemberForm({ addMember }) {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  function handleInputValue(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function memberForm(e) {
    e.preventDefault();
    addMember(inputValue);
    setInputValue({ name: "", age: "", address: "", phone: "" });
  }

  return (
    <form className="card bg-dark p-3 gap-3 border-light" onSubmit={memberForm}>
      <h1 className="text-center text-light">GYM Form</h1>
      <input
        type="text"
        className="form-control"
        placeholder="FullName"
        name="name"
        value={inputValue.name}
        onChange={handleInputValue}
        required
      />
      <input
        type="number"
        className="form-control"
        placeholder="Age"
        value={inputValue.age}
        name="age"
        onChange={handleInputValue}
        required
        min={16}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Address"
        name="address"
        value={inputValue.address}
        onChange={handleInputValue}
        required
      />
      <input
        type="tel"
        className="form-control"
        placeholder="Phone number"
        name="phone"
        value={inputValue.phone}
        onChange={handleInputValue}
        required
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
