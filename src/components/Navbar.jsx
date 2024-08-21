import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const isMediumScreen = useMediaQuery("(min-width: 850px)");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  useEffect(() => {
    setIsNavbarOpen(false);
  }, [isMediumScreen]);

  const Sidebar = () => {
    return (
      <aside className="absolute top-0 right-0 h-screen w-1/2 bg-blue-200 pl-5  ">
        <ul className="flex flex-col gap-5 relative mt-5 ">
          <button
            data-label="close button"
            onClick={() => setIsNavbarOpen(false)}
            className="close  absolute top-0 right-3 text-xl  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
          <a
            href="#aboutus"
            className={
              location.hash === "#aboutus" ? "font-bold text-blue-900" : ""
            }
          >
            <li>About us</li>
          </a>
          <a
            href="#ourprograms"
            className={
              location.hash === "#ourprograms" ? "font-bold text-blue-900" : ""
            }
          >
            <li>Our Programs</li>
          </a>
          <a
            href="#ourimpact"
            className={
              location.hash === "#ourimpact" ? "font-bold text-blue-900" : ""
            }
          >
            <li>Our Impact</li>
          </a>
          <a
            href="#getinvolved"
            className={
              location.hash === "#getinvolved" ? "font-bold text-blue-900" : ""
            }
          >
            <li>Get Involved</li>
          </a>
          <a
            href="#contactus"
            className={
              location.hash === "#contactus" ? "font-bold text-blue-900" : ""
            }
          >
            <li>Contact Us</li>
          </a>
        </ul>
      </aside>
    );
  };

  return (
    <nav className="navbar flex justify-between items-center gap-5 px-5 py-3 bg-blue-100 text-black sticky top-0 left-0 w-full ">
      <a href="/" className="logo flex flex-col items-center gap-1">
        <img
          src="/rajee-logo.png"
          alt="Rajee Charity"
          width={56}
          height={56}
          className="object-contain object-center "
        />
        <span className="text-sm text-blue-900 font-bold flex flex-col">
          <span
            className="text-sky-500 font-bold
"
          >
            Rajee Subramani
          </span>
          <span>Public Charitable Trust</span>
        </span>
      </a>
      <ul className="navlist flex items-center gap-3 pl-5  text-lg font-normal text-nowrap">
        {isMediumScreen ? (
          <>
            <a
              href="#aboutus"
              className={
                location.hash === "#aboutus" ? "font-bold text-blue-900" : ""
              }
            >
              <li>About us</li>
            </a>
            <a
              href="#ourprograms"
              className={
                location.hash === "#ourprograms"
                  ? "font-bold text-blue-900"
                  : ""
              }
            >
              <li>Our Programs</li>
            </a>
            <a
              href="#ourimpact"
              className={
                location.hash === "#ourimpact" ? "font-bold text-blue-900" : ""
              }
            >
              <li>Our Impact</li>
            </a>
            <a
              href="#getinvolved"
              className={
                location.hash === "#getinvolved"
                  ? "font-bold text-blue-900"
                  : ""
              }
            >
              <li>Get Involved</li>
            </a>
            <a
              href="#contactus"
              className={
                location.hash === "#contactus" ? "font-bold text-blue-900" : ""
              }
            >
              <li>Contact Us</li>
            </a>
          </>
        ) : (
          <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className="toggle-nav flex items-center gap-3 px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-all ease-in"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
        <a
          href="#donate"
          className=" px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-all ease-in"
        >
          <li>Donate</li>
        </a>
      </ul>
      {isNavbarOpen && <Sidebar />}
    </nav>
  );
}

export default Navbar;
