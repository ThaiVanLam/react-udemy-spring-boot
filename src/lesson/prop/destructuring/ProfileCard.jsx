import React from "react";

function ProfileCard({ name, num, isMember }) {
  const sum = num + 2;

  return (
    <>
      <div>{name}</div>
      <div>{sum}</div>
      <div>{isMember ? "active member" : "inactive member"}</div>
    </>
  );
}

export default ProfileCard;
