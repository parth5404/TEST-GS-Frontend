import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import navbarLinks from '../../data/navbarLinks.ts';
import ProfileDropDown from '../core/Auth/ProfileDropDown.tsx';
import { getAllCategories } from '../../services/operations/otherServices.ts';
import { Home, Book, Users, Mail, Menu, ShoppingCart, LogIn, UserPlus } from 'lucide-react';
import Logo from '../../assets/Logo/gs-logo.svg';

const Navbar: React.FC = () => {
  const { token } = useSelector((state: any) => state.auth);
  const { user } = useSelector((state: any) => state.profile);
  const { cartItemsCount } = useSelector((state: any) => state.cart);
  const location = useLocation();
  const [catalogs, setCatalogs] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      const result = await getAllCategories();
      if (result) setCatalogs(result);
    };
    fetchCatalog();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const matchRoute = (linkPath: string) => matchPath({ path: linkPath }, location.pathname);

  const NavLink: React.FC<{ to: string; children: React.ReactNode; icon: JSX.Element }> = ({ to, children, icon }) => {
    const isActive = matchRoute(to);
    return (
      <Link
        to={to}
        className={`relative group flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-primary' : 'text-base-content hover:text-primary'
        }`}
      >
        {icon}
        {children}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 origin-center ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-base-200/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-11/12 h-16 mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={Logo} alt="GS Academia Logo" className="h-8 w-8" />
          <h1 className="text-lg font-bold text-white">
            GS <span className="text-secondary">Academia</span>
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center space-x-1">
          {navbarLinks.map((link, index) =>
            link.title === 'Catalog' ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative group flex items-center text-sm hover:text-primary hover:bg-base-200/50"
                  >
                    {/* {navIcons[link.title]} */}
                    {link.title}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                        location.pathname.includes('/categorycourses') ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-base-200 border-white/10">
                  {catalogs.map((catalog, i) => (
                    <DropdownMenuItem key={i} className="text-sm hover:text-primary">
                      <Link to={`/categorycourses/${catalog.name.split(' ').join('-')}`}>{catalog.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink key={index} to={link?.path || ''}>
                {link.title}
              </NavLink>
            )
          )}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          {user && user?.role === 'Student' && (
            <Link to="/dashboard/cart" className="relative group">
              <ShoppingCart className="text-2xl text-base-content group-hover:text-primary transition-colors duration-300" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-black rounded-full flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          )}
          {token === null ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" className="text-sm hover:text-primary hover:bg-base-200/50 flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" className="text-sm bg-primary text-black hover:bg-secondary flex items-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <ProfileDropDown />
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-base-200 border-white/10">
            <SheetHeader>
              <SheetTitle className="text-primary">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {navbarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link?.path || ''}
                  className={`flex items-center text-sm py-2 transition-colors duration-300 ${
                    matchRoute(link?.path || '') ? 'text-primary' : 'text-base-content hover:text-primary'
                  }`}
                >
                  {/* {navIcons[link.title]} */}
                  {link.title}
                </Link>
              ))}
              {token === null ? (
                <div className="flex flex-col gap-2 mt-4">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full text-sm hover:text-primary hover:bg-base-200/50 flex items-center justify-center">
                      <LogIn className="w-4 h-4 mr-2" />
                      Log in
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="default" className="w-full text-sm bg-primary text-black hover:bg-primary/80 flex items-center justify-center">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-4">
                  <ProfileDropDown />
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
