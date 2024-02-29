import React from 'react';

import { useUserAgent } from '@/libs/hooks/useUserAgent';

import { useProductService } from '../../hooks';
import { ProductItem } from '../ProductItem/ProductItem';
import { selectProduct } from '../../store';
import { useAppSelector } from '@/store/hooks';

export const ProductContainer = () => {
  const product = useAppSelector(selectProduct);
  const { userAgent } = useUserAgent();

  return (
    <>
      <ProductItem products={product.products} userAgent={userAgent} />
    </>
  );
};
