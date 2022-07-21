import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import "./sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FlagIcon from '@mui/icons-material/Flag';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={"/"} className="myHome">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <InsertChartIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/users" className="link">
            <li className="sidebarListItem">
              
              <AccountCircleIcon className="sidebarIcon" />
              Users
            </li>
            </Link>

            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <PaymentIcon className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <CurrencyRupeeIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon" />
              reports
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccountsIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <FlagIcon className="sidebarIcon" />
              Reports
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
