import React from "react";
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIcons">
            <NotificationsNoneIcon/>
            </div>
            <div className="topbarIcons">
            <GTranslateIcon/>
            </div>
            <div className="topbarIcons">
            <SettingsIcon/>
            </div>
            <div className="topbarIcons">
            <DarkModeIcon/>
            </div>
        <img src="https://cdn2.vectorstock.com/i/thumb-large/31/66/young-woman-with-laptop-vector-37053166.jpg" alt="dp" className="avatar" />    
        </div>
      </div>
    </div>
  );
}

export default Topbar;
