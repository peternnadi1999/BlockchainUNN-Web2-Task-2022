import React from 'react'
import  "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer ">

        <div className="footer-img ">
        <Link to="/"><img src="images/image/logo1.png" alt="logo"/></Link>
        </div>
        <div className="col-md-12">
            <div className="footer-content row">
                <div className="footer-left col-md-6  col-sm-12">
                    <h2>Navigation</h2>
                    <p><Link to="/"> Home</Link></p>
                    <p><Link to="/contact">Contact us</Link></p>
                    <p><Link to="/about">About us</Link></p>
                </div>
                <div className="footer-right col-md-6  col-sm-12">
                    <h2>Get in Touch</h2>
                    <p>University of Nigeria, Nsukka    <i className="fa fa-map-marker"></i></p>
                    <p>Blockchain@unn    <i className="fa fa-paper-plane"></i></p>
                    <p>+234 70456374    <i className="fa fa-phone"></i></p>
                </div>
            </div>
        </div>
        <div className="social-link">
              <a href="https://facebook.com/BlockchainUNN"><i className="fa fa-facebook"></i></a>
              <a href="https://instagram.com/BlockchainUNN"><i className="fa fa-instagram"></i></a>
              <a href="https://twitter.com/BlockchainUNN"><i className="fa fa-twitter"></i></a>
              <a href="https://t.me/BlockchainUNN"><i className="fa fa-map-marker"></i></a>
              <p >Copyrite &copy; 2022 Blockchain Unn By Peter</p>
        </div>
           
        
    </div>
  )
}
