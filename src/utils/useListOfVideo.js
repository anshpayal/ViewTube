import { useState, useEffect } from "react";
import { YOUTUBE_API } from "./Links";

const useListOfVideo = () => {
  const [listOfVideo, setListOfVideo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json.items);
    setListOfVideo(json.items);
  };
  return listOfVideo;
};

export default useListOfVideo;
