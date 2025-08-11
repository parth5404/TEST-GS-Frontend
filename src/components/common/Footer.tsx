import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import footerLinks from '../../data/footerLinks';
import FooterCard from './FooterCard.tsx';

const Footer: React.FC = () => {
  const socialLinks: { icon: JSX.Element; link: string }[] = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/parth-lahoti/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com' },
  ];
  const bottomFooterLinks: string[] = ['Privacy Policy', 'Cookie Policy', 'Terms'];

  return (
    <div className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link to="/">
              <h1 className="text-2xl font-bold">
                GS <span className="text-primary">Academia</span>
              </h1>
            </Link>
            <p className="mt-2 text-sm text-base-content/80">
              &copy; {new Date().getFullYear()} GS Academia. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {bottomFooterLinks.map((text, index) => (
                <Link to={text.toLowerCase().replace(' ', '-')} key={index} className="text-sm hover:text-primary transition-all duration-200">
                  {text}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 text-xl">
              {socialLinks.map((item, index) => (
                <Link to={item.link} key={index} className="hover:text-primary transition-all duration-200">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
