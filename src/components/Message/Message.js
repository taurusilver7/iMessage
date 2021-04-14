import { Avatar } from "@material-ui/core";
import "./Message.css";

import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import * as timeago from "timeago.js";

const Message = forwardRef(
  (
    { id, content: { timestamp, email, displayName, photo, message, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>
          {timeago.format(new Date(timestamp?.toDate()).toLocaleString())}
        </small>
      </div>
    );
  }
);

export default Message;
