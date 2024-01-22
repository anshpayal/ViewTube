import useVideoData from "../utils/useVideoData";
const WatchPage = () => {
  const videoData = useVideoData();
  console.log(videoData);
  return (
    <div className="bg-slate-700">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+videoData?.id+"?si=2gf7LROKXb7Co0Oj"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
