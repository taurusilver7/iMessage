import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>Channel Name</h3>
        <p>Last message sent..</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
