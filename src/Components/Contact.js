import React from 'react'
import Card from './UI/Card'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import classes from './Contact.module.css'
import NavContainer from './Navigation/NavContainer'
import BackToTop from './BackToTop'

export default function Contact() {

  
  return (
    <React.Fragment>
      <Card>
        <NavContainer/>
        <div className={classes.head}>
        <p ><Link to="/">Home</Link> |<span> Contact</span></p>
        </div>
      </Card>
    <div>
      
            <div className={classes.form}>

        <h2 className={classes.header}>Responsive Contact us Form</h2>

        <form className={classes.control}>
          <div style={{display:"flex", marginBottom:"15px"}}>
          <div className={classes.form_control}>
            <label htmlFor="name">First Name</label><br/>
            <input type="text" name="firstname" id="name"/>
          </div>
          <div  className={classes.form_control} style={{marginLeft:"50px"}}>
            <label htmlFor="last">Last Name</label><br/>
            <input type="text" name="lastname" id="last"/>
          </div>
          </div>

          <div style={{display: "flex", marginBottom:"15px"}}>
          <div className={classes.form_control}>
            <label htmlFor="email">Email Address</label><br/>
            <input type="email" name="email" id="email"/>
          </div>
          <div className={classes.form_control} style={{marginLeft:"50px"}}>
            <label htmlFor="website">Phone number</label><br/>
            <input type="number" name="website" id="website"/>
          </div>
          </div>
          <div className="h">
            <label htmlFor="text">Write Your message</label><br/>
            <textarea rows="1" id="text"></textarea>
          </div>

          <div>
            <button onClick={(e)=>{e.preventDefault()}} className={classes.btn}>Submit</button>
          </div>
        </form>
        </div>



    </div>

      <BackToTop/>
      <Footer/>
    </React.Fragment>
  )
}
