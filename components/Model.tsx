"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleModel } from '@/lib/slices/imagesSlice'
import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { CiImageOn } from 'react-icons/ci'
import { IoMdArrowRoundDown, IoMdClose } from 'react-icons/io'
import { LiaCommentSolid } from 'react-icons/lia'
import { RiFileVideoLine } from 'react-icons/ri'

const Model = () => {
  const dispatch = useAppDispatch()
  const {model, imageDetails} = useAppSelector(state =>state.imagesSlice)

  return model ? (
    <div className='fixed p-6 inset-0 w-full h-full bg-black/35 backdrop-blur flex justify-center items-center z-[9999999]'>
      <IoMdClose onClick={()=>dispatch(toggleModel())} className='absolute top-4 text-[24px] right-4 cursor-pointer text-white' />
     {imageDetails &&  <div className='relative overflow-y-auto w-[1200px] max-h-[85vh]  bg-[#FFFFFF]  rounded-lg  py-16 px-4'>
        
        <div className=' flex flex-wrap justify-between items-center gap-3 -mt-[40px]'>
          <div className='flex items-center justify-center space-x-4'>
            {imageDetails?.userImageURL ? <img className='rounded-full object-cover' width={45} height={45} src={imageDetails?.userImageURL} alt="" /> : <span className='flex items-center justify-center bg-green-600 text-white rounded-full font-medium uppercase text-lg w-[45px] h-[45px]'>{imageDetails?.user?.[0]}</span>}
        
        <div className='flex-1'>
          <h1 className='text-lg capitalize'>{imageDetails?.user}</h1>
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
            <span className=' text-sm text-gray-900 font-bold'>Comments</span>
            <span className='text-gray-500 text-sm font-bold'>{imageDetails?.comments}</span>
           
          </span>
          <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><AiOutlineLike className='text-gray-500' size={22} /></span>
            <span className='text-sm font-bold text-gray-900'>Likes</span>
             <span className='text-sm text-gray-500 ml-1 font-bold'>{imageDetails?.likes}K</span>
             </span>
          <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><IoMdArrowRoundDown className='text-gray-500' size={22} /></span>
            <span className='text-sm text-gray-900 font-bold'>Downloads</span>
            <span className='text-sm text-gray-500 font-bold'>{imageDetails?.downloads}</span>
            </span>
            <span className='px-3 h-11 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><CiImageOn className='text-gray-500' size={22} /></span>
            <span className='text-sm text-gray-900 font-bold'>Size</span>
            <span className='text-sm text-gray-500 font-bold'>{((imageDetails?.imageSize) / (1024 * 1024)).toFixed(2)} MB</span>
            </span>
          <a href={imageDetails?.previewURL} download={imageDetails?.previewURL} className='text-md bg-[#05A081] text-white px-3 h-11 rounded-lg flex items-center space-x-4'>
            <span>Free Download</span>
            <div className='flex items-center space-x-2'>
              <span className=' w-[1px] h-7 bg-gray-500'></span>
              <IoMdArrowRoundDown size={22} />
            </div>
          </a>
          </div>
          
        </div>
          <div className='mt-9'>
          <Image className='mx-auto rounded-sm' src={imageDetails?.webformatURL} alt='image details' width={imageDetails?.webformatWidth} height={imageDetails?.webformatHeight}/>
          </div>
          
        </div>}
      </div>
    
  ) : ""
}

export default Model
