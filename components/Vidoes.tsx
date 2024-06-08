'use client'

import { useAppDispatch } from "@/lib/hooks"
import { setVideoDetails, toggleVideoModal } from "@/lib/slices/imagesSlice"
import { VideoInterface } from "@/types/Index"
import Image from "next/image"
import { GoVideo } from "react-icons/go"
import Masonry from "react-masonry-css"

type PropTypes = {
    videos: VideoInterface[]
}
const Vidoes = ({videos}: PropTypes) => {
  const dispatch = useAppDispatch()
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
  return (
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid "
    columnClassName="my-masonry-grid_column"     
  >
    {videos.map(video => (
        <div key={video.id} className="relative cursor-pointer" onClick={() => {
          dispatch(toggleVideoModal())
          dispatch(setVideoDetails(video.id))
        }}>
            <span className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"><GoVideo size={15} className="text-white" /></span>
            <Image src={video.videos.medium.thumbnail} alt="thumbnail" width={video.videos.medium.width} height={video.videos.medium.height} />
        </div>
    ))}
  </Masonry>
  )
}

export default Vidoes