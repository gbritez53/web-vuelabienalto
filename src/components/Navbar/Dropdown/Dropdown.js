import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Dropdown.css";

const Dropdown = ({ MenuItems, Clase }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        className={click ? `${Clase} clicked"` : `${Clase}`}
        onClick={handleClick}
      >
        {MenuItems.map((item, i) => (
          <li key={i}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
