import React, { useState } from "react";
import "./Chat.css";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { IconButton } from "@material-ui/core";

const Chat = () => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send</button>
        </form>
        <IconButton>
          <MicNoneOutlinedIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
