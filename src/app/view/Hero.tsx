import Image from "next/image";
import {BsCart2  } from 'react-icons/bs';
import { HeroGirlimg } from "../../components/assets/insex";
const Hero = () => {
  const btntext = "Start\n shopping"
  return (
    <div className=" py-6 flex justify-between px-2 items-center PX-2">
        {/* left side */}
      <div className="space-y-5 max-w-sm">
        <button className="bg-pink-100 h-10 w-24 hover:bg-pink-200 rounded-md font-medium text-blue-900 ">Sale 70%</button>
        <h1 className="text-gray-800 text-3xl md:text-6xl font-bold ">An Industrial Take on Streetwear</h1>
        <p className="text-gray-700">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <button className= "flex gap-1 space-x-5 items-center ring-1 ring-slate-800 h-16 w-40 rounded-sm bg-gray-800 hover:bg-slate-600 text-lg text-white px-2 py-3 ">
        <BsCart2/>
          <p className="whitespace-pre leading-4">
            {btntext}
            </p>
        </button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
        <img height={100} width={100} src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured1.66abddd4.png%26w%3D128%26q%3D75&w=128&q=75"} alt="Bazar"  />
        </div>
        <div className="w-14 md:w-28">
        <img height={100} width={100} src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured2.247cd605.png%26w%3D128%26q%3D75&w=128&q=75"} alt="Bustale"/>
            </div>
            <div className="w-14 md:w-28">         
        <img height={100} width={100} src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured3.6076521d.png%26w%3D128%26q%3D75&w=128&q=75"} alt="Versace"/>
            </div> 
            <div className="w-14 md:w-28">        
        <img  height={100} width={100} src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured4.0489f1fc.png%26w%3D128%26q%3D75&w=128&q=75"} alt="In style"/>
        </div>
        </div>
      </div>
      {/* right side */}
      <div className="hidden md:flex bg-[#FFECE3] rounded-full ">
        <Image src={HeroGirlimg} alt="HeroGirlimg" />
      </div>
    </div>
  )
}

export default Hero