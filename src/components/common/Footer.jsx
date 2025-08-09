import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import footerLinks from '../../data/footerLinks';
import FooterCard from './FooterCard';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/parth-lahoti/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com' },
  ];
  const bottomFooterLinks = ['Privacy Policy', 'Cookie Policy', 'Terms'];

  return (
    <div className="bg-base-200 text-base-content border-t border-base-300">
      <div className="w-11/12 max-w-maxContent mx-auto py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/3">
            <Link to="/">
              <h1 className="text-3xl font-playfair-display font-bold text-white">
                GS <span className="text-primary">Academia</span>
              </h1>
            </Link>
            <p className="mt-4">
              Unlock your potential with our premium courses. Learn from the best, and become the best.
            </p>
            <div className="flex gap-4 text-xl mt-6">
              {socialLinks.map((item, index) => (
                <Link to={item.link} key={index} className="hover:text-primary transition-all duration-200">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.slice(1).map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
                <ul>
                  {section.links.map((link, j) => (
                    <li key={j} className="mb-2">
                      <Link to={link.link} className="hover:text-primary transition-all duration-200">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm mt-12 pt-8 border-t border-base-300">
          <div className="flex flex-wrap gap-x-6">
            {bottomFooterLinks.map((text, index) => (
              <Link to={text.toLowerCase().replace(' ', '-')} key={index}>
                <p className="cursor-pointer hover:text-primary transition-all duration-200">{text}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 lg:mt-0">
            &copy; {new Date().getFullYear()} GS Academia. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
