import React from 'react'
import "./Services.css"
import ToothI from "../images/Tooth.svg" 
function Services() {
  return (
    <div style={{backgroundColor: 'rgba(248, 253, 255, 1)'}}>
      <div className="services">
        <h1 style={{color:'rgba(0, 59, 121, 1)',margin:'0px',paddingTop:'50px'}}>Our Services</h1>
        <p style={{paddingBottom:'35px'}}>We provide the most full medical servfices , so every person could <br/>
        have the oppurtunuity to receive qualtitative medical help.
        </p>
      </div>
      <div className="cards">
        <div className="sItem"><img src={ToothI} /> <div>Dental Care</div></div>
        <div className="sItem">Pulmonary</div>
        <div className="sItem">Neurological</div>
        <div className="sItem">Prediatrics</div>
      </div>
    </div>
  )
}

export default Services
