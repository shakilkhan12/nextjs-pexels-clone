'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { removeColor, selectColor } from "@/lib/slices/imagesSlice"
import { useState } from "react"
import { IoCheckmark } from "react-icons/io5"

const ColorPicker = () => {
    const [colors] = useState([
        {id: 1, color: 'red'},
        {id: 2, color: 'orange'},
        {id: 3, color: 'yellow'},
        {id: 4, color: 'green'},
        {id: 5, color: 'turquoise'},
        {id: 6, color: 'blue'},
        {id: 7, color: 'maroon'},
        {id: 8, color: 'pink'},
        {id: 9, color: 'white'},
        {id: 10, color: 'gray'},
        {id: 11, color: 'black'},
        {id: 12, color: 'brown'},

    ])
    const dispatch = useAppDispatch()
    const {colors: selectedColors} = useAppSelector( state => state.imagesSlice);
  return (
    <div className="absolute top-full left-0 w-[300px] h-auto bg-white rounded-lg p-5 border shadow-md z-[9999]">
        <div className="grid grid-cols-5 gap-5">
            {colors.map(color => (

                <span onClick={() => {
                    selectedColors.includes(color.color) ? dispatch(removeColor(color.color)) : dispatch(selectColor(color.color)) 
                }} className={`flex items-center justify-center min-w-10 min-h-10 rounded-full ${color.color === 'white' && 'border'} cursor-pointer`} style={{backgroundColor: color.color}}>
                    {selectedColors.includes(color.color) && <IoCheckmark className={`text-white ${color.color === 'white' || color.color === 'yellow' ? 'text-black' : ''}`} />}
                </span>
            ))}
        </div>
    </div>
  )
}

export default ColorPicker