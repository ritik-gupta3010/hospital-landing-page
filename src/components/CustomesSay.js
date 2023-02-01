import React from 'react'
import "./CustomesSay.css"
function CustomesSay() {
  return (
    <div style={{backgroundColor: 'rgba(248, 253, 255, 1)',padding: '20px 50px'}}>
      <h1 style={{color:'rgba(0, 59, 121, 1)',margin:'0px'}}>What our Customers say</h1>
      <div className="feedback">
        <div className="container">
            <p>I wanted to thanks eveyone at this facility for the 
                quality and care and comparison they showed during 
                my stay.
            </p>
            <div style={{display:'flex'}}>
                <div className="img"></div>
                <div className="name">
                    <div>Ritik Gupta</div>
                    <div>patient</div>
                </div>
            </div>
        </div>
        <div className="container">
            <p>I wanted to thanks eveyone at this facility for the 
                quality and care and comparison they showed during 
                my stay.
            </p>
            <div style={{display:'flex'}}>
                <div className="img"></div>
                <div className="name">
                    <div>Ritik Gupta</div>
                    <div>patient</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomesSay
