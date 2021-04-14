import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "../Message/Message";

import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { IconButton } from "@material-ui/core";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) =>
          setMessages(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    // firebase storing msgs & retrieving to display
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} content={data} />
          ))}
        </FlipMove>
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
