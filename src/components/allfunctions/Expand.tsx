import Link from "next/link"
import { NavbarItemType } from "./Navbar/item/Arry"
import { FC } from "react"
import {HiOutlineChevronDown} from "react-icons/hi"
import { useState } from "react"
const Expand: FC<{item:NavbarItemType}> = ({ item } ) => {
    const [isExpand,setExpand] = useState<boolean>(false);
    const [isTimeOut,setTimeOut] = useState<boolean>(false);
    function hendelset(){
        setTimeout(()=>{
            setTimeOut(!isTimeOut)
        },100)
    }
  return (
    <div>
    <li 
     className={` ${isExpand? "h-4/5" : "h-12"} duration-300 list-none `}>
                         <div onClick={hendelset} className="flex justify-between py-2 px-3 hover:bg-purple-600 rounded-md duration-300">                       
                      <Link href={item.href}>{item.label}</Link>
                      {item.isDropdown?<HiOutlineChevronDown className='mt-1 -rotate-180 group-hover:rotate-0  hover:duration-300 hover:cursor-pointer' size={16}/>:""}
                      </div> 
                    </li>
    <div className="flex flex-col  space-y-1">
        {
          isTimeOut && item.dropDownData?.map((subItem:NavbarItemType , index:number)=>(
    <Link key={index} className="hover:bg-gray-50 rounded-md px-5 py-1 duration-100  " 
    href={subItem.href}>{subItem.label}</Link>
         ))   }
    </div>
    </div>
  )
}

export default Expand