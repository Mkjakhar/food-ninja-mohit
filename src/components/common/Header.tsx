import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [resNav, setResNav] = useState(false);

  if (resNav) {
    document.body.classList.add("overflow_sm_hidden");
  } else {
    document.body.classList.remove("overflow_sm_hidden");
  }
  const location = useLocation();

  const isBlogActive = location.pathname === "/blog-details";
  const blogClassName = isBlogActive ? "!text-black !font-medium" : "";
  return (
    <>
      <div className="py-5 md:py-10 xl:py-16 container xl:max-w-[1100px]">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-2xl z-10 relative font-Merriweather leading-normal font-black text-blue cursor-pointer">
               Ninja Blogs
            </span>
          </Link>
          <button onClick={() => setResNav(!resNav)} className="z-10 sm:hidden">
            {resNav ? (
              <XMarkIcon className="h-8 w-8 text-blue" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-blue" />
            )}
          </button>
          <ul
            className={`flex items-center responsive_nav justify-center duration-300 flex-col sm:flex-row gap-5 bg-white ${
              resNav ? "!opacity-100 !pointer-events-auto !left-0" : ""
            }`}
          >
            <li onClick={() => setResNav(!resNav)}>
              <NavLink
                to="/blog-details"
                className={`text-gray cursor-pointer text-base sm:text-lg leading-normal hover:text-black duration-200 font-Roboto ${blogClassName}`}
              >
                Blog
              </NavLink>
            </li>
            <li onClick={() => setResNav(!resNav)}>
              <NavLink
                to=""
                className="text-gray cursor-pointer text-base sm:text-lg leading-normal hover:text-black duration-200 font-Roboto"
              >
                About
              </NavLink>
            </li>
            <li onClick={() => setResNav(!resNav)}>
              <a
                href="#contact"
                className="text-gray text-base sm:text-lg leading-normal hover:text-black duration-200 font-Roboto"
              >
                Contact
              </a>
            </li>
            <li onClick={() => setResNav(!resNav)}>
              <button className="py-2 px-4 bg-light_blue text-white font-Roboto leading-normal rounded-full text-base sm:text-lg hover:bg-blue duration-200">
                Log in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
