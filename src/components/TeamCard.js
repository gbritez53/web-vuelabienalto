import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Card(props) {
  const {
    img,
    name,
    cargo,
    description,
    facebook,
    instagram,
    p3 = false,
  } = props;
  return (
    <div
      className={
        (p3 ? "py-4 px-3 " : "p-4 ") +
        "flex flex-col items-center justify-center bg-white shadow rounded-lg"
      }
    >
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={img} alt="Coaches" className="h-full w-full" />
      </div>
      <h2 className="mt-4 font-bold text-xl">{name}</h2>
      <h6 className="mt-2 text-sm font-medium">{cargo}</h6>

      <div className="text-xs text-gray-700 text-center mt-3">
        {description.map((desc, i) => {
          return (
            <ul key={i} className="">
              <li>{desc}</li>
            </ul>
          );
        })}
      </div>
      <ul className="flex flex-row mt-4 space-x-2">
        <li>
          <a
            href={facebook}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center h-6 w-6"
          >
            <FaFacebookF className="text-blue-700 text-2xl" />
          </a>
        </li>
        {instagram === "" ? (
          ""
        ) : (
          <li>
            <a
              href={instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center h-6 w-6 "
            >
              <FaInstagram className="text-pink-700 text-2xl font-semibold" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
