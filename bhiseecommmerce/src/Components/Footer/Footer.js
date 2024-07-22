import React from 'react'
import "./Footer.css"
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear()
  return (
    <>
    <div className='fottercontainer'>
      <div>
        <ul>
          <li>Home</li>
          <li> About HDX</li>
          <li>My Account</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Tshirts</li>
          <li>Mugs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
      </div>
      <div className='socialicon'>
        <div >
          <div>
            <img src="youtube.png" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src="twitter.png" alt="" />
          </div>
        </div>
        <div> 
          <div>
            <img src="facebook.png" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src="instagram.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='copyrightsection'>
    <div className='copyright'>
      <div>
        <p>
      Copyright © {year} Custom Printing Pro
        </p>
      </div>
      <div>
        <p>
        Powered by Custom Printing Pro
        </p>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer