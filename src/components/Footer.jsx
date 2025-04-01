import React from 'react'
import { Link } from "react-router-dom";

const footerData = [
    { 
        class: "footer-internet-marketing", 
        title: "Internet Marketing", 
        content: [
            { name: "SEO Services", path: "/seo-services" },
            { name: "PPC", path: "/ppc-services" },
            { name: "SMO", path: "/smo" },
            { name: "Link Building", path: "/link-building" },
            { name: "Guest Blogging", path: "/guest-blogging" }
        ]
    },
    { 
        class: "footer-web-development", 
        title: "Web Development", 
        content: [
            { name: "PHP Development", path: "/php-development" },
            { name: "Facebook Application", path: "/facebook-application" },
            { name: "CMS Development", path: "/cms-development" },
            { name: "Ecommerce Development", path: "/e-commerce" },
            { name: "Content writing", path: "/content-writing" }
        ]
    },
    { 
        class: "footer-wesign", 
        title: "Design", 
        content: [
            { name: "Web Designing Services", path: "/web-design" },
            { name: "Logo Designing", path: "/logo-design" },
            { name: "Website Redisigning", path: "/website-redisigning" },
            { name: "Flash Designing", path: "/flash-designing" },
            { name: "Brochure Designing", path: "/brochure-designing" }
        ]
    },
    { 
        class: "footer-link-bulding", 
        title: "Link Building", 
        content: [
            { name: "Reciprocal Link Building", path: "/reciprocal-link-building" },
            { name: "Bulk Link Building", path: "/bulk-link-building" },
            { name: "One Way Link Building", path: "/one-way-link-building" },
            { name: "Link Building Package", path: "/link-building-package" },
            { name: "Custom Link Building Package", path: "/custom-link-building-package" }
        ]
    }
];

export function Footer() {
    return (
        <footer className='footer-main bg-[#000025] md:bg-transparent w-full pt-5 md:pt-[300px]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto px-5'>
                {
                    footerData.map((footerdata, index) => (
                        <div key={index} className={`${footerdata.class}`}>
                            <h1 className='text-white text-[17px] font-medium'>{footerdata.title}</h1>
                            <ul className='lg:mt-[30px] leading-loose'>
                                {footerdata.content.map((item, idx) => (
                                    <li key={idx} className='text-white font-extralight text-[15px]'>
                                        <Link to={item.path} className="hover:text-[#EC3E73] transition">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
            <p className='text-white px-5 pt-[60px] pb-[50px] text-center font-extralight opacity-[0.8]'>
                © Copyright 2024 Solvonix Technologies. All rights reserved. A parent company of <strong>TeFe Information Technology</strong>
            </p>
        </footer>
    );
}

export default Footer;
