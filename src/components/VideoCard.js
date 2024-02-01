import React from "react";
import DefaultThumbnail from "../default-video-thumbnail.png"
import { Link } from "react-router-dom";
const VideoCard = (props) => {
  const { data } = props;
  // console.log(data);
  const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    } else {
      return count.toString();
    }
  };
  return (
    <>
      {data.map((videoData) => {
        return (
          <Link key={videoData.id} to= {"/watch?v="+videoData.id}>
            <div
              className="w-80 rounded-lg p-4 border border-gray-300 hover:shadow-gray-500 hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              <img
                className="rounded-xl"
                alt="thumbnail"
                src={videoData?.snippet?.thumbnails?.maxres?.url ||DefaultThumbnail}
              ></img>
              <div className="w-full">
                <p className="text-lg mt-2 font-semibold">
                  {videoData.snippet.localized.title}
                </p>
                <p className="mt-1 text-gray-600">
                  {videoData?.snippet?.channelTitle}
                </p>
                <span className="text-gray-600">
                  {formatViewCount(videoData?.statistics.viewCount)} views
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default VideoCard;
