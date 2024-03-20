import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Meember({ member, deleteMember, editMember }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState({
    name: member.name,
    age: member.age,
    address: member.address,
    phone: member.phone,
  });

  function handleInputValue(e) {
    setEditInputValue({ ...editInputValue, [e.target.name]: e.target.value });
  }

  function saveInputValue() {
    editMember(member._id, editInputValue);
    setIsEditing(!isEditing);
  }
  return isEditing ? (
    <div className="card bg-dark gap-3 p-4 d-flex flex-column align-items-center justify-content-center rounded border-light ">
      <input
        type="text"
        placeholder="Name"
        required
        name="name"
        value={editInputValue.name}
        onChange={handleInputValue}
      />
      <input
        type="text"
        placeholder="Name"
        required
        name="age"
        value={editInputValue.age}
        onChange={handleInputValue}
      />
      <input
        type="text"
        placeholder="Name"
        required
        name="address"
        value={editInputValue.address}
        onChange={handleInputValue}
      />
      <input
        type="text"
        placeholder="Name"
        required
        name="phone"
        value={editInputValue.phone}
        onChange={handleInputValue}
      />

      <div className="d-flex gap-2">
        <button className="btn btn-info" onClick={saveInputValue}>
          Save
        </button>
      </div>
    </div>
  ) : (
    <div className="card bg-dark gap-2 p-4 d-flex flex-column align-items-center justify-content-center rounded border-light ">
      <h1 className="text-light">Name: {member.name}</h1>
      <p className="text-light">Age: {member.age}</p>
      <p className="text-light">Address: {member.address}</p>
      <p className="text-light"> Number: {member.phone}</p>
      <div className="d-flex gap-2">
        <button
          className="btn btn-danger"
          onClick={() => deleteMember(member._id)}
        >
          Delete
        </button>
        <button
          className="btn btn-info"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
        <Link className="btn btn-primary" to={`/membership/${member._id}`} >More MemberShips</Link>
      </div>
    </div>
  );
}
