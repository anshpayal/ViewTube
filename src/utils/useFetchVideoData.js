import { useState, useEffect } from "react";
import { YOUTUBE_API } from "./Links";

const useFetchVideoData = () => {
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json.items);
    setVideoData(json.items);
  };
  return videoData;
};

export default useFetchVideoData;
