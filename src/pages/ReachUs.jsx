import React, { useState } from 'react';
import Footer from '../components/Footer';
import { GrLocation } from "react-icons/gr";
import { MdMarkEmailUnread } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import SeoComponent from '../components/SeoComponent';
import { motion } from 'framer-motion';

export default function ReachUs() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA");
      return;
    }
    alert("Form submitted successfully!");

    console.log("name", name);
    console.log("email", email);
    console.log("mobile", mobile);
    console.log("message", message);

    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <SeoComponent
        page="reachUs"
        title="reachUs"
        description="Solvonix Technologies a well known SEO Company of India providing SEO services. Wanna reasonable SEO services in India? Professional SEO Company in India to help you. Call us for SEO services, PPC services, Link Building services and SMO services in India."
        keywords="SEO India , SEO Company India , ROI Based SEO Services India&lrm , SEO Services In India, Best SEO company, SEO company in India"
      />

      <div className='reach-us'>
        <div className='md:pb-80 bg-[#01012B]'></div>
        <div className='flex max-w-[1200px] mx-auto relative md:top-[-250px]'>
          <div className='flex flex-col md:flex-row w-full'>

            {/* Address Section */}
            <motion.div
              className='address-reach-us bg-[#EE3E77] w-full md:flex-1/6 p-4 text-white'
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className='flex items-center text-2xl font-bold'>
                <span className='text-4xl mr-2'><GrLocation /></span> Our Offices
              </h4>
              <div className='address-one pt-5'>
                <h6 className='md:text-2xl text-base font-light pt-5 pb-3'>New Delhi</h6>
                <h6>B-12, 3rd Floor, Krishna Tower <br /> New Delhi-110019</h6>
                <h6>Mobile no: +91-9910888110</h6>
              </div>
              <div className="address-two pt-5">
                <h6 className='md:text-2xl text-base font-light pt-5 pb-3'>Faridabad</h6>
                <h6>C-920, Vipul Plaza, Sector 81,<br /> Faridabad</h6>
                <h6> Haryana - 121002</h6>
                <h6> Mobile no: +91-9910888110</h6>
              </div>
              <div className="address-three py-5">
                <h6 className='md:text-2xl text-base font-light pt-5 pb-3'>Ambala</h6>
                <h6>57, 2nd Floor, Chandigarh <br /> Complex, Prabhu Prem Puram,<br /> Ambala</h6>
                <h6> Haryana-133001</h6>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              className='reach-us-form md:flex-1/2 w-full p-8 bg-white rounded-xl shadow-lg'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <motion.div
                  className='flex items-center justify-between'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className='text-2xl'>Get in Touch</h4>
                  <span className='text-5xl text-[#EE3E77]'><MdMarkEmailUnread /></span>
                </motion.div>

                {[
                  { label: "Your Name", type: "text", value: name, setter: setName, placeholder: "Your Name" },
                  { label: "Your Mobile Number", type: "number", value: mobile, setter: setMobile, placeholder: "Your Mobile Number" },
                  { label: "Your Email Address", type: "email", value: email, setter: setEmail, placeholder: "Your Email Address" },
                ].map((field, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col py-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-gray-700">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                    />
                  </motion.div>
                ))}

                {/* Message Field */}
                <motion.div
                  className='flex flex-col py-3'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className='text-gray-700'>Your Message</label>
                  <textarea
                    placeholder='Your Message'
                    className='border-0 outline-0 border-b-[1px] p-2 border-gray-400 text-gray-400'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </motion.div>

                {/* reCAPTCHA */}
                <motion.div
                  className="pt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ReCAPTCHA
                    sitekey="6LfqhCkrAAAAALg5Ctr2uYCd95mftSVcFRsdBrro"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className='px-3 py-3 rounded bg-[#EE3E77] text-white font-light w-full text-center mt-5 hover:bg-black text-2xl'
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="reach-us-footer relative top-[0px] z-0 md:z-10 md:top-[0px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
