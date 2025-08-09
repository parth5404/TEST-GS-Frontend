import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/Logo/GSLOGOEMAIL-unscreen.gif';
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

  const bottomFooterLinks = ["Privacy Policy", "Cookie Policy", "Terms"];

  return (
    <div className="bg-base-200 text-base-content">
      <div className="w-11/12 max-w-maxContent mx-auto pt-14">
        {/* Upper Section */}
        <div className="flex flex-col lg:flex-row border-b border-base-300 pb-10">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-wrap justify-between lg:border-r lg:border-base-300 px-3 lg:pr-6 gap-6">
            <div className="w-full lg:w-[48%] flex flex-col gap-6">
              <Link to="/">
                <h1 className='text-2xl font-bold'>GS Academia</h1>
              </Link>
              <FooterCard data={footerLinks[0]} />
              <div className="flex gap-4 text-xl">
                {socialLinks.map((item, index) => (
                  <Link to={item.link} key={index} className="hover:text-primary transition-all duration-200">
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[48%] flex justify-between">
              <div className="w-[48%] flex flex-col gap-6">
                <FooterCard data={footerLinks[1]} />
                <FooterCard data={footerLinks[2]} />
              </div>
              <div className="w-[48%] flex flex-col gap-6">
                <FooterCard data={footerLinks[3]} />
                <FooterCard data={footerLinks[4]} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-wrap justify-between px-3 lg:pl-6 gap-6 mt-10 lg:mt-0">
            {[5, 6, 7].map(i => (
              <div key={i} className="w-full sm:w-[48%] lg:w-[30%]">
                <FooterCard data={footerLinks[i]} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm py-8">
          <div className="flex flex-wrap gap-x-4">
            {bottomFooterLinks.map((text, index) => (
              <Link to={text.toLowerCase().replace(" ", "-")} key={index}>
                <div className="cursor-pointer hover:text-primary transition-all duration-200">
                  {text}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 lg:mt-0">
            Made with ❤️ by Parth Lahoti
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
