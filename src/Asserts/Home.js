import React from 'react'
import '../asset/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import backgrond from '../asset/images/home_header.png'
import backgrond_svg from '../asset/images/header_title_bg.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Home = () => {
  const header_bg = {
    backgroundImage: `url(${backgrond})`
  }
  return (
    <div>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
      <section>
        <div className='header_bg' style={header_bg}>
          <div className='container'>
            <div className='header_text ' >
              <h5 ><span className='bg' style={{ backgroundImage: `url(${backgrond_svg})` }}>W</span>ELCOME TO ATELIA</h5>
              <h1>Improving quality of care and seeing more patients <b>are not mutually exclusive</b></h1>
            </div>
          </div>
        </div>
      </section>
      </AnimationOnScroll>
      <section style={{ height:"90vh" }}>

      </section>
      

    </div>
  )
}

export default Home