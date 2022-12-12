import React from "react";

const Messages = (props) => {
  return (
    <div className="messages">
      <div className="messages__content">
        {props.messages.map((item, idx) => (
          <p className="messages__text" key={idx}>
            {item.stringShort}
          </p>
        ))}
      </div>

      <form className="messages__form" action="#" method="post">
        <textarea
          className="messages__input"
          cols="30"
          rows="5"
          autoCorrect="on"
        />
        <button className="btn messages__btn">Send</button>
      </form>
    </div>
  );
};

export { Messages };
