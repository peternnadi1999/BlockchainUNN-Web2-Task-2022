import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
  let drawerclass = "side-bar"
  if(props.show){
    drawerclass="side-bar open"
  }
  return (
    <React.Fragment>
         <div className={drawerclass}>
         <br/>
         <span className="span" onClick={props.click}><i className="fa fa-remove"></i></span>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/about">About Us</a></li>
                    {/* <li><a href="#/">Features</a>
                    <div className="subNav">
                        <ul>
                            <li><a href="#/">Product</a></li>
                            <li><a href="#/">Faqs</a></li>
                            <li><a href="#/">Visit us</a></li>
                        </ul>
                    </div>
                    </li> */}
                </ul>
            </div>
    </React.Fragment>
  )
}
