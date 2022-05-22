import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import NavContainer from './Navigation/NavContainer'
import './Home.css'
import BackToTop from './BackToTop'

export default function About(){

    return(

        <React.Fragment>

            <div className="top">
                <NavContainer/>
                <p> <Link to="/"> Home </Link> |<span> About</span></p>
            </div>

            <section className="feature container">
              <div className="feature-head">
                <p>About us</p>
                <h1>Why Choose Us</h1>
              </div>
                <div className="row feature-box" style={{margin:"10px"}}>
                  <div className="feature col-md-6 col-sm-12">
                    <h1>Brief History About Blockchain UNN</h1>
                    <p>BLOCKCHAIN UNN was founded On April 27, 2021 by Nduka Anthony 
                Blockchain technology enthusiasts and FTX UNN campus Ambassador, Okoye Kevin Chibuoyim-CEO & Founder, Ginakev Digital Academy (GIDA) and Okechukwu Victor Alvan- Director, Alvan CryptoHub.
                BLOCKCHAIN UNN is a community of digital enthusiasts with a drive to educate, impact and develop members of the University community with both basic and advanced knowledge of cryptocurrency and Blockchain, as well as its technology and development in UNN/UNEC Campuses.</p>
                  </div>
                  <div className="imagesr col-md-6 col-sm-12">

                  
                  </div>

                </div>
          </section>
            <div className="cards container">

                <div className="cars">
                    <h2>Community Mission and Vision</h2>
                    <p>To educate and develop community members (including Students and Lectures) of the University of Nigeria, Nsukka with basic knowledge of cryptocurrency on Blockchain Education & Development.
                    we have the vision of being the best Campus Blockchain Community in Africa.</p>
                </div>

                <div className="cars"> 
                    <h2>Community Logo</h2>
                    <p>To represent the lion UNN holds in high esteem as well as Blockchain Concept, the logo was scripted from scratch to combine both the lion and Blockchain nodes.</p>
                </div>

            </div>
            <section className="feature container">
              <div className="feature-head">
                <p>Team Member</p>
                <h1>Our Team Member</h1>

               <div className="row features mb-5">
                <div className="col-md- feature1">
                  <h4>Okoye Kevin Chibuoyim</h4>
                  <h5>Co-Founder BlockchainUNN; CEO & Founder, Ginakev Digital Academy (GIDA)</h5>
                </div>
                <div className=" feature2">
                  <h4>Alvan Victor Okechukwu  </h4>
                  <h5>Co-Founder BlockchainUNN; Director, Blockchain4U</h5>
                </div>
                <div className=" feature3">
                  <h4>Nduka Aannaelechukwu Anthony</h4>
                  <h5>Co-Founder BlockchainUNN; Founder, A1 Blockchain Hub</h5>
                </div>
                </div>
              </div>
          </section>
      <BackToTop />
        <Footer/>
        </React.Fragment>
    )

}