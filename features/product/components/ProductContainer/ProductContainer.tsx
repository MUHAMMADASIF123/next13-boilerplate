import React, { useEffect } from 'react';

import { useUserAgent } from '@/libs/hooks/useUserAgent';

import { useProductService } from '../../hooks';
import { ProductItem } from '../ProductItem/ProductItem';
import { userAgent } from 'next/server';
import { productActions } from '../../store';
import { useDispatch } from 'react-redux';

export const ProductContainer = () => {
  const { product} = useProductService();
  const dispatch = useDispatch()

  // const { userAgent } = useUserAgent();

  useEffect(()=>{
    console.log("func")
     dispatch(productActions.fetchAll());
  },[dispatch])
  return (
    <>
      <ProductItem products={product.products} />
    </>
  );
};


