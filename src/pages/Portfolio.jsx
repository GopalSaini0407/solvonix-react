import React from 'react';
import PortfolioTabs from '../components/PortfolioTab';
import SeoComponent from '../components/SeoComponent';

export default function Portfolio() {
  return (

    <>
   <SeoComponent page="portfolio"/>

<div className='portfolio'>
      <div className='pb-5'>
      <PortfolioTabs/>
      </div>
    </div>
    
    </>
   
  )
}

