import React from "react";

export default function HeaderPages({ title, subtitle = "", image }) {
  return (
    <div>
      <div
        className="w-full h-96 relative overflow-hidden"
        style={{ top: "80px" }}
      >
        <div className="absolute w-full h-96 bg-blue-800 opacity-50 z-10"></div>
        <div
          className="bg-center bg-cover w-full h-96 flex justify-center flex-col absolute text-white"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <h2 className="text-4xl md:text-5xl capitalize font-bold z-20 text-center">
            {title}
          </h2>
          <h3 className="text-center text-2xl italic tracking-tight mb-4 z-20">
            {subtitle}
          </h3>
        </div>
        <div className="skew-bottom-12"></div>
      </div>
    </div>
  );
}
