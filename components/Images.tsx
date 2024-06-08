'use client'

import { useAppDispatch } from "@/lib/hooks"
import { setImageDetails, toggleModel } from "@/lib/slices/imagesSlice"
import { ImageInterface } from "@/types/Index"
import Image from "next/image"
import Masonry from "react-masonry-css"
type PropTypes = {
    images: ImageInterface[]
}
const Images = ({images}: PropTypes) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
      const dispatch = useAppDispatch()
  return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid "
        columnClassName="my-masonry-grid_column"     
      >   
      {images.map((data)=> {
          return (
              <div key={data.id} className='space-y-3'>
                   <Image className='cursor-pointer' onClick={()=> {
                    dispatch(toggleModel())
                    dispatch(setImageDetails(data.id))
                   }}  src={data.webformatURL} width={data.webformatWidth} height={data.webformatHeight} alt=""/>
              </div>
             
          )
      })}
       </Masonry>
  )
}

export default Images