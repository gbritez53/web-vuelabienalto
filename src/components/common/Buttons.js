import React from "react";
import { ImWhatsapp } from "react-icons/im";

export const WhatsappButton = ({ title = "titulo" }) => {
  return (
    <div className="h-24 rounded-r-lg flex flex-col items-center">
      <h2 className="text-gray-700 text-xl font-semibold pb-2">{title}</h2>
      <a
        href="https://bit.ly/33urXGV"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center bg-green-600 w-48 rounded-full shadow-lg text-white transform hover:translate-x-1 hover: hover:scale-110 anim"
      >
        <div className="flex items-center mx-8 py-2">
          <ImWhatsapp />
          <p className="ml-2">Whatsapp</p>
        </div>
      </a>
    </div>
  );
};

export const PaymentsMethodButton = ({
  title = "titulo",
  clases = "",
  enlace,
}) => {
  return (
    <div
      className={`h-32 sm:h-24 rounded-r-lg flex flex-col items-center ${clases}`}
    >
      <h2 className="text-gray-700 text-xl font-semibold pb-2 text-center">
        {title}
      </h2>
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-baseline bg-blue-500 w-56 px-8 py-2 rounded-full shadow-lg text-white transform hover:translate-x-1 hover: hover:scale-110 anim"
      >
        <p className="ml-2">Ver medios de pago</p>
      </a>
    </div>
  );
};
