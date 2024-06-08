import { ImageInterface, VideoInterface } from '@/types/Index'
import { createSlice } from '@reduxjs/toolkit'

export interface ImageType {
  images: ImageInterface[]
  videos: VideoInterface[]
  model: boolean,
  videoModal: boolean
  imageDetails: ImageInterface | null,
  videoDetails: VideoInterface | null
  loader: boolean
  searchType: string,
  image_type: string,
  orientation: string,
  colors: string[]
}

const initialState: ImageType = {
  images:[],
  videos: [],
  model:false,
  videoModal: false,
  imageDetails: null,
  videoDetails: null,
  loader: false,
  searchType: 'images',
  image_type: 'all',
  orientation: 'all',
  colors: []
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages: (state, {payload}) => {
        state.images = payload
    },
    setVideos: (state, {payload}) => {
        state.videos = payload
    },
    toggleModel: (state) => {
        state.model = !state.model;
    },
    toggleVideoModal: (state) => {
        state.videoModal = !state.videoModal;
    },
    setSearchType: (state, {payload}) => {
      state.searchType = payload;
    },
    setImageDetails: (state,{payload}) => {
      const image = state.images.find((data) => data.id === payload)
      if(image) {
        state.imageDetails = image
      }
    },
    setVideoDetails: (state, {payload}) => {
      const video = state.videos.find((data) => data.id === payload)
      if(video) {
        state.videoDetails = video
      }
    },
    setLoader: (state) => {
      state.loader = !state.loader
          },
    setImageType: (state, {payload}) => {
      state.image_type = payload;
    },
    setOrientation: (state, {payload}) => {
      state.orientation = payload;
    },
    selectColor: (state, {payload}) => {
      if (!state.colors.includes(payload)) {
        state.colors = [...state.colors, payload]
      }
    },
    removeColor: (state, {payload}) => {
      state.colors = state.colors.filter(c => c !== payload)
    }
}})

// Action creators are generated for each case reducer function
export const { setImages, setVideos, toggleModel, toggleVideoModal, setImageDetails,setVideoDetails, setLoader, setSearchType, setImageType, setOrientation, selectColor, removeColor } = imageSlice.actions

export default imageSlice.reducer