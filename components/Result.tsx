"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setImageDetails, toggleModel } from "@/lib/slices/imagesSlice"
import Image from "next/image"
import { useState } from "react"
import Masonry from "react-masonry-css"
import Spinner from "./Spinner"
import Images from "./Images"
import Vidoes from "./Vidoes"


const Result = () => {
 
  const {images, videos, searchType, loader} = useAppSelector(state =>state.imagesSlice)
   console.log(loader)
  return (
    
    <div className="max-w-[1400px] px-6 mx-auto  py-12 ">
      {loader ? <Spinner/> :
        searchType === 'images' ? images.length > 0 && <Images images={images} /> : videos.length > 0 && <Vidoes videos={videos} />
      }


    </div>
  )
}

export default Result