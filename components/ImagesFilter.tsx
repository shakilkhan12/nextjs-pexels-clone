import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaImage, FaPaintBrush } from "react-icons/fa"
import { IoMdImage } from "react-icons/io"
import { RiMarkPenLine } from "react-icons/ri"

export default function ImagesFilter() {
  return (
    <Select>
      <SelectTrigger className="w-[130px] border-none">
        <SelectValue placeholder="Select Images" />
      </SelectTrigger>
      <SelectContent className="z-[999999999999999]">
        <SelectGroup>
          <SelectItem value="apple"> <div className="flex items-center space-x-3"><FaImage /> <span>All</span></div></SelectItem>
          <SelectItem value="banana"><div className="flex items-center space-x-3"><IoMdImage /> <span>Photo</span></div></SelectItem>
          <SelectItem value="blueberry"><div className="flex items-center space-x-3"><FaPaintBrush /> <span>Illustration</span></div></SelectItem>
          <SelectItem value="grapes"><div className="flex items-center space-x-3"><RiMarkPenLine /> <span>Vector</span></div></SelectItem>
        
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
