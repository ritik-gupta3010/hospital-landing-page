import React from 'react'
import "./Services.css"
import ToothI from "../images/Tooth.svg"
import lungs from "../images/lungs.svg"
import brain from "../images/brain.svg"
import medicalFile from "../images/medicalFime.svg"
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
        <div className="sItem">
          <img src={ToothI} alt="img"/>
           <div style={{paddingTop: '25px'}}>Dental Care</div>
           
      </div>
        <div className="sItemL">
          <img src={lungs} alt="img"/>
          <div style={{paddingTop: '25px'}}>Pulmonary</div>
          <div className='learnMoreBtn'>Learn More</div>
        </div>
        <div className="sItem"><img src={brain} alt="img"/><div style={{paddingTop: '25px'}}>Neurological</div></div>
        <div className="sItem"><img src={medicalFile} alt="img"/><div style={{paddingTop: '25px'}}>Prediatrics</div></div>
      </div>
    </div>
  )
}

export default Services
