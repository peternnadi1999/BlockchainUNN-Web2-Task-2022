import React,{useState} from 'react'
import Header from './Header'
import './Home.css'
import NavContainer from './Navigation/NavContainer'

function Home() {
const [ImageOpen, setImageOpen]= useState(true);
const [ImageOpen1, setImageOpen1]= useState(false);

const imageHandlerclose=()=>{


    setImageOpen1(false);
    setImageOpen(true);
  
}
const imageHandlerclose1=()=>{

    setImageOpen1(true);
    setImageOpen(false);
  
  
}

    return (
      <React.Fragment>
          <div className="header"> 
            <NavContainer/>
            <Header/>
          </div>
          {/* Features */}
          <section className="feature container">
              <div className="feature-head">
                <p>Features</p>
                <h1>Why Choose Us</h1>
              </div>
                <div className="row feature-box" style={{margin:"10px"}}>
                  <div className="feature col-md-6 col-sm-12">
                    <h1>We are one of the Largest Blockchain Community</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati soluta reprehenderit accusamus! Ipsa eaque rerum doloremque cumque sequi id beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati soluta reprehenderit accusamus! Ipsa eaque rerum doloremque cumque sequi id beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati soluta reprehenderit accusamus! Ipsa eaque rerum doloremque cumque sequi id beatae.</p>
                  </div>
                  <div className="images col-md-6 col-sm-12">

                  
                  </div>

                </div>
          </section>
          <section className="feature">
              <div className="feature-head">
                <p>What We Do</p>
                <h1>Key Skills We Educate Persons on</h1>
              </div>
                <div className="row feature-skills">

                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-500px"></i>  Community Management/Business Management</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-bitcoin"></i> Financial Market Analysis/Crypto Trading</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-file-text-o"></i>  Content Creation and Writing</p>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-window-maximize"></i>  Web Development</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-chain"></i>  Blockchain Development</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-window-restore"></i>  Web2/ Web3</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-bar-chart"></i>  Decentralised Finance</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p> <i className="fa fa-facebook-square"></i>  Social Media Management</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                  <p><i className="fa fa-gg-circle"></i>  Art/NFT/Graphics Designing</p>
                  </div>

                </div>
              
          </section>
          <section className="feature">
              <div className="feature-head">
                <p>Team</p>
                <h1>Our Team Members</h1>
              </div>
                <div className="row feature-skills">

                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i><a href="https://twitter.com/NdukaAnthonyA">Nduka Aannaelechukwu Anthony (Core team)</a></p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i> <a href="https://twitter.com/kevin_chibuoyim" >Okoye Kevin Chibuoyim (Core team)</a></p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i><a href="https://twitter.com/alvanokey">Okechukwu Alvan (Core team)</a></p>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Eze Thiago Stanley (Graphics designer)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Favour Umuoren (Graphics designer)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Michael Anazodo (Backend developer)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Bell Omuboye (Backend developer)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Apollos Kinsley (Web and UI designer)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Smith Kalu (Community Manager)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Ogbonna Shedrack (Social Media Manager)</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <p><i className="fa fa-arrow-right"></i>Anita Darlington (Community Manager/AMA Handler</p>
                  </div>

                </div>
              
          </section>
          <section className="feature container">
              <div className="feature-head">
                <p>Founders</p>
                <h1>Co-Founder</h1>

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
         
          <section className="feature container">
              <div className="feature-head">
                <p>Partiners</p>
                <h1>Our Partiners</h1>
              </div>

              <div className="row feature-boxs">

                <div className="box col-md-3 col-sm-3 mb-5">
                </div>
                <div className="box1 col-md-3 col-sm-3 mb-3" >
                </div>
                <div className="box2 col-md-3 col-sm-3 mb-3">
                </div>
                <div className="box3 col-md-2 col-sm-3 mb-3">
                </div>

              </div>
          </section>
          <section className="feature">
              <div className="feature-head">
                <p>Photo</p>
                <h1>Photo Gallery</h1>
                <div className="button">
                    <span onClick={imageHandlerclose} style={{margin:"10px", padding:"10px", }}>Page 1</span>
                    <span onClick={imageHandlerclose1} style={{margin:"10px", padding:"10px", }}>Page 2</span>
                </div>
              </div>
                      {ImageOpen && 
              <div className="row images-boxs container">

                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/event.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12" >
                  <img src="images/image/event2.jpg"   alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/event3.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/webd.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/team.jpg" alt="event"/>
                </div>
                

              </div>}
              {ImageOpen1 &&
              <div className="row images-boxs container">

                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/conf.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/event8.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12" >
                  <img src="images/image/event5.jpg"   alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/event6.jpg" alt="event"/>
                </div>
                <div className="image col-md-4 col-sm-12">
                  <img src="images/image/event7.jpg" alt="event"/>
                </div>

              </div>}
          </section>

      </React.Fragment>
    )
}

export default Home