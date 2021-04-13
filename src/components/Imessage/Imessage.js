import React from "react";
import "./Imessage.css";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

const Imessage = () => {
  return (
    <div className="imessage">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
      <Chat />
    </div>
  );
};

export default Imessage;
