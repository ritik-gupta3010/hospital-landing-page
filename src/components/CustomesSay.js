import React from "react";
import "./CustomesSay.css";
import badge from "../images/badge.svg";
import photo1 from "../images/photo1.svg";
function CustomesSay(props) {
  console.log(props.info);
  return (
    <div
      style={{
        backgroundColor: "rgba(248, 253, 255, 1)",
        padding: "20px 50px",
      }}
    >
      
        <div className="container">
          <img
            src={badge}
            alt=""
            style={{ position: "absolute", right: "-9%", top: "-12%" }}
          />
          {props.info.Reviews}

          <div style={{ display: "flex" }}>
            <div className="img">
              <img src={photo1} alt="" />
            </div>
            <div className="name">
              <div>{props.info.Name}</div>
              <div>Patient</div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default CustomesSay;
