import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';

import logo from '../../assets/Logo/GSLOGOEMAIL-unscreen.gif';
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
    <div className="fixed top-0 left-0 w-full z-50 bg-base-200 bg-opacity-50 backdrop-blur-md border-b border-b-base-300">
      <div className="w-11/12 h-16 mx-auto max-w-maxContent flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GS Academia Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-6 text-base-content">
            {navbarLinks.map((link, ind) => (
              <li key={ind}>
                {link.title === 'Catalog' ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p className="font-semibold transition-colors duration-200 group-hover:text-primary">{link.title}</p>
                    <SlArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                    <div className="invisible absolute left-1/2 top-full z-[1000] flex w-[200px] translate-x-[-50%] translate-y-3 flex-col rounded-lg bg-base-300 p-4 text-base-content opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-1/2 top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-base-300"></div>
                      {catalogs.length ? (
                        catalogs.map((catalog, index) => (
                          <Link to={`/categorycourses/${catalog.name.split(' ').join('-')}`} key={index}>
                            <p className="rounded-lg py-3 pl-4 hover:bg-base-200">{catalog.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
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

        <div className="hidden items-center gap-x-4 md:flex">
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
              <button className="border border-primary text-primary px-4 py-2 rounded-md font-bold transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>

        <button className="mr-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-base-200 bg-opacity-90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-y-4 py-4">
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
