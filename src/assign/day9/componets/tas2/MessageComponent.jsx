import React from "react";

const MessageComponent = ({ text }) => {
  return (
    <div>
      <h2>Message:</h2>
      <p>{text}</p>
    </div>
  );
};

export default MessageComponent;