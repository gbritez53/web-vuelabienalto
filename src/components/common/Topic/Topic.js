import React from "react";

import "./Topic.css";

function Topic({ index, topic, toggleTopic }) {
  const { title, content, open } = topic;
  return (
    <div
      className={
        "mb-2 p-2 cursor-pointer bg-gray-300 rounded-lg shadow-lg " +
        (open ? "open" : "")
      }
      key={index}
      onClick={() => toggleTopic(index)}
    >
      <div className="pl-8 relative text-lg font-medium pr-2 topic">
        <h2>{title}</h2>
      </div>
      {content.map((cont) => (
        <div className="pl-4 topic-hidden" key={cont.toString()}>
          <ul>
            <li className="pb-1  text-gray-900">
              <div className="bg-darkblue rounded-full w-2 h-2 inline-block mr-1"></div>
              {cont}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Topic;
