import React from "react";
import useListOfSearchedVideos from "../utils/useListOfSearchedVideos";
const SearchedResultPage = () => {
const listOfSearchedVideos = useListOfSearchedVideos();

  if (listOfSearchedVideos === null) return "Loading";

  console.log(listOfSearchedVideos);
  return (
    <div className="w-full p-8 flex flex-col">
      {listOfSearchedVideos.map((video) => {
        return (
          <div key={video?.id?.videoId} className="flex  w-9/12 p-3">
            <div className="w-80 h-48 overflow-hidden">
              <img
                alt="thumbnail"
                src={video?.snippet?.thumbnails?.high?.url}
                className="object-cover w-full h-full aspect-w-16 aspect-h-9 rounded-xl"
              />
            </div>
            <div className="mx-3">
              <h1 className="text-xl font-semibold">{video?.snippet?.title}</h1>
              <p className="text-md mt-3 text-gray-400">
                {video?.snippet?.channelTitle}
              </p>
              <p className="text-sm mt-1 text-gray-400">
                {video?.snippet?.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedResultPage;
