import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
const NavBar = () => {
  const [mobileMenue, setMobileMenue] = useState(false);
  const toggleNavbar = () => {
    setMobileMenue(!mobileMenue);
  };

  return (
    <div className="nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img src={logo} className="h-10 w-10 mr-2" alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="cursor-pointern" onClick={toggleNavbar}>
              {mobileMenue ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenue && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-linear-to-r from-orange-500 to-orange-900 rounded-md"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
