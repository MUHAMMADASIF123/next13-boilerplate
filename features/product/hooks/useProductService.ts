import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { productActions, selectProduct } from '../store';
import { ProductResponse } from '../types';
import product from 'next-seo/lib/jsonld/product';

export type ProductServiceOperators = {
  product: ProductResponse;
  fetchAllProduct: () => void;
  fetchSingleProduct: (productId: string) => void; 
};

export const useProductService = (): Readonly<ProductServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    product: useAppSelector(selectProduct),
    fetchAllProduct: useCallback(() => {
      dispatch(productActions.fetchAll());
    }, [dispatch]),
    fetchSingleProduct : useCallback((productId: string) => {
      dispatch(productActions.fetchSingle(productId)); // Dispatch the action to fetch a single product
    }, [dispatch])
    
  };
};

export default useProductService;
