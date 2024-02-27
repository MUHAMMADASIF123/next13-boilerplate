import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { productActions, selectProduct } from '../store';
import { Product, ProductResponse } from '../types';

export type ProductServiceOperators = {
  product: ProductResponse;
  fetchAllProduct: () => void;
  updateProduct: (id: number, productData: Partial<Product>) => void;
};

export const useProductService = (): Readonly<ProductServiceOperators> => {
  const dispatch = useAppDispatch();

  // Function to fetch all products
  const fetchAllProduct = useCallback(() => {
    dispatch(productActions.fetchAll());
  }, [dispatch]);

  // Function to update a product
  const updateProduct = useCallback((id: number, productData: Partial<Product>) => dispatch(productActions.updateProduct({ id: id, productData })), [dispatch]);

  const product = useAppSelector(selectProduct);

  return {
    product,
    fetchAllProduct,
    updateProduct, // Make sure to return this function so it can be used in your components
  };
};


export default useProductService;
