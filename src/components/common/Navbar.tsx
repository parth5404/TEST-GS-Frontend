import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import navbarLinks from '../../data/navbarLinks.ts';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProfileDropDown from '../core/Auth/ProfileDropDown.tsx';
import { getAllCategories } from '../../services/operations/otherServices.ts';

const Navbar: React.FC = () => {
  const { token } = useSelector((state: any) => state.auth);
  const { user } = useSelector((state: any) => state.profile);
  const { cartItemsCount } = useSelector((state: any) => state.cart);
  const location = useLocation();
  const [catalogs, setCatalogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      const result = await getAllCategories();
      if (result) setCatalogs(result);
    };
    fetchCatalog();
  }, []);

  const matchRoute = (linkPath: string) => matchPath({ path: linkPath }, location.pathname);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-300/80 backdrop-blur-lg border-b border-primary/20">
      <div className="w-11/12 h-20 mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-8bit text-primary" style={{ textShadow: '0 0 10px #00f5ff' }}>
            GS Academia
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-x-6 text-base-content font-8bit">
          <NavigationMenu>
            <NavigationMenuList>
              {navbarLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.title === 'Catalog' ? (
                    <>
                      <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {catalogs.map((catalog, i) => (
                          <Link key={i} to={`/categorycourses/${catalog.name.split(' ').join('-')}`}>
                            <NavigationMenuLink>{catalog.name}</NavigationMenuLink>
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={link?.path || ''}>
                      <p className={`hover:text-primary transition-colors duration-200 ${matchRoute(link?.path || '') ? 'text-primary' : ''}`}>
                        {link.title}
                      </p>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="hidden md:flex items-center gap-x-4">
          {user && user?.role === 'Student' && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl" />
              {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
            </Link>
          )}
          {token === null && (
            <>
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
