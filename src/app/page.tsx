import Hero from './view/Hero'
import Producttype from './view/Producttype'
import BASE_PATH_FORAPI from '../components/shared/path';
import ProductCarousel from '../components/shared/ProductCursel';
async function fetchAllPriductsData(){
  let res = await fetch(` ${BASE_PATH_FORAPI}/api/products`);
  if(!res.ok){
    throw new Error("Field to fetch")
  }
  return res.json();
}
export default async function Home() {
    let { response } = await fetchAllPriductsData();
   
  return (
    <div  >
        <Hero/>  
      <Producttype/>
    <ProductCarousel ProductData = {response}/>
    </div>
  )
}
