import React,{useState} from 'react';
import Footer from '../components/Footer';
import { GrLocation } from "react-icons/gr";
import { MdMarkEmailUnread } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import SeoComponent from '../components/SeoComponent';
export default function ReachUs() {

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (

    <>
       <SeoComponent page="reachUs"/>

<div className='reach-us'>
      <div className='md:pb-80 bg-[#01012B]'></div>
      <div className='flex max-w-[1200px] mx-auto relative md:top-[-250px]'>
        <div className='flex flex-col md:flex-row w-full'>
        <div className='address-reach-us bg-[#EE3E77] w-full md:flex-1/6 p-4'>
       <h4 className='flex items-center text-white text-2xl font-bold'> <span className='text-4xl'><GrLocation /></span>  Our Offices</h4>
         <div className='address-one text-white pt-5'>
          <h6 className='md:text-2xl text-base font-light md:pt-5 md:pb-3'>New Delhi</h6>
          <h6>B-12, 3rd Floor, Krishna Tower <br />
          New Delhi-110019</h6>
          <h6>Mobile no: +91-9910888110</h6>
         </div>
         <div className="address-two text-white pt-5">
          <h6 className='md:text-2xl text-base font-light md:pt-5 md:pb-3'>Faridabad</h6>
          <h6>C-920, Vipul Plaza, Sector 81,<br /> Faridabad</h6>
          <h6> Haryana - 121002</h6>
          <h6> Mobile no: +91-9910888110</h6>
         </div>
         <div className="address-three text-white py-5">
          <h6 className='md:text-2xl text-base font-light md:pt-5 md:pb-3'>Ambala</h6>
          <h6>57, 2nd Floor, Chandigarh <br /> Complex, Prabhu Prem Puram,<br /> Ambala</h6>
          <h6> Haryana-133001</h6>
         </div>
        </div>
        <div className='reach-us-form md:flex-1/2 w-full p-8 bg-white'>
        <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-between'>
        <h4 className='text-2xl'>Get in Touch</h4>
        <span className='text-5xl text-[#EE3E77]'><MdMarkEmailUnread /></span>
        </div>
        <div className='flex flex-col py-3'>
        <label className='text-gray-700'>Your Name</label>
         <input 
         type="text"
         placeholder='Your Name'
         className='border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400'
         />
        </div>
        <div className='flex flex-col py-3'>
        <label className='text-gray-700'>Your Mobile Number</label>
         <input 
         type="text"
         placeholder='Your Mobile Number'
         className='border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400'
         />
        </div>
        <div className='flex flex-col py-3'>
        <label className='text-gray-700'>Your Email Address</label>
         <input 
         type="text"
         placeholder='Your Email Address'
         className='border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400'
         />
        </div>
        <div className='flex flex-col py-3'>
        <label className='text-gray-700'>Your Message</label>
         <textarea 
         type="text"
         placeholder='Your Message'
         className='border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400'
         />
        </div>
            <ReCAPTCHA
        sitekey="6Lf-LAcrAAAAAHeKy17I9XLg7jsLShRovKqCfD47"  // Google se milega
        onChange={(value) => setCaptchaValue(value)}
      />
          <button type="submit" className='px-3 py-3 rounded bg-[#EE3E77] text-white font-light w-full text-center mt-5 hover:bg-black text-2xl'>Send</button>
          </form>
        </div>
        </div>

      </div>
      <div className="reach-us-footer relative top-[0px] z-0 md:z-10 md:top-[0px]">
        <Footer/>
      </div>
    </div>
    
    </>
  
  )
}
