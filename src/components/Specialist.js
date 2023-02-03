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
        <div className="spItem">
          <div style={{backgroundColor:'rgba(174, 211, 226, 1)',height:"250px",width:"250px",borderRadius:"10px"}}></div>
          <div style={{padding: '15px'}}>Dr. Awaatif Ali</div> 
          <div style={{padding: '15px'}}>Dental Care</div>
        </div>
        <div className="spItem"><div style={{backgroundColor:'rgba(174, 211, 226, 1)',height:"250px",width:"250px",borderRadius:"10px"}}></div><div style={{padding: '15px'}}>Dr. Filipa Gaspar</div><div>Pulmonary</div></div>
        <div className="spItem"><div style={{backgroundColor:'rgba(174, 211, 226, 1)',height:"250px",width:"250px",borderRadius:"10px"}}></div><div style={{padding: '15px'}}>Dr. Sukhmeet Gorae</div><div>Neurological</div></div>
        <div className="spItem"><div style={{backgroundColor:'rgba(174, 211, 226, 1)',height:"250px",width:"250px",borderRadius:"10px"}}></div><div style={{padding: '15px'}}>Dr. Siri jakobssan</div><div>Prediatrics</div></div>
      </div>
      </div>
    </>
  )
}

export default Specialist
