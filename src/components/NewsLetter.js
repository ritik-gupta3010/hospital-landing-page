import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <>
      <div style={{ backgroundColor: "rgba(236, 244, 255, 1)" }}>
        <div className="containerN">
          <div style={{display:"flex",flexDirection:'column',marginTop: '-50px' ,marginBottom: '25px'}}>
            <span style={{fontWeight:'500',fontSize:'40px'}}>Subscribe to newsletter</span>
            <span>We have a wide experience in experience design and strategy</span>
          </div>
          <div 
          style={{
            backgroundColor:'white',padding:'20px' ,borderRadius:'15px',width:'50%',
            justifyContent: 'space-between',display: 'flex',
          }}
          >
          
            <input placeholder="Enter your email address" style={{width: '80%',border: 'none'}}/>
            <button className="btn">Send Now</button>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
