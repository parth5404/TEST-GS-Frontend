import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo/GSLOGOEMAIL.gif'
import navbarLinks from '../../data/navbarLinks'
import { Link, matchPath, useNavigate } from 'react-router-dom'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useLocation } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineHome, AiOutlineContacts } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { toast } from 'react-hot-toast'
import { GiHamburgerMenu } from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'
import { VscDashboard, VscSignOut, VscSignIn } from "react-icons/vsc"
import { logout } from '../../services/operations/authServices'
import { BiCategory, BiDetail } from 'react-icons/bi'
import { getAllCategories } from '../../services/operations/otherServices'
import { getCurrentUser } from '../../services/operations/profileServices'
import { setLoading } from '../../redux/slices/authSlice'




const Navbar = () => {

  const { token, loading } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { cartItemsCount } = useSelector((state) => state.cart)
  const [loading2, setLoading2] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [catalogs, setCatalogs] = useState([]);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      const toastId = toast.loading('Loading Backend ...');
      const result = await getAllCategories();
      if (result) {
        setCatalogs(result)
      } else {
        toast.error('Failed to load backend');
      }
      toast.dismiss(toastId);
      setLoading2(false);
    }
    fetchCatalog();
  }, []);


  useEffect(() => {
    const getCurrentUserDetails = async () => {
      dispatch(setLoading(true));
      if (token) {
        await getCurrentUser(token, dispatch, navigate);
      }
      dispatch(setLoading(false));
    }
    getCurrentUserDetails();
  }, [token, dispatch, navigate]);

  const matchRoute = (linkPath) => {
    if (linkPath === '/') return matchPath({ path: linkPath }, location.pathname);
    return location.pathname.startsWith(linkPath);
  }

  const handleLogOutClick = async (e) => {
    setIsMenuModalOpen(false);
    await logout(token, dispatch, navigate);
  }




  return (
    <div className='sticky top-0 z-50 bg-white shadow-md transition-all duration-200'>
      <div className='w-11/12 h-16 mx-auto max-w-maxContent flex items-center justify-between'>
        {/* Logo */}
        <Link to={'/'} className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
          <img src={logo} width={160} height={32} loading='lazy' alt="logo" className="object-contain" />
        </Link>

        {/* Nav Links - Desktop */}
        <nav className='hidden md:block'>
          <ul className='flex gap-x-8'>
            {navbarLinks.map((link, ind) => (
              <li key={ind} className="relative">
                {link.title === 'Catalog' ? (
                  <div className='group'>
                    <button className='flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'>
                      {link.title}
                      <SlArrowDown className='group-hover:rotate-180 transition-transform duration-200' />
                    </button>

                    <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100'>
                      {catalogs.length ? (
                        catalogs.map((catalog, index) => (
                          <Link
                            key={index}
                            to={`/categorycourses/${catalog.name.split(' ').join('-')}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {catalog.name}
                          </Link>
                        ))
                      ) : (
                        <p className="px-4 py-2 text-gray-500">No categories available</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link?.path}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      matchRoute(link?.path)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons - Desktop */}
        <div className='hidden md:flex items-center gap-4'>
          {(loading || loading2) ? (
            <div className='animate-pulse px-4 py-2 rounded-md bg-gray-100'>
              <div className='h-5 w-20 bg-gray-200 rounded'></div>
            </div>
          ) : token === null ? (
            <>
              <Link to="/login">
                <button className='px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'>
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200'>
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {user?.role === 'Student' && (
                <Link to="/dashboard/cart" className="relative">
                  <AiOutlineShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-200" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              )}
              <ProfileDropDown />
            </div>
          )}
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={() => setIsMenuModalOpen(prev => !prev)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          <GiHamburgerMenu className="text-2xl text-gray-700" />
        </button>

        {/* Mobile Menu */}
        <HamburgerMenu
          isMenuModalOpen={isMenuModalOpen}
          setIsMenuModalOpen={setIsMenuModalOpen}
        >
          <div className='flex flex-col divide-y divide-gray-100'>
            {/* ... existing mobile menu content with updated styling */}
            {/* Add hover:bg-gray-50 transition-colors duration-200 to menu items */}
            {/* Update colors to match the new theme */}
          </div>
        </HamburgerMenu>
      </div>
    </div>
  )
}

export default Navbar
