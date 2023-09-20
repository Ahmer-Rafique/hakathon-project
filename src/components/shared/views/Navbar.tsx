"use client"
import {MdClose} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/Gi"
import {useState} from "react"
import Mobile from '@/components/all functions/Navbar/item/mobile';
import {BsCart2  } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
 import { NavbarArray, NavbarItemType } from "@/components/all functions/Navbar/item/Arry"
import Image from "next/image"
import Link from "next/link"
import {HiOutlineChevronDown } from 'react-icons/hi';
import DropDown from './DropDown';
const Navbar = () =>{
    const [isNavbaropen, setisNavbaropen] = useState<boolean> (false)
    return (
        <div>
        <div className="py-2  flex items-center justify-between space-x-12 "> 
            <div className=" flex-shrink-0 w-36 cursor-pointer ">
            <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
            </div>
            <div className='hidden lg:flex items-center justify-between w-full'>
            <ul className="flex  items-center space-x-6   font-semibold text-lg text-blue-600 relative  ">
                {NavbarArray.map((item: NavbarItemType, index:number)=>(
                  <li className='flex items-center  hover:bg-gray-100 group '>
                    <Link href={item.href}> {item.label}</Link>
                    {item.isDropdown?<HiOutlineChevronDown className='mt-1 -rotate-180 group-hover:rotate-0  hover:duration-300 hover:cursor-pointer' size={16}/>:""}
                    { item.isDropdown && <div className=' invisible group-hover:visible absolute gap-1 top-6   py-2 px-4 text-lgn min-w-[6.5rem] border bg-gray-100 font-light'>
                  
                    <DropDown item={item}/>
                    </div>}
                  </li>
                ))}
            </ul>
           
            
            <div className='flex items-center text-gray-600 border rounded-md px-3 '>  
                <BiSearchAlt2 size={20} />
                <input
                type="text"
                className="outline-none pl-1 pr-5 py-1 w-80 "
                placeholder="Search our pruduct" 
                /> 
                    </div>
                <div className=' flex-shrink relative w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center'>
                    <div className='absolute top-0 bg-red-500 rounded-full w-4 h-4 flex  items-center justify-center right-1' >1</div>
                 <BsCart2 size={20}/>

                </div>
                </div>
                <div onClick={()=> setisNavbaropen(!isNavbaropen)}> 
      { isNavbaropen? 
      <div className='flex lg:hidden'>
      <MdClose size={30}/>
</div>
  :
        <div className='flex lg:hidden'>
    <GiHamburgerMenu size={25}/>
    </div>
}
</div>
 </div>
  { 
    isNavbaropen && <Mobile/>               
    }
    </div>
    )
}
export default Navbar 