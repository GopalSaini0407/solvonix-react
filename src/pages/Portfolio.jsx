import React from 'react';
import PortfolioTabs from '../components/PortfolioTab';
import SeoComponent from '../components/SeoComponent';

export default function Portfolio() {
  return (

    <>
   <SeoComponent page="portfolio"
   
   title="Solvonix Technologies"
   description="Solvonix Technologies a well known SEO Company of India providing SEO services. Wanna reasonable SEO services in India? Professional SEO Company in India to help you. Call us for SEO services, PPC services, Link Building services and SMO services in India."
   keywords="SEO India , SEO Company India , ROI Based SEO Services India&lrm , SEO Services In India, Best SEO company, SEO company in India"

   />

<div className='portfolio'>
      <div className=''>
      <PortfolioTabs/>
      </div>
    </div>
    
    </>
   
  )
}

