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
  payload: Product;
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
      const { payload } = action;
      const { id } = payload

      const productIndex = state.product.products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        state.product.products[productIndex] = {
          ...state.product.products[productIndex],
          ...payload,
        };
      } else {
        console.log(`Product with id ${id} not found.`);
      }
    },
    deleteProductSucceeded(state, action: PayloadAction<{ id: number }>) {
      state.product.products = state.product.products.filter(product => product.id !== action.payload.id);
    },
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
  updateProduct : createAction<{ id: number; productData: Product }>(`${productSlice.name}/updateProduct`),
  updateProductSucceeded: productSlice.actions.updateProductSucceeded,
  deleteProduct: createAction<{ id: number }>(`${productSlice.name}/deleteProduct`),
  deleteProductSucceeded: productSlice.actions.deleteProductSucceeded,
};

// Selectors
export const selectProduct = (state: RootState) => state.product.product;

// Reducer
export default productSlice.reducer;
