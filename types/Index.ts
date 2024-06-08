export interface ImageInterface {
    id: number,
    pageURL: string,
        type: string,
        tags: string,
        previewURL: string,
        previewWidth: number,
        previewHeight: number,
        webformatURL: string,
        webformatWidth: number,
        webformatHeight: number,
        largeImageURL: string,
        imageWidth: number,
        imageHeight: number,
        imageSize: number,
        views: number,
        downloads: number,
        collections: number,
        likes: number,
        comments: number,
        user_id: number,
        user: string,
        userImageURL: string
      }
export interface VideoDetails {
url:string,
width: number,
height: number,
size: number,
thumbnail: string
}
export interface VideoTypeInterface {
     large: VideoDetails,
     medium: VideoDetails,
     small: VideoDetails,
     tiny: VideoDetails,

}
export interface VideoInterface {
  id: number,
pageURL: string,
type: string,
tags: string,
duration: number,
videos: VideoTypeInterface,
views: number,
downloads: number,
likes: number,
comments: number,
user_id: number,
user: string,
userImageURL: string
}