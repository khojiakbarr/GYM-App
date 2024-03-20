import React from "react";
import Meember from "../Member/Meember";

export default function MembersItem({
  members,
  deleteMember,
  editMember,
  setMembers,
}) {
  return (
    <>
      <h2 className="text-light my-3">Members: </h2>
      <div className="container d-flex flex-wrap my-3 gap-3 justify-content-center">
        {members.map((member) => (
          <Meember
            member={member}
            deleteMember={deleteMember}
            editMember={editMember}
            setMembers={setMembers}
            key={member._id}
          />
        ))}
      </div>
    </>
  );
}
