// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import HeaderBottom from './components/HeaderBottom';
import WhoWeAre from './pages/WhoWeAre';
import Careers from './pages/Careers';
import Portfolio from './pages/Portfolio';
import ReachUs from "./pages/ReachUs";

// submenu
import SubComponent from './components/SubComponent';

import Navbar from './components/Navbar';

import Demo from './components/Demo';

function App() {

  return (
    <>
  <Router>
  <Navbar/>
  <Header/>
    <Routes>
      <Route path='/demo' element={<Demo/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/what-we-do' element={<Home/>}/>
      <Route path='/about' element={<WhoWeAre/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/reach-us" element={<ReachUs/>}/>
      

      <Route path='/seo-services' element={<SubComponent/>} /> 
      <Route path='/sem-services' element={<SubComponent/>} /> 
      <Route path='/link-building' element={<SubComponent/>} />
      <Route path='/ppc-services' element={<SubComponent/>} /> 
      <Route path='/blog-marketing' element={<SubComponent/>} />  
      <Route path='/article-syndication' element={<SubComponent/>} />  
      <Route path='/web-design' element={<SubComponent/>} />  
      <Route path='/logo-design' element={<SubComponent/>} />  
      <Route path='/psd-to-html' element={<SubComponent/>} />    
      <Route path='/brochure-designing' element={<SubComponent/>} />  
      <Route path='/flyer-designing' element={<SubComponent/>} />  
      <Route path='/image-cutout' element={<SubComponent/>} />  
      <Route path='/website-development' element={<SubComponent/>} /> 
      <Route path='/facebook-application' element={<SubComponent/>} /> 
      <Route path='/php-development' element={<SubComponent/>} /> 
      <Route path='/cms-development' element={<SubComponent/>} /> 
      <Route path='/e-commerce' element={<SubComponent/>} /> 
      <Route path='/content-creation' element={<SubComponent/>} /> 




    </Routes>
    {/* <HeaderBottom/> */}

  </Router>
    </>
  )
}

export default App
