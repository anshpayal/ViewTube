import React from 'react'
import VideoCard from './VideoCard'
import useFetchVideoData from '../utils/useFetchVideoData'
const VideoContainer = () => {
  const fetchVideoData = useFetchVideoData();
  //console.log(fetchVideoData,);
  if(fetchVideoData===null) return "Loading"
  return ( 
    <div className='mx-4 p-4' >
        <VideoCard data={fetchVideoData}/>
    </div>
  )
}

export default VideoContainer