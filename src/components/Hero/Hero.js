import React from "react";
import { portada } from "../../config/constantes";

const Hero = () => {
  return (
    <div className="w-screen h-auto relative">
      <div className="w-full h-72 h-128 absolute bg-black opacity-25"></div>
      <div className="absolute w-full h-full right-0 text-center flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold z-40 text-white mb-5 font-rale">
          Bienvenidos a Vuelabienalto
        </h1>
      </div>
      <div className="skew-bottom-12"></div>

      <video className="w-full object-cover h-72 h-128" autoPlay muted loop>
        {" "}
        {/** autoPlay muted loop/ */}
        <source src={portada} />
      </video>
    </div>
  );
};

export default Hero;
