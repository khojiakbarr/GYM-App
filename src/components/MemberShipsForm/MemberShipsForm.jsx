import React, { useState } from "react";

export default function MemberShipsForm({ addMemberShipsFn, id }) {
  const [memberShipsForm, setMemberShipsForm] = useState({
    to: "",
    from: "",
    price: "",
  });

  function handleInputValue(e) {
    console.dir(e.target);
    setMemberShipsForm({ ...memberShipsForm, [e.target.name]: e.target.value });
  }

  function seveImputValue(e) {
e.preventDefault()
    addMemberShipsFn({ ...memberShipsForm, memberId: id });
    setMemberShipsForm({ to: "", from: "", price: "" });
  }
  return (
    <form className="card bg-dark border-light p-3 gap-3 my-3" onSubmit={seveImputValue}>
      <h2 className="text-center text-light"> MemberShip Form</h2>
      <label className="text-light">
        To :
        <input
          className="form-control"
          type="date"
          required
          name="to"
          value={memberShipsForm.to}
          onChange={handleInputValue}
        />
      </label>
      <label className="text-light">
        From :
        <input
          className="form-control"
          type="date"
          required
          name="from"
          value={memberShipsForm.from}
          onChange={handleInputValue}
        />
      </label>

      <label className="text-light">
        Price:
        <input
          className="form-control"
          type="number"
          min={0}
          name="price"
          value={memberShipsForm.price}
          onChange={handleInputValue}
        />
      </label>
      <button  className="btn btn-primary">
        Add Memberships
      </button>
    </form>
  );
}
