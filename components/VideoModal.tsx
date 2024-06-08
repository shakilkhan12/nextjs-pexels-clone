"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleModel, toggleVideoModal } from '@/lib/slices/imagesSlice'
import ReactPlayer from 'react-player'

import React from 'react'
import { IoMdArrowRoundDown, IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import { LiaCommentSolid } from 'react-icons/lia'
import { AiOutlineLike } from 'react-icons/ai'
import { MdFormatSize } from 'react-icons/md'
import { RiFileVideoLine } from 'react-icons/ri'

const VideoModal = () => {
  const dispatch = useAppDispatch()
  const {videoModal, videoDetails} = useAppSelector(state =>state.imagesSlice)

  return videoModal ? (
    <div className='fixed p-6 inset-0 w-full h-full bg-black/35 backdrop-blur flex justify-center items-center z-[99999999]'>
      <IoMdClose onClick={()=>dispatch(toggleVideoModal())} className='absolute top-4 text-[24px] right-4 cursor-pointer text-white' />
      <div className='bg-white w-[1200px] p-6 rounded-lg max-h-[85vh] overflow-y-auto'>
      {videoDetails && <div className='w-full h-auto'>
     <div className="flex flex-wrap items-center justify-between gap-5 mb-8">   <div className='flex item space-x-5 '>
         {videoDetails.userImageURL ? <div className='w-[45px] h-[45px] relative'><Image fill src={videoDetails.userImageURL} alt="user image" className='rounded-full object-cover ' /></div>  : <span className='flex items-center justify-center bg-green-600 text-white rounded-full font-medium uppercase text-lg w-[45px] h-[45px]'>{videoDetails.user[0]}</span>}
         <div className='!flex-1'>
          <h1 className='text-lg capitalize'>{videoDetails?.user}</h1>
          <div className='flex space-x-2 items-center'>
            <h1 className='text-lg text-gray-500'>Follow</h1>
            <span className='bg-gray-600 w-[4px] h-[4px] rounded-full'></span>
            <h1 className='text-lg text-gray-500'>Donate</h1>
          </div>
        </div>
        </div>
        <div className='flex flex-wrap items-center gap-3'>
          <span className='text-lg font-medium px-3 h-11 rounded-lg border border-gray-300 flex items-center space-x-2 '>
            <span><LiaCommentSolid className='text-gray-500' size={22} /></span>       
            <span className=' text-sm font-bold text-gray-900'>Comments</span>
            <span className='text-gray-500 font-bold text-sm'>{videoDetails?.comments}</span>
           
          </span>
          <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><AiOutlineLike className='text-gray-500' size={22} /></span>
            <span className='text-sm font-bold text-gray-900'>Likes</span>
             <span className='text-sm text-gray-500 ml-1 font-bold'>{videoDetails?.likes}K</span>
             </span>
          <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><IoMdArrowRoundDown className='text-gray-500' size={22} /></span>
            <span className='text-sm text-gray-900 font-bold'>Downloads</span>
            <span className='text-sm text-gray-500 font-bold'>{videoDetails?.downloads}</span>
            </span>
          <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><RiFileVideoLine className='text-gray-500' size={22} /></span>
            <span className='text-sm text-gray-900 font-bold'>Size</span>
            <span className='text-sm text-gray-500 font-bold'>{((videoDetails?.videos.medium.size) / (1024 * 1024)).toFixed(2)} MB</span>
            </span>
            <a href={videoDetails?.videos.medium.url} download={1} className='text-md bg-[#05A081] text-white px-3 h-11 rounded-lg flex items-center space-x-4'>
            <span>Free Download</span>
            <div className='flex items-center space-x-2'>
              <span className=' w-[1px] h-7 bg-gray-500'></span>
              <IoMdArrowRoundDown size={22} />
            </div>
          </a>
          </div>
        </div>
       <div className='flex justify-center'>
        <video width={800} height={600} controls>
       <source src={videoDetails.videos.medium.url} type='video/mp4' />
       </video>
      
       </div>
       
        </div>}
      </div>
      </div>
    
  ) : ""
}

export default VideoModal
