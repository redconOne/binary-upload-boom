import React from 'react';

function Messages({ messages }) {
  return (
    <div>
      {messages.errors
        ? messages.errors.map((el, i) => (
            <div
              key={i}
              className="alert alert-danger"
            >
              {el.msg}
            </div>
          ))
        : null}

      {messages.info
        ? messages.info.map((el, i) => (
            <div
              key={i}
              className="alert alert-danger"
            >
              {el.msg}
            </div>
          ))
        : null}
    </div>
  );
}

export default Messages;