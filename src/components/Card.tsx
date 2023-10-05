import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import React, { FC } from 'react'
import { client } from '../clients/sanityClient';
import { oneProductType } from './allfunctions/ProductsDataArrayAndType';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}


const Card: FC<{ ProductData : oneProductType }> = ({ ProductData }) => {

    return (
        <div className='max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10' />
                <Image width={1000} height={1000} src={urlFor(ProductData.image[0]).width(1000).height(1000).url()} alt={ProductData.image[0].alt} />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
                
                    <h6>{ProductData.productName}</h6>
                    <p>${ProductData.price}</p>
                
                

            </div>
        </div>
    )
}

export default Card