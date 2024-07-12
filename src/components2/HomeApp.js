import React, { useEffect } from "react";
import { Userinfo } from "./Userinfo";
import { useDispatch } from "react-redux";
import { postinfoThunk, userinfoThunk } from "../Redux/thunk";
import "./HomeApp.scss";
import { PostsApp } from "./PostsApp";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { TabsApp } from "./TabsApp";
import { updateAuth } from "../Redux/Authslice";

export const HomeApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(updateAuth(false));
  };
  useEffect(() => {
    dispatch(userinfoThunk);
    dispatch(postinfoThunk);
  }, []);
  return (
    <div>
      <div className="home-navbar">
        <Button onClick={handleLogout}>logout</Button>
        <img src="ilogo.webp" alt="logo" width="46px" height="46px" />
      </div>
      <div className="homediv">
        <div className="left">
          <Userinfo />
          <PostsApp />
        </div>
        <div className="right">
          <TabsApp />
        </div>
      </div>
    </div>
  );
};
