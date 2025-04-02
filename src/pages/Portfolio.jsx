import React from 'react';
import PortfolioTabs from '../components/PortfolioTab';
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  return (

    <>

<div className='portfolio'>
      <div className='pb-5'>
      <PortfolioTabs/>
      </div>
    </div>
    
    </>
   
  )
}

