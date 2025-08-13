import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navbarLinks from "../../data/navbarLinks.ts";
import ProfileDropDown from "../core/Auth/ProfileDropDown.tsx";
import { getAllCategories } from "../../services/operations/otherServices.ts";
import {
  Home,
  Book,
  Users,
  Mail,
  Menu,
  ShoppingCart,
  LogIn,
  UserPlus,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Logo from "../../assets/Logo/gs-logo.svg";

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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const matchRoute = (linkPath: string) =>
    matchPath({ path: linkPath }, location.pathname);

  const NavLink: React.FC<{
    to: string;
    children: React.ReactNode;
    icon?: JSX.Element;
  }> = ({ to, children, icon }) => {
    const isActive = matchRoute(to);
    return (
      <Link
        to={to}
        className={`relative group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
          isActive 
            ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-glow" 
            : "text-base-content hover:text-white hover:bg-white/10"
        }`}
      >
        {icon}
        {children}
        {!isActive && (
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        )}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-base-100/80 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-11/12 h-20 mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={Logo} 
              alt="GS Academia Logo" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
              GS Academia
            </h1>
            <span className="text-xs text-base-content/60 font-medium">Learn • Grow • Excel</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navbarLinks.map((link, index) =>
            link.title === "Catalog" ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`relative group flex items-center gap-2 text-sm font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname.includes("/categorycourses")
                        ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-glow"
                        : "text-base-content"
                    }`}
                  >
                    <Book className="w-4 h-4" />
                    {link.title}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  className="glass-card border-white/20 w-64 rounded-xl shadow-2xl p-2"
                >
                  <div className="p-2 border-b border-white/10 mb-2">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary-400" />
                      Course Categories
                    </h3>
                    <p className="text-xs text-base-content/60 mt-1">Explore our diverse learning paths</p>
                  </div>
                  {catalogs.map((catalog, i) => (
                    <DropdownMenuItem
                      key={i}
                      className="text-sm text-base-content hover:text-white hover:bg-white/10 rounded-lg px-3 py-3 transition-all duration-200 cursor-pointer"
                    >
                      <Link
                        to={`/categorycourses/${catalog.name
                          .split(" ")
                          .join("-")}`}
                        className="flex items-center gap-3 w-full"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></div>
                        <span className="font-medium">{catalog.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink 
                key={index} 
                to={link?.path || ""}
                icon={
                  link.title === "Home" ? <Home className="w-4 h-4" /> :
                  link.title === "About Us" ? <Users className="w-4 h-4" /> :
                  link.title === "Contact Us" ? <Mail className="w-4 h-4" /> :
                  undefined
                }
              >
                {link.title}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {user && user?.role === "Student" && (
            <Link to="/dashboard/cart" className="relative group">
              <div className="relative p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <ShoppingCart className="w-6 h-6 text-base-content group-hover:text-white transition-colors duration-300" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-glow animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
          )}
          
          {token === null ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-white hover:bg-white/10 flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="btn-primary text-sm font-semibold px-6 py-2 rounded-lg flex items-center gap-2 shadow-glow">
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <ProfileDropDown />
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-lg">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-card border-white/20 w-80">
            <SheetHeader className="border-b border-white/10 pb-4">
              <SheetTitle className="gradient-text text-xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {navbarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link?.path || ""}
                  className={`flex items-center gap-3 text-base py-3 px-4 rounded-lg transition-all duration-300 ${
                    matchRoute(link?.path || "")
                      ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-glow"
                      : "text-base-content hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.title === "Home" && <Home className="w-5 h-5" />}
                  {link.title === "About Us" && <Users className="w-5 h-5" />}
                  {link.title === "Contact Us" && <Mail className="w-5 h-5" />}
                  {link.title === "Catalog" && <Book className="w-5 h-5" />}
                  {link.title}
                </Link>
              ))}
              
              {token === null ? (
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/10">
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      className="w-full text-base hover:text-white hover:bg-white/10 flex items-center justify-center gap-2 py-3 rounded-lg"
                    >
                      <LogIn className="w-5 h-5" />
                      Log in
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="btn-primary w-full text-base font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-glow">
                      <UserPlus className="w-5 h-5" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-white/10">
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