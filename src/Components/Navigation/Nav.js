import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import logo1 from '../images/logo1.png'
import logo from '../images/logo.png'


export default function Nav(props) {
    const [menuOpen, setMenuOpen]= useState(false);
useEffect(()=>{
    window.addEventListener("scroll", function (){
        if(window.scrollY >2){
            setMenuOpen(true);
        }else{
            setMenuOpen(false)
        }
    })

    
},[])

  return (
    <React.Fragment>
        <div className={menuOpen ? "nav-container1" :"nav-container"}>

            <div className="logo">
            <Link to="/"><img src={menuOpen ? logo1: logo} width="250" alt="logo" /></Link>
            </div>

            <div className="spacer"/>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {/* <li><Link to="#/">Features</Link>
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
                
                <div className="nav-menu">
                        <i onClick={props.click} className={menuOpen ? "fa fa-bars text-black": "fa fa-bars text-white"}></i>
                </div>
               
            </div>
        </React.Fragment>
  )
}
