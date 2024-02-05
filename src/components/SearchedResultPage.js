import React from "react";
import useListOfSearchedVideos from "../utils/useListOfSearchedVideos";
import { Link } from "react-router-dom";
const SearchedResultPage = () => {
  const listOfSearchedVideos = useListOfSearchedVideos();
  if (listOfSearchedVideos === null) return "Loading";
  return (
    <div className="w-full p-8 flex flex-col gap-6">
      {listOfSearchedVideos.map((video) => {
        return (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <div className="sm:flex sm:mx-auto sm:w-9/12 p-3 border border-gray-300 hover:shadow-gray-500 hover:shadow-lg">
              <div className="w-full sm:w-80 h-48 overflow-hidden">
                <img
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.high?.url}
                  className="object-cover w-full h-full aspect-w-16 aspect-h-9 rounded-xl"
                />
              </div>
              <div className="mx-3">
                <h1 className=" text-lg mt-3 sm:text-xl font-semibold">
                  {video?.snippet?.title}
                </h1>
                <p className="text-md mt-3 text-gray-400">
                  {video?.snippet?.channelTitle}
                </p>
                <p className="text-sm mt-1 text-gray-400 truncate">
                  {video?.snippet?.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchedResultPage;
