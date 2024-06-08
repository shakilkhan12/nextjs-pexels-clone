'use client'
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAppDispatch } from "@/lib/hooks"
import { setImageType, setOrientation } from "@/lib/slices/imagesSlice"
type PropTypes = {
   data: {
    placeholder: string,
    name: string,
    data: {
        id: number,
        icon?: React.ReactElement,
        label: string,
        value: string
    }[]
   }
}
const Filters = ({data}: PropTypes) => {
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    if(data.name === 'images') {
      dispatch(setImageType(value))
    } else if(data.name === 'orientation') {
      dispatch(setOrientation(value))
    }
  }
  return (
    <Select onValueChange={onChange}>
    <SelectTrigger className="w-[130px] border-none text-green-600">
      <SelectValue placeholder={data.placeholder} />
    </SelectTrigger>
    <SelectContent className="z-[999999999999999]">
      <SelectGroup>
        {data.data.map(item => (    
        <SelectItem key={item.id} value={item.value}> <div className="flex items-center space-x-3">{item?.icon && item.icon} <span className="capitalize">{item.label}</span></div></SelectItem>
        ))}    
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default Filters