import React from 'react'
import Navmenu from './Asserts/Navmenu';
import Why_Atelia from './Asserts/Why_atelia';
import Platform from './Asserts/platform';
import Home from './Asserts/Home';
import Syn_Monitoring from './Asserts/solution/Syn_Monitoring';
import Careplan_monitoring from './Asserts/solution/Careplan_monitoring';
import Wellness_monitoring from './Asserts/solution/Wellness_monitoring';
import Patient_opt from './Asserts/solution/Patient_opt';
import Soap_opt from './Asserts/solution/Soap_opt';
import About from './Asserts/company/About';
import Contact from './Asserts/company/Contact';
import Patners from './Asserts/Patners';
import Footer from './Asserts/footer';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const App = () => {
  return (
    // <AnimationOnScroll animateIn="animate__fadeInUpBig">
    <BrowserRouter>
      <Navmenu />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/why" element={<Why_Atelia />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/syn_mon" element={<Syn_Monitoring />} />
        <Route path="/careplan_mon" element={<Careplan_monitoring />} />
        <Route path="/wellness_mon" element={<Wellness_monitoring />} />
        <Route path='/patient_opt' element={<Patient_opt />}/>
        <Route path='/soap_opt' element={<Soap_opt />}/>
        <Route path='/about_us' element={<About />}/>
        <Route path='/contact_us' element={<Contact />}/>
        <Route path='/patners' element={<Patners />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    // </AnimationOnScroll>
  )
}

export default App