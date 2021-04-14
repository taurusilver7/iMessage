import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("chats").onSnapshot((snap) => {
      setChats(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [user]);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => alert(error.message));
  };

  const addChat = () => {
    const chatName = prompt("Please enter a chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar onClick={logOut} src={user.photo} className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton className="sidebar__inputBtn" variant="outlined">
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
