
import {HiOutlineChevronDown} from "react-icons/hi"
import Link from "next/link"
import { NavbarArray, NavbarItemType } from "./Arry"

const Mobile = () => {
    
  return (  
    <div>
        <div className="w-full px-6 bg-gray-100">
          {
            NavbarArray.map((item:NavbarItemType , index:number )=>{
                return(
                    <div>
                    <li key={index} className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none flex justify-between ">
                      <Link href={item.href}>{item.label}</Link>
                      {item.isDropdown?<HiOutlineChevronDown className='mt-1 -rotate-180 group-hover:rotate-0  hover:duration-300 hover:cursor-pointer' size={16}/>:""}
                    
                    </li>
                    </div>
                )
            })
          }
        </div>
        
    </div>
  )
}

export default Mobile