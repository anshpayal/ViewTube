import React from 'react'
import VideoCard from './VideoCard'
import useListOfVideo from '../utils/useListOfVideo'
const VideoContainer = () => {
  const fetchVideoData = useListOfVideo();
  if(fetchVideoData===null) return "Loading"
  return ( 
    <div className=' relative z-0 mx-4 p-4 flex flex-col gap-y-12 flex-wrap sm:flex-row sm:justify-center sm:gap-x-12' >
        <VideoCard data={fetchVideoData}/>
    </div>
  )
}

export default VideoContainer