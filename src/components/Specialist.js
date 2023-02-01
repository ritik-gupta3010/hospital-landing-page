import React from 'react'
import "./Specialist.css"
function Specialist() {
  return (
    <>
      <div style={{backgroundColor: 'rgba(248, 253, 255, 1)'}}>
      <div className="specialist">
        <h1 style={{color:'rgba(0, 59, 121, 1)',paddingTop:'50px'}}>We have the best Specialist</h1>
        <p>We provide the most full medical servfices , so every person could <br/>
        have the oppurtunuity to receive qualtitative medical help.
        </p>
      </div>
      <div className="spCards">
        <div className="spItem">Dental Care</div>
        <div className="spItem">Pulmonary</div>
        <div className="spItem">Neurological</div>
        <div className="spItem">Prediatrics</div>
      </div>
      </div>
    </>
  )
}

export default Specialist
