import React from 'react'
import './Header.css'


export default function Header() {

  return (
    <React.Fragment>
    <div className="container-fluid">
          <div className='header-nav row'>
              <h2>Join Our Community</h2>
              <h1 className="col-md-12">WELCOME TO BLOCKCHAIN UNN</h1>
              <p className="col-12 col-md-12">A community of digital enthusiasts with a drive to educate, impact and develop members in the university community.</p>
              <div className="header-btn col-md-12">
                <a href="/contact"><span/>Find Out</a>
                <a href="/about"><span/>Read more</a>
              </div>
          </div>

        </div>
    </React.Fragment>
  )
}
