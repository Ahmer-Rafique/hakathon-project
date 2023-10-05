"use client"
import { Component, FC, ReactNode } from "react"
import { oneProductType } from "../../allfunctions/ProductsDataArrayAndType";
import Card from "../../Card";


const ProductCarousel: FC<{ Product: Array<oneProductType> }> = ({ Product }) => {
    return (
        <div className="space-y-4">
            <div className="text-center space-y-3">
                <p className="text-blue-800 text-sm">PROMOTIONS</p>
                <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
            </div>
            <div      
                className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"   
            >
                {Product.map((item: oneProductType, index: number) => (
                    <Card key={index} singleProductData={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCarousel