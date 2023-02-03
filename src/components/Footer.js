import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
function footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
            <FacebookIcon/>
            <GoogleIcon/>
            <TwitterIcon/>
        </div>
        <span style={{margin: '20px 50px'}}>2020 podpayment - 2020</span>
      </div>
    </>
  )
}

export default footer
