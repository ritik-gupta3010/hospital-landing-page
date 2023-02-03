import React from 'react'
import "./Home.css"
function Home() {
  return (
    <>
    
      <div className="welcome">
        <div className="text1">
            <h3>Welcome To MediCare Clinic</h3>
            <h1 style={{color:'rgba(0, 59, 121, 1)'}}>Best Specialiste</h1>
            <p>We are on the leading edge of cancer care.Providing the full <br/>continunn of cancer treatments and 
                supportive care services in a <br/> single convenient location.
            </p>
            <div className="button">
                <div className="appointment">
                    Make an appointment
                </div>
                <div className="department">
                    Departments
                </div>
            </div>
        </div>
        <div className="card"></div>
      </div>
    </>
  )
}

export default Home
