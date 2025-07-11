import React from "react";

function ProfileCard(prop) {
  const sum = prop.num + 2;

  return (
    <>
      <div>{prop.name}</div>
      <div>{sum}</div>
      <div>{prop.isMember ? "active member" : "inactive member"}</div>
    </>
  );
}

export default ProfileCard;
