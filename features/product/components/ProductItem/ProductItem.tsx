import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import Image from 'next/image';
import { LazyLoad } from 'react-lazy-loader-component';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { productActions } from '../../store/product.slice'; // Adjust the import path as needed
import { Product } from '../../types';
import { once } from 'lodash';
import router from 'next/router';




interface ProductItemProps {
  products?: Product[];
}

export const ProductItem = ({ products }: ProductItemProps) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
console.log(selectedProduct,"selectedProduct")
  const handleProductClick = (productId: any) => {
    const product = products?.find((item) => item.id === productId);

  if (product) {
    setSelectedProduct(product); // Set the selected product state
    console.log(product); // Log the selected product details to the console
    console.log("fetchAll")
    dispatch(productActions.fetchAll());
    console.log("fetchSingle")
    dispatch(productActions.fetchSingle(productId));
   
    
  }
  };

  useEffect(()=>{
    console.log("func")
     dispatch(productActions.fetchAll());
  },[dispatch])

  useEffect(() => {
    if (selectedProduct) {
      setIsModalOpen(true); // Open the modal when a product is selected
    }
  }, [selectedProduct]);

  return (
    <div className="container mx-auto mt-7 mb-8 md:mt-[50px] md:mb-16">
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {map(products, (item) => (
          <div key={`${item.id}-${item.title}`} className="cursor-pointer" onClick={() => handleProductClick(item.id)}>
            <LazyLoad className="relative h-[173px] w-full md:h-[197px]" rootMargin="100px" threshold={0.95}>
              <Image className="rounded-lg" src={item.thumbnail} alt={item.title} fill priority unoptimized />
            </LazyLoad>
            <div className="mt-4">
              <h4 className="text-base font-bold leading-6 text-gray-800 line-clamp-2 md:text-lg">{item.title}</h4>
              <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base ">Price: ${item.price}</div>
              <div className="mt-2 text-sm leading-[22px] text-gray-700 line-clamp-2 md:text-base">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* {isModalOpen && <Modal products={selectedProduct} onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
};
