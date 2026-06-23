import React from "react";

const UserCard = ({ name, role }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;