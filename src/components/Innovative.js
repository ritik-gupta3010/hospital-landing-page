import React from "react";
import "./Innovative.css";
import doctoWomen from "../images/docotWomen.svg";
import van from "../images/van.svg";
import doctorMen from "../images/doctorMen.svg";
function Innovative() {
  return (
    <>
      <div className="innovative">
        <div className="text">
          <h1 style={{ color: "rgba(0, 59, 121, 1)" }}>
            Clinic with Innovative
          </h1>
          <p>
            We provide the most full medical servfices , so every person could{" "}
            <br />
            have the oppurtunuity to receive qualtitative medical help.
          </p>
          <div className="learn">Learn more</div>
        </div>
        <div className="iItem">
          <div className="iRight">
            <img src={doctoWomen} alt="img" />
            <br />
            <span>Qualified Doctors</span>
            <div className="iTop"></div>
            <img src={van} alt="img" />
            <br />
            <span>24 Hour Services</span>
            <div className="iBottom"></div>
          </div>
          <div className="iLeft">
            <img src={doctorMen} alt="img" />
            <br />
            <span>Emergency Care</span>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Innovative;
