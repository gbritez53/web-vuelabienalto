import React from "react";
import ReactPlayer from "react-player";

import { videoDirector } from "../config/constantes";

const VideoHome = () => {
  return (
    <div className="md:w-2/3 mx-auto mb-8">
      <ReactPlayer
        url={videoDirector}
        controls={true}
        className=""
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoHome;
