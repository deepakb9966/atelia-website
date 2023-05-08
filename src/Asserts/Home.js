import React from 'react'
import '../asset/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import 'bootstrap/dist/js/bootstrap.min.js';
import backgrond from '../asset/images/home_header.png'
import backgrond_svg from '../asset/images/header_title_bg.svg';
import bgimg from "../asset/images/u23.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Home = () => {
  const header_bg = {
    backgroundImage: `url(${backgrond})`
  }
  return (
    <>
    {/* image */}
    <section className="headerimg">
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='header_bg' style={header_bg}>
          <div className='container'>
            <div className='header_text ' >
              <h5 ><span className='bg' style={{ backgroundImage: `url(${backgrond_svg})` }}>W</span>ELCOME TO ATELIA</h5>
              <h1>Improving quality of care and seeing more patients <b>are not mutually exclusive</b></h1>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
    {/* body */}
    <section  style={{"max-width":"80%",margin:"auto",height:"90vh"}}>
      <div id="u59" className="row" ><p><span>OPTIMIZE PATIENT VISITS</span></p></div>
      <div id="u60" className="row">
              <p>
                <span 
                >The patient’s visit cycle (</span><span 
                  >virtual or clinical</span><span 
                  >) can be </span><span 
                  >optimized </span><span 
                >
                  and also </span><span 
                  >automated</span><span >
                  as much as possible </span><span 
                  >with TechieDoc</span><span
            >.</span>
              </p>
         </div>
        <div id="u53" className="row"><p><span>Build Treatment Plan</span></p></div>
          <div id="u54" className="row">
              <p>
                <span >The assessment and diagnosis of a patient problem needs to be </span><span>more accurate</span><span >. The lack of relevant vital history and correlation of
                  problem with the condition of the patient, their medical records and vital history. </span>
              </p>
          </div>
          <div id="u38" className="row"><p><span>DOWNLOAD WHITE PAPER</span></p></div>
            
  
        
      

      </section>
      <div className='imgbg' style={{ backgroundImage: `url(${bgimg})` }}>
          <div className='container'>
            <div className='header_text-imgbg' >
              <h5 ><span className='bg' style={{ backgroundImage: `url(${backgrond_svg})` }}></span>PLATFORM</h5>
              <h1>Enable and ensure compliance,<br/>cyber security, self audit and continuous review</h1>
            </div>
          </div>
        </div>
        <section  style={{"max-width":"80%",margin:"auto",height:"120vh"}} className="afterimg">
        <div id="u59" className="row" style={{"margin-top":"40px"}}><p><span>OUT OF THE BOX SIEM</span></p></div>
        <div id="u60" className="row" style={{"margin-top":"0px"}}>
              <p>
                <span 
                >Monitor your infrastructure and connected devices for security threats </span><span 
                  >report vulnerabilities and activate response with recovery plan actions</span><span 
                  >.</span>
              </p>
         </div>
         <section  style={{"max-width":"100%",  "margin-top": "260px","margin-right": "-114px",float:"right"}} className="responsive_para">
        <div id="u59" className="row" style={{width:"680px"}}><p><span>E2E & ANONYMIZATION OF PATIENT'S DATA</span></p></div>
        <div id="u60" className="row" style={{float:"right","margin-right": "56px","margin-top":"0px"}} >
              <p  style={{float:"right","margin-right": "-114px","text-aligin":"center"}}>
                <span 
                >Patient data is encrypted in transit and at rest in the Atelia Platform.Public-key encryption <br/>is used not only to protect data, but also to authenticate the source of the data.  </span><span 
                  ></span><span 
                  >The provider is able to direct patient health <br/>data to one or more physicians as necessary. </span>
                  <span>Data sent to the physician’s app is encrypted such that only the intended physician can decrypt the data</span>
              </p>
         </div>
         </section>
        </section>
        <Footer/>
      </>

  )
}

export default Home