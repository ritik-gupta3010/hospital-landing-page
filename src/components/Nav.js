import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="left">
            <span style={{color:'#0073FF'}}>Medi</span>
            <span style={{color:'hsla(21, 100%, 71%, 1)'}}>Care+</span>
        </div>
        <div className="right">
            <div className="hItem">Home</div>
            <div className="hItem">About</div>
            <div className="hItem">Services</div>
            <div className="hItem">News</div>
            <div className="hItemC">Contact</div>
        </div>
      </nav>
    </>
  )
}

export default Nav
