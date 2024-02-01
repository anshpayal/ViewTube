import { useDispatch } from "react-redux";
import useVideoData from "../utils/useVideoData";
import { closeMenu } from "../redux store/appSlice";
import { GoBell } from "react-icons/go";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const dispath = useDispatch();
  dispath(closeMenu());

  const videoData = useVideoData();

  if (videoData === null) return "Loading";

  const formatLikeCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    } else {
      return count?.toString();
    }
  };

  return (
    <div className="w-full">
      <div className="sm:flex">
        <div className="w-full p-6 my-4 sm:w-7/12 sm:mx-24 sm:overflow-hidden">
          <iframe
            className="w-full h-[30vh] sm:h-[65vh] rounded-3xl"
            src={
              "https://www.youtube.com/embed/" +
              videoData?.id +
              "?si=2gf7LROKXb7Co0Oj"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className=" my-3 text-lg font-semibold sm:text-2xl">
            {videoData?.snippet?.title}
          </h1>

          <div className="sm:flex items-center relative">
            <div className="sm:text-xl font-semibold">
              {videoData?.snippet?.channelTitle}
            </div>

            <div className=" absolute my-3 sm:right-40 flex justify-center items-center w-32 px-2 py-1 bg-gray-300 rounded-3xl">
              <span className="sm:text-xl sm:py-1">
                <GoBell />
              </span>
              <p className="text-md sm:text-md mx-2 ">Subscribe</p>
            </div>

            <div className="absolute right-1 my-3 sm:right-2 text-md flex bg-gray-300 px-2 py-1 rounded-3xl justify-center items-center">
              <span className="sm:text-xl ml-2 mr-1">
                <AiOutlineLike />
              </span>
              {formatLikeCount(videoData?.statistics?.likeCount)}
              <span className="sm:text-xl ml-4 mr-2">
                <AiOutlineDislike />
              </span>
            </div>
          </div>
        </div>

        <div className=" mx-4 my-14 sm:w-4/12 sm:my-10">
          <LiveChatContainer />
        </div>
      </div>
      <div className="sm:w-7/12 px-6 sm:mx-24 ">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
