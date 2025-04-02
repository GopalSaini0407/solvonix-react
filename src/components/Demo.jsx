import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Demo = () => {
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
    <form onSubmit={handleSubmit} className="p-50">
      <input type="text" placeholder="Enter your name" required />
      <ReCAPTCHA
        sitekey="6Lf-LAcrAAAAAHeKy17I9XLg7jsLShRovKqCfD47"  // Google se milega
        onChange={(value) => setCaptchaValue(value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Demo;
