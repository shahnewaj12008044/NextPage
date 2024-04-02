import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* why position relative is used dont know */}
      <div className="relative flex items-center justify-between">
        {/* logo section */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            NextPage
          </span>
        </Link>
        {/* nav Items section */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
        </ul>
        {/* mobile navbar section */}
        <div className="lg:hidden">
          {/* dropdown open button */}
          <button
            aria-level="open menu"
            title="open menu"
            onClick={()=>setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="h-6 w-6 text-gray-600"></Bars3BottomRightIcon>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* logo and button section */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                        NextPage
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                 {/* nav bar section */}
                 <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link to='/' className="default">Home</Link>
                        </li>
                        <li>
                            <Link to='/books' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Books</Link>
                        </li>
                        <li>
                            <Link to='/about' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>About us</Link>
                        </li>
                    </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
