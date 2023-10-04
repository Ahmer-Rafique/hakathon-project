import Image from 'next/image'
import Hero from './view/Hero'
import Producttype from './view/Producttype'

import ProductCarousel from '../components/shared/ProductCursel';
import BASE_PATH_FORAPI from '../components/shared/base';
async function fetchAllPriductsData(){
  let res = await fetch(` ${BASE_PATH_FORAPI}/api/products`);
  if(!res.ok){
    throw new Error("Field to fetch")
  }
  return res.json();
}
export default async function Home() {
    let { response } = await fetchAllPriductsData();
    //console.log(response);
  return (
    <div  >
        <Hero/>  
      <Producttype/>
    <ProductCarousel Product = {response}/>
    </div>
  )
}
