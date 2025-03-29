import React from 'react';
import { Link } from 'react-router-dom';

const subMenuData = [
  {
    title: "Internet Marketing",
    links: [
      { name: "SEO Services", path: "/seo-services" },
      { name: "SEM Services", path: "/sem-services" },
      { name: "Link Building", path: "/link-building" },
      { name: "PPC Services", path: "/ppc-services" },
      { name: "Blog Marketing", path: "/blog-marketing" },
      { name: "Article Syndication", path: "/article-syndication" },
    ],
  },
  {
    title: "Designing",
    links: [
      { name: "Web Design", path: "/web-design" },
      { name: "Logo Design", path: "/logo-design" },
      { name: "PSD to HTML", path: "/psd-to-html" },
      { name: "Brochure Designing", path: "/brochure-designing" },
      { name: "Flyer Designing", path: "/flyer-designing" },
      { name: "Image Cutout", path: "/image-cutout" },
    ],
  },
  {
    title: "Development",
    links: [
      { name: "Website Development", path: "/website-development" },
      { name: "Facebook Application", path: "/facebook-application" },
      { name: "PHP Development", path: "/php-development" },
      { name: "CMS Development", path: "/cms-development" },
      { name: "E-Commerce", path: "/e-commerce" },
      { name: "Content Creation", path: "/content-creation" },
    ],
  },
];

export default function SubMenu() {
  return (
    <div className="sub-menu bg-white text-black p-4 w-full border-b-4 border-b-[#EC3E73] shadow-lg duration-300 
                    grid grid-cols-1 md:grid-cols-3   md:gap-3">
      {subMenuData.map((category, index) => (
        <div key={index} className="px-4">
          <h3 className="text-[#EE3E77] text-[14px] font-semibold text-lg mb-2 text-nowrap">{category.title}</h3>
          <ul className="space-y-1 navbar">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex} className='text-nowrap text-[14px] relative'>
                <Link to={link.path} className="hover:text-[#EC3E73] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
