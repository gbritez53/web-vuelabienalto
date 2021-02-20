import React from "react";
import ReactPlayer from "react-player";

const PostVideoBlog = ({
  url,
  topic,
  title,
  name,
  cargo,
  description,
  hashtags,
}) => {
  return (
    <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow relative md:pb-8">
        <ReactPlayer url={url} controls={true} width="100%" height="100%" />
        <div className="px-4 py-2 h-auto md:h-40 lg:h-48">
          <h3 className="font-bold text-green-600 text-sm mb-1 ">{topic}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 hover:text-blue-600 font-semibold mb-2  md:text-base lg:text-lg"
          >
            {title}
          </a>
          <p className="text-sm md:text-xs font-bold mb-2 ">
            By {name}. {cargo}
          </p>
          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            {description.map((desc) => (
              <p key={desc.toString()}>{desc}</p>
            ))}
          </div>
          <div className="mt-2 bottom-0 mb-4 md:hidden lg:block">
            {hashtags.map((hashtag) => (
              <div
                key={hashtag.toString()}
                className="inline-block bg-gray-300 ml-2 mb-1 py-1 px-2 rounded-full text-xs  text-gray-700"
              >
                {hashtag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostVideoBlog;
