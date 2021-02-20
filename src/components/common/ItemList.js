import React from "react";

const ItemList = ({ num, content, clase = "" }) => {
  return (
    <ul className="flex flex-col">
      <li className="flex flex-row mb-2">
        <div className="select-none  dark-ocean rounded-full flex flex-1 items-center p-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col rounded-full w-8 h-8 bg-primary justify-center items-center mr-2">
            <span className="text-darkblue font-bold">{num}</span>
          </div>
          <div className="flex-1 pl-">
            <div className={`font-medium ${clase}`}>{content}</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ItemList;
