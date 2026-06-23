import React, { useState } from "react";
import MessageComponent from "./MessageComponent";
import withUpperCase from "./withUpperCase";

const UpperMessage = withUpperCase(MessageComponent);

const Task02 = () => {
  const [message, setMessage] = useState("hello react");


  const handlechange =(e)=>{
    setMessage(e.target.value)
  }

  return (
    <>
      <h1>withUpperCase HOC</h1>

      <input
        type="text"
        value={message}
        onChange={handlechange}
        placeholder="Enter message"
      />

      <UpperMessage text={message} />
    </>
  );
};

export default Task02;

