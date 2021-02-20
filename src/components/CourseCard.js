import React from "react";
export default function Card(props) {
  const { img, title, description, alt, disabled = false } = props;
  return (
    <div
      className={
        (disabled
          ? ""
          : "cursor-pointer hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out transform ") +
        "max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 h-96"
      }
      style={{ height: "26,5rem" }}
    >
      <img className="h-56 w-full object-cover mb-2" src={img} alt={alt}></img>
      <div className="px-4 py-2">
        <h1 className="text-blue-800 font-bold text-xl font-rale text-center">
          {title}
        </h1>
        {description.map((desc, index) => (
          <p className="text-gray-600 text-sm mt-1" key={index}>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}
