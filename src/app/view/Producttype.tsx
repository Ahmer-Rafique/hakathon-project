import Image from "next/image";

const Producttype = () => {
  return (
    <div className="py-16 px-2 " >  
    {/* Heading */}
      <div className="text-center  py-3" >
         <p className="text-purple-800 text-sm">PROMOTIONS</p>
         <h3 className="text-3xl text-gray-800 font-bold py-3 ">Our Promotions Events </h3>
        </div>
        <div className="grid grid-cols-4 gap-5 px-2 text-gray-800" >
          {/* First Grid */}
          <div className="w-full  flex col-span-2 px-12 bg-cat1" >
           <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
           </div>
           <div className="w-64">
            <Image width={1000} height={1000} alt="summer season" src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent1.6f776995.png%26w%3D384%26q%3D75&w=1080&q=75"}/>
           </div>
          </div>
          {/* Second Grid */}
          <div className="w-full row-span-2 h-full bg-cat3">
          <div className="text-lg px-14 py-4">
              <p>Flex Sweatshirt</p>
              <p> <del>$100.00</del> &nbsp; <b><ins>$75.00</ins></b></p>
            </div>
            <div className="w-64">
               <Image height={1000} width={1000} alt="summer 2" src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent2.b5f201ac.png%26w%3D384%26q%3D75&w=1080&q=75"}/>
            </div>
          </div>
          {/* Third Grid */}
          <div className="w-full row-span-2 h-full bg-cat4">
          <div className="text-lg px-14 py-4">
              <p>Flex Sweatshirt</p>
              <p> <del>$225.00</del> &nbsp; <b><ins>$190.00</ins></b></p>
            </div>
            <div className="w-64">
               <Image height={1000} width={1000} alt="summer 2" src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent3.798fa92b.png%26w%3D384%26q%3D75&w=1080&q=75"}/>
            </div>
          </div>
          {/* Fourth Grid */}
          <div className="w-full col-span-2 space-y-3 bg-cat2 text-white flex-col flex justify-center items-center py-9 ">
             <h3 className="text-4xl font-bold" >GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button
            aria-label="Redirect user to Dine Week End Sale"
            className="py-1 px-8 text-lg font-semibold bg-[#474747] rounded-lg tracking-widest">
              DINEWEEKENDSALE
            </button>
            
            </div>
          </div>
          </div>     
       
  )
} 
  
export default Producttype    ;