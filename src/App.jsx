import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MemberForm from "./components/MemberForm/MemberForm";
import MembersItem from "./components/MembersItem/MembersItem";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import MemberShip from "./components/MemberShip/MemberShip";

export default function App() {
  const [members, setMembers] = useState([]);
  const URL = "https://crudcrud.com/api/00f1a03591224afabdd3480636965b1a/";
  const memberRes = "members/";
  async function getMembers() {
    const res = await axios(`${URL}${memberRes}`);
    setMembers(res.data);
  }

  useEffect(() => {
    getMembers();
  }, []);

  async function addMember(member) {
    try {
      const res = await axios.post(`${URL}${memberRes}`, member);
      setMembers([...members, res.data]);
    } catch (err) {
      console.log(err);
    }
    // setMembers([...members, { id: id(), ...member }]);
  }

  async function deleteMember(id) {
    try {
      const res = await axios.delete(`${URL}${memberRes}${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    getMembers();
    // const newMembers = members.filter((member) => member._id !== id);
    // setMembers(newMembers);
  }

  const editMember = async (id, { name, age, address, phone }) => {
    const res = await axios.put(`${URL}${memberRes}${id}`, {
      name,
      age,
      address,
      phone,
    });
    getMembers();
    console.log(res);
  };

  return (
    <div className="container pt-3">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MemberForm addMember={addMember} />
              <MembersItem
                members={members}
                deleteMember={deleteMember}
                editMember={editMember}
                setMembers={setMembers}
              />
            </>
          }
        />
        <Route path="/membership/:id" element={<MemberShip />} />
      </Routes>
    </div>
  );
}
