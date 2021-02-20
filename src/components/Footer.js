import React from "react";

import { FaHeart, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="deep-space md:px-4 text-gray-300 ">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-4">
        <div className="flex justify-center flex-col md:flex-row ">
          <p className="text-center">Vuelabienalto 2020 &copy; </p>
          <p> Todos los derechos reservados</p>
        </div>
        <div className="flex justify-center pt-4">
          <a
            href="https://www.facebook.com/vuelabienaltooficial"
            rel="noreferrer"
            target="_blank"
            className="ml-2 hover:-translate-y-1 hover:scale-110 anim"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/vuelabienalto_oficial/"
            rel="noreferrer"
            target="_blank"
            className="ml-2 hover:-translate-y-1 hover:scale-110 anim"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/c/diegojaviermartinez01/featured"
            rel="noreferrer"
            target="_blank"
            className="ml-3 hover:-translate-y-1 hover:scale-110 anim"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </div>

      <div
        className="flex justify-center py-2"
        style={{ borderTop: "1px solid #4a5568" }}
      >
        <p className=" px-2 flex justify-center">
          Desarrollado con
          <FaHeart className="text-red-700 text-2xl mx-1 pt-1" />
          por
          <a
            href="https://www.instagram.com/gabriel_briitez/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-500 font-semibold"
          >
            Gabriel Britez
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
