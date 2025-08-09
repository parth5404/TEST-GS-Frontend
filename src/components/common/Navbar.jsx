import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';
import navbarLinks from '../../data/navbarLinks';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { getAllCategories } from '../../services/operations/otherServices';
import CTAButton from '../core/HomePage/CTAButton';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { cartItemsCount } = useSelector((state) => state.cart);
  const location = useLocation();
  const [catalogs, setCatalogs] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      const result = await getAllCategories();
      if (result) setCatalogs(result);
    };
    fetchCatalog();
  }, []);

  const matchRoute = (linkPath) => matchPath({ path: linkPath }, location.pathname);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-200 bg-opacity-50 backdrop-blur-lg border-b border-b-base-300">
      <div className="w-11/12 h-20 mx-auto max-w-maxContent flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-playfair-display font-bold text-white">
            GS <span className="text-primary">Academia</span>
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8 text-base-content">
            {navbarLinks.map((link, ind) => (
              <li key={ind}>
                {link.title === 'Catalog' ? (
                  <div className="group relative flex cursor-pointer items-center gap-2">
                    <p className="font-semibold transition-colors duration-200 group-hover:text-primary">{link.title}</p>
                    <SlArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`font-semibold transition-colors duration-200 ${matchRoute(link?.path) ? 'text-primary' : 'hover:text-primary'}`}>{link.title}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-x-6 md:flex">
          {user && user?.role === 'Student' && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-base-content" />
              {cartItemsCount > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-primary text-xs font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border border-primary text-primary px-5 py-2 rounded-full font-bold transition-all duration-200 hover:bg-primary hover:text-white">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="bg-primary text-white px-5 py-2 rounded-full font-bold transition-all duration-200 hover:bg-secondary">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AiOutlineMenu fontSize={24} fill="#E0E0E0" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-base-200 bg-opacity-80 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-y-6 py-6">
            {navbarLinks.map((link, ind) => (
              <li key={ind}>
                <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                  <p className={`font-semibold text-lg transition-colors duration-200 ${matchRoute(link.path) ? 'text-primary' : 'text-base-content hover:text-primary'}`}>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
