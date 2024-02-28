import React, { useState,  } from 'react';

import map from 'lodash/map';
import Image from 'next/image';
import { LazyLoad } from 'react-lazy-loader-component';

import { UserAgent } from '@/libs/types/userAgent.type';

import { Product } from '../../types';
import { productActions } from '../../store/product.slice';
import { log } from 'console';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal'
import { update } from 'lodash';




interface ProductItemProps {
  userAgent: UserAgent;
  products?: Product[];
}



export const ProductItem = ({ products }: ProductItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

const dispatch=useDispatch()

  const handleUpdateProduct = (productData:any) => {
    console.log("this update product4")
    dispatch(productActions.updateProduct({id:productData.id,productData}));
  };
  const handleOpenModal = (product: Product) => {
    // const product = products?.filter(p => p.id === product.id)
    console.log(product,"product")
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleDeleteProduct = (id: number) => {
    dispatch(productActions.deleteProduct({ id }));
  };

  return (
    <>
    <div className="container mx-auto mt-7 mb-8 md:mt-[50px] md:mb-16">
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {map(products, item => {
          return (
            <div key={`${item.title} `
            
           }
           onClick={() => handleOpenModal(item)} >
              <LazyLoad className="relative h-[173px] w-full md:h-[197px]" rootMargin="100px" threshold={0.95}>
                <Image className="rounded-lg" src={item.thumbnail} alt={item.title} fill priority unoptimized />
              </LazyLoad>
              <div className="mt-4">
                <h4 className="text-base font-bold leading-6 text-gray-800 line-clamp-2 md:text-lg">{item.title}</h4>

                <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base ">Price: ${item.price}</div>
                <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
    {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onSave={handleUpdateProduct}
          onDelete={handleDeleteProduct}
        />
      )}
    </>
  );
};




