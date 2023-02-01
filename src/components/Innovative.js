import React from 'react'
import "./Innovative.css"
import doctoWomen from "../images/docotWomen.svg"
function Innovative() {
  return (
    <>
      <div className="innovative">
        <div className="text">
            <h1 style={{color:'rgba(0, 59, 121, 1)'}}>Clinic with Innovative</h1>
            <p>We provide the most full medical servfices , so every person could <br/>
            have the oppurtunuity to receive qualtitative medical help.
            </p>
            <div className="learn">Learn more</div>
        </div>
        <div className="iItem">
            <div className="iRight">
                <div className="iTop"><img src={doctoWomen}/></div>
                <div className="iBottom">222</div>
            </div>
            <div className="iLeft">
                <div className="box">333</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Innovative
