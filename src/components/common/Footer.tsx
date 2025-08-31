import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin,
  FaGithub,
  FaDiscord
} from 'react-icons/fa';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Logo from '../../assets/Logo/gs-logo.svg';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/parth-lahoti/', label: 'LinkedIn' },
    { icon: <FaGithub />, link: 'https://github.com/', label: 'GitHub' },
    { icon: <FaTwitter />, link: 'https://twitter.com/', label: 'Twitter' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/', label: 'YouTube' },
    { icon: <FaDiscord />, link: 'https://discord.com/', label: 'Discord' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { title: 'About Us', link: '/about' },
    { title: 'Courses', link: '/courses' },
    { title: 'Contact', link: '/contact' },
    { title: 'Blog', link: '/blog' },
  ];

  const supportLinks = [
    { title: 'Help Center', link: '/help' },
    { title: 'Privacy Policy', link: '/privacy' },
    { title: 'Terms of Service', link: '/terms' },
    { title: 'Cookie Policy', link: '/cookies' },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      content: 'gsacademia5404@gmail.com',
      link: 'mailto:gsacademia5404@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      content: '+91 123 456 7890',
      link: 'tel:+911234567890'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      content: 'SGSITS, Indore, MP',
      link: '#'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-base-100 to-base-200 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <img 
                    src={Logo} 
                    alt="GS Academia Logo" 
                    className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">GS Academia</h3>
                  <p className="text-sm text-base-content/60 font-medium">Learn • Grow • Excel</p>
                </div>
              </Link>
              
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Empowering millions of learners worldwide with cutting-edge education and industry-relevant skills.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-base-content/60">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for learners everywhere</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link} 
                      className="text-base-content/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link} 
                      className="text-base-content/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a 
                      href={info.link}
                      className="flex items-start gap-3 text-base-content/70 hover:text-white transition-colors duration-300"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary-400">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">{info.title}</p>
                        <p className="text-sm">{info.content}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-base-content/60 text-sm">
                  © {new Date().getFullYear()} GS Academia. All rights reserved.
                </p>
                <p className="text-base-content/40 text-xs mt-1">
                  Crafted with passion for education and innovation.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-base-content/60 mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-secondary-500/20 border border-white/10 hover:border-primary-500/30 text-base-content/70 hover:text-white transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <div className="text-lg group-hover:animate-bounce">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;