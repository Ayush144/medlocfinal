import React from "react";
import "./topbar.css";
import { Link } from 'react-router-dom';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><Link className="alink" to="/stockupdate">Dashboard</Link></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://wallpaperaccess.com/full/1476380.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}