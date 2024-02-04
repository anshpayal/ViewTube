import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH } from "./Links";

const useListOfSearchedVideos = () => {
    const [searchParams] = useSearchParams();
    const seachQuery = searchParams.get("search_query");
    const [searchedVideos, setSearchedVideos] = useState(null);
    useEffect(() => {
      fetchVideoData();
    }, []);
    const fetchVideoData = async () => {
      const data = await fetch(YOUTUBE_SEARCH + seachQuery);
      const json = await data.json();
      setSearchedVideos(json.items);
    };
    return searchedVideos;
  };
  
  export default useListOfSearchedVideos;