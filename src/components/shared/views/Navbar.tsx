
import {BsCart2  } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
 import { NavbarArray, NavbarItemType } from "@/components/all functions/Navbar/item/Arry"
import Image from "next/image"
import Link from "next/link"
import {HiOutlineChevronDown } from 'react-icons/hi';
import DropDown from './DropDown';
const Navbar = () =>{
    return (
        <div className="py-2  flex items-center justify-between "> 
            <div className="w-36 cursor-pointer ">
            <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
            </div>
            <ul className="flex  items-center space-x-7   font-semibold text-lg text-blue-600 relative  ">
                {NavbarArray.map((item: NavbarItemType, index:number)=>(
                  <li key={index} className='flex items-center  hover:bg-gray-100 group  '>
                    <Link href={item.href}> {item.label}</Link>
                    {item.isDropdown?<HiOutlineChevronDown className='mt-1 -rotate-180 group-hover:rotate-0  duration-300 hover:cursor-pointer' size={16}/>:""}
                    { item.isDropdown && <div className=' invisible group-hover:visible absolute gap-1 top-6   py-2 px-4 text-lg min-w-[6.5rem] border bg-gray-100 font-light'>
                  
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
                <div className=' relative w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center'>
                    <div className='absolute top-0 bg-red-500 rounded-full w-4 h-4 flex  items-center justify-center right-1' >1</div>
                 <BsCart2 size={20}/>

                </div>
        </div>
    )
}
export default Navbar 