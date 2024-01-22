import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DATA } from "./Links";

const useVideoData = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [videoData, setVideoData] = useState();
  useEffect(() => {
    fetchVideoData();
  }, []);
  const fetchVideoData = async () => {
    const data = await fetch(VIDEO_DATA + videoID);
    const json = await data.json();
    setVideoData(json.items[0]);
  };
  return videoData;
};

export default useVideoData;
