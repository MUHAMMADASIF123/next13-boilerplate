import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { RootState } from '@/store/store';

import { ProductResponse,Product } from '../types';

export interface ProductState {
  product: ProductResponse;
}

const initialState: ProductState = {
  product: {} as ProductResponse,
};
interface UpdateProductPayload {
  id: number;
  productData: Partial<Product>;
}

// slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<ProductResponse>) {
      state.product = action.payload;
    },
    updateProductSucceeded(state, action: PayloadAction<UpdateProductPayload>) {
      // Extract the id and productData from the action's payload
      const { id, productData } = action.payload;
    
      // Check if the products array exists and update the product
     
        state.product.products = state.product.products.map(product => {
          if (product.id === id) {
            // If the product ID matches, merge the existing product data with the updated product data

            return {
              ...product,
              ...productData,
            };
          }
          // Otherwise, return the original product data
          return product;
        });
  
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      };
    },
  },
});

// Actions
export const productActions = {
  fetchAll: createAction(`${productSlice.name}/fetchAll`),
  fetchAllSucceeded: productSlice.actions.fetchAllSucceeded,
  updateProduct : createAction<{ id: number; productData: Partial<Product> }>('product/updateProduct'),
  updateProductSucceeded: productSlice.actions.updateProductSucceeded,
};

// Selectors
export const selectProduct = (state: RootState) => state.product.product;

// Reducer
export default productSlice.reducer;
