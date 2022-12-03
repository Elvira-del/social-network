import React from "react";

const Messages = (props) => {
  return (
    <div className="messages">
      {props.messages.map((item, idx) => (
        <p key={idx}>{item.stringShort}</p>
      ))}
    </div>
  );
};

export default Messages;
