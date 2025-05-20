import React, { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    requirement: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      requirement: '',
    });
  };

  return (
    <div className="w-full lg:w-[90%] rounded-2xl overflow-hidden shadow-md bg-white" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="bg-[#ea006d] p-4 text-center mb-6">
        <h2 className="text-3xl font-bold">Connect With Us</h2>
        <p className="text-lg">Get No Obligation Free Quote!</p>
      </div>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-sm">
          ✅ Thank you! Your request has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className='px-4'>
        {/* Input with icon */}
        {[
          { name: 'fullName', placeholder: 'Full Name', icon: 'user1.png', type: 'text' },
          { name: 'email', placeholder: 'Email Address', icon: 'mail1.png', type: 'email' },
          { name: 'phone', placeholder: 'Phone Number', icon: 'phone1.png', type: 'tel' },
        ].map((field) => (
          <div className="mb-4 flex items-center border border-t-0 border-l-0 border-r-0 border-gray-300 bg-white text-black rounded" key={field.name}>
            <img src={`/images/${field.icon}`} alt="img" className="w-5 h-5 mr-2" />
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full py-2 outline-none text-sm"
              required
            />
          </div>
        ))}

        {/* Country Select */}
        <div className="mb-4 flex items-center border border-t-0 border-l-0 border-r-0 border-gray-300 bg-white text-black rounded">
          <img src="/images/country1.png" alt="" className="w-5 h-5 mr-2" />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full py-2 outline-none bg-transparent text-sm"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>

        {/* Requirement */}
        <div className="mb-4 flex items-center border border-t-0 border-l-0 border-r-0 border-gray-300 bg-white text-black rounded">
          <img src="/images/comment1.png" alt="" className="w-5 h-5 mr-2" />
          <input
            type="text"
            name="requirement"
            placeholder="Your requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full py-2 outline-none text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="py-3">
          <button
            type="submit"
            className="w-full bg-[#ed3c75] text-white font-semibold py-2 rounded transition duration-300"
          >
            Request A Consultation
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
