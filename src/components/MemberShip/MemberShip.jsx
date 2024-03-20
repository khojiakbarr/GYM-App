import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemberShipsForm from "../MemberShipsForm/MemberShipsForm";
import MembershipItem from "../MembershipItem/MembershipItem";

export default function MemberShip() {
  const paramsMem = useParams();
  const URL = "https://crudcrud.com/api/00f1a03591224afabdd3480636965b1a/";

  const [memberShip, setMemberShip] = useState([]);
  const [member, setMember] = useState({});

  useEffect(() => {
    getOne();
    getMemberShip();
  }, []);
  async function getOne() {
    const res = await axios(`${URL}members/${paramsMem.id}`);
    setMember(res.data);
  }

  async function getMemberShip() {
    const res = await axios(`${URL}membership`);
    setMemberShip(res.data);
  }

  async function addMemberShips(newMemberShip) {
    const res = await axios.post(`${URL}membership`, newMemberShip);
    console.log(res.data);
    setMemberShip([...memberShip, newMemberShip]);
    getMemberShip();
  }

  async function deleteMemberShips(id) {
    const res = await axios.delete(`${URL}membership/${id}`);
    getMemberShip();
  }

  async function editMemberShips(_id, upMembership) {
    try {
      const res = await axios.put(`${URL}membership/${_id}`, upMembership);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    getMemberShip();
  }

  return (
    <>
      <MemberShipsForm addMemberShipsFn={addMemberShips} id={paramsMem.id} />
      <div className="container bg-dark border-light">
        <div className="card bg-dark border-light p-3 my-4 d-flex flex-wrap gap-3">
          <div className="member ">
            <h2 className="text-light"> Name: {member.name}</h2>
            <h4 className="text-light"> Age: {member.age}</h4>
            <h4 className="text-light"> Address: {member.address}</h4>
            <h4 className="text-light"> Phone: {member.phone}</h4>
          </div>
          {memberShip.map((meberSHip) =>
            meberSHip.memberId === paramsMem.id ? (
              <MembershipItem
                meberSHip={meberSHip}
                memberId={paramsMem.id}
                deleteMemberShips={deleteMemberShips}
                editMemberShips={editMemberShips}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
