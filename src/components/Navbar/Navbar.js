import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoNav } from "../../config/constantes";
import { MenuItemsServices } from "./MenuItemsServices.js";
import { MenuItemsCourses } from "./MenuItemsCourses";
import Dropdown from "../Navbar/Dropdown";

import { FaTimes, FaBars, FaFileInvoice } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillAwardFill, BsGearFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  const onMouseEnter = () => {
    if (window.innerWidth < 780) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 780) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 780) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 780) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > lastScroll) {
        setHidden(true);
        lastScroll = top;
      } else {
        setHidden(false);
        lastScroll = top;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <nav className={hidden ? "navbar-hidden" : "navbar dark-ocean"}>
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logoNav} alt="logo" className="w-24 px-4 py-1" />
          </Link>
          <div>
            <div className="menu-icon text-white" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="hover:-translate-y-1 hover:scale-110">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <AiFillHome className="mr-2 " /> Inicio
                </Link>
              </li>
              <li className="hover:-translate-y-1 hover:scale-110">
                <Link
                  to="/nosotros"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <RiTeamFill className="mr-2 text-lg" /> Nosotros
                </Link>
              </li>
              <li className="hover:-translate-y-1 hover:scale-110">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <FaFileInvoice className="mr-2 text-lg" /> Blog
                </Link>
              </li>
              <li
                className="hover:-translate-y-1 hover:scale-110"
                onMouseEnter={onMouseEnter1}
                onMouseLeave={onMouseLeave1}
              >
                <Link
                  to="/cursos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <BsFillAwardFill className="mr-2 text-lg" /> Cursos
                </Link>
                {dropdown1 && (
                  <Dropdown
                    MenuItems={MenuItemsCourses}
                    Clase="dropdown-menu-large"
                  />
                )}
              </li>
              <li
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="hover:-translate-y-1 hover:scale-110"
              >
                <Link
                  to="/servicios"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <BsGearFill className="mr-2 text-lg" /> Servicios
                </Link>
                {dropdown && (
                  <Dropdown
                    MenuItems={MenuItemsServices}
                    Clase="dropdown-menu"
                  />
                )}
              </li>
              <li className="hover:-translate-y-1 hover:scale-110">
                <Link
                  to="/contacto"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <IoMdContact className="mr-2 text-lg" /> Contacto
                </Link>
              </li>
            </ul>
            {button}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
