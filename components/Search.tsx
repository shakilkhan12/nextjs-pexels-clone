'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setImages, setLoader, setSearchActive, setSearchType, setVideos } from "@/lib/slices/imagesSlice"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { FaImage } from "react-icons/fa"
import { GoVideo } from "react-icons/go"

const Search = () => {
  const [keywords] = useState([
    "flowers",
    "mountains",
    "building",
    "technology",
    "cities"
   ])
    const [query,setQuery]=useState('')
    const dispatch = useAppDispatch()
    const {searchType, image_type, orientation, colors} = useAppSelector(state => state.imagesSlice)
    const onChange = (value: any) => {
      dispatch(setSearchType(value))
    }
   const searchImages = async (query: string) => {
    dispatch(setLoader())
    const formatColors = colors.length > 0 ? colors.map(color => `"${color}"`).join(',') : "";
    try {
      const {data}=await axios.get(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_KEY}&q=${query}&image_type=${image_type}&orientation=${orientation}&colors=${formatColors}`,)
        dispatch(setLoader())
        console.log('not its time to close loader')
        if(data.hits){
         dispatch(setImages(data.hits))
         dispatch(setVideos([]))
        }
    } catch (error) {
      dispatch(setLoader())
      throw new Error('Images loading failed')
    }
   }
   const search = async(e:any) => {
    if (e.key === 'Enter') {
      if(searchType === 'images') {
        searchImages(query);
        dispatch(setSearchActive(true))
      } else {
        dispatch(setLoader())
        try {    
          const {data}=await axios.get(`https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_KEY}&q=${query}`)
          dispatch(setLoader())
          
          if(data.hits){
           dispatch(setVideos(data.hits))
           dispatch(setImages([]))
          }  
        }
        catch(error){
        dispatch(setLoader())
        alert('Failed')
        } 
      }
     
    }
   
   
   }
   useEffect(() => {
     if(query) {
      searchImages(query)
     }
   }, [image_type, orientation, colors])
   useEffect(() => {
    const index = Math.floor(Math.random() * keywords.length)
    const fetchImages = async () => {
          searchImages(keywords[index])  
    }  
      fetchImages() 
   },[])

  return (
    <div className='w-full bg-[#f7f7f7] rounded-xl flex items-center space-x-3 px-3 flex-1'>
    <IoIosSearch className='text-green-500' size={30} />
    <input onKeyDown={search} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" className='flex-1 w-full h-[50px] rounded-xl outline-none  bg-[#f7f7f7]' placeholder='Search for all images on Pixabay' />
    <Select onValueChange={onChange} defaultValue={searchType}>
<SelectTrigger className="w-[130px] bg-[#f7f7f7] border-none outline-none ring-0" >
<SelectValue  />
</SelectTrigger>
<SelectContent className="z-[9999999]">
<SelectItem value="images"><div className='flex items-center space-x-2 font-semibold'><FaImage size={17} /><span> Images</span></div></SelectItem>
<SelectItem value="vidoes"><div className='flex items-center space-x-2 font-semibold'><GoVideo size={17} /><span> Videos</span></div></SelectItem>
</SelectContent>
</Select>

    </div>
  )
}

export default Search