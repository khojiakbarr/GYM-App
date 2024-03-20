import React, { useState } from "react";

export default function MembershipItem({
  meberSHip: { to, from, price, _id, memberId },
  deleteMemberShips,
  editMemberShips,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState({
    to,
    from,
    price,
    _id,
    memberId,
  });

  function handleInputValue(e) {
    setEditInputValue({ ...editInputValue, [e.target.name]: e.target.value });
  }
  function saveInputValue() {
    editMemberShips(_id, editInputValue);
    setIsEditing(false);
  }
  return isEditing ? (
    
    <div className="card border-light p-3 bg-dark gap-2">
      <h3 className="text-light"> Abanement</h3>
      <label className="text-light">
        To:
        <input
          className="form-control"
          type="data"
          value={editInputValue.to}
          name="to"
          onChange={handleInputValue}
        />
      </label>
      <label className="text-light">
        From:
        <input
          className="form-control"
          type="data"
          value={editInputValue.from}
          name="from"
          onChange={handleInputValue}
        />
      </label>
      <label className="text-light">
        Price
        <input
          className="form-control"
          type="number"
          value={editInputValue.price}
          name="price"
          placeholder="price"
          onChange={handleInputValue}
        />
      </label>
      <div className="d-flex gap-3">
        <button onClick={saveInputValue} className="btn btn-info">
          Save
        </button>
      </div>
    </div>
  ) : (
    <div className="card border-light p-3 bg-dark">
      <h3 className="text-light " > Abanement</h3>
      <h4 className="text-light">To: {to}</h4>
      <h4 className="text-light">From: {from}</h4>
      <h4 className="text-light">Price: {price} $</h4>
      <div className="d-flex gap-3">
        <button
          onClick={() => deleteMemberShips(_id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <button onClick={() => setIsEditing(true)} className="btn btn-info">
          Edit
        </button>
      </div>
    </div>
  );
}
