import React from 'react'
import { Link } from 'react-scroll'


function Footer() {
  return (
<>
<div className="mainftr">
  <footer className="footer">
    <div className="footer-top">
      <h1 className="logo1">RUBBER</h1>
      <div className="footer-links">
        <div>
          <h3>Explore</h3>
          <a href="#">Home</a>
          <a href="#">Products</a>
        </div>
        <div>
          <h3>Support</h3>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <h3>Utility</h3>
          <a href="#">Instruction</a>
          <a href="#">License</a>
        </div>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter ftricon" /></a>
        <a href="#"><i className="fab fa-facebook ftricon" /></a>
        <a href="#"><i className="fab fa-instagram ftricon" /></a>
        <a href="#"><i className="fab fa-github ftricon" /></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p><a href="#">License</a> | <a href="#">Style Guide</a> | <a href="#">Customize</a></p>
      <p>Copyright © Design & Developed by <strong>Sidharth</strong>. Powered by <strong>ComedKares</strong></p>
    </div>
  </footer>
</div>

</>  )
}

export default Footer