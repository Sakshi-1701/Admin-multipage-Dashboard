import React from "react";
import "./featuredinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">Rs. 10,56,432</span>
          <span className="featuredMoneyRate">
            -9.4
            <ArrowDownwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">Rs. 6,34,000</span>
          <span className="featuredMoneyRate">
            +2.6
            <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month</span>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney">Rs. 10,56,432</span>
          <span className="featuredMoneyRate">
            -1.2
            <ArrowDownwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month</span>
      </div>

    </div>
  );
}

export default Featuredinfo;
