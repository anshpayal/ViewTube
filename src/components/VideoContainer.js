import React from 'react'
import VideoCard from './VideoCard'
import useListOfVideo from '../utils/useListOfVideo'
const VideoContainer = () => {
  const fetchVideoData = useListOfVideo();
  if(fetchVideoData===null) return "Loading"
  return ( 
    <div className='mx-4 p-4' >
        <VideoCard data={fetchVideoData}/>
    </div>
  )
}

export default VideoContainer