import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { RootState } from '@/store/store';

import { ProductResponse } from '../types';

export interface ProductState {
  product: ProductResponse;
}

const initialState: ProductState = {
  product: {} as ProductResponse,
};

// slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<ProductResponse>) {
      state.product = action.payload;
    },
    fetchSingleSucceeded(state, action: PayloadAction<ProductResponse>) {
      state.product = action.payload; // Assuming ProductResponse can represent a single product as well
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
   fetchSingle: createAction<string>(`${productSlice.name}/fetchSingle`), // Action to fetch a single product, expects product ID as payload
  fetchSingleSucceeded: productSlice.actions.fetchSingleSucceeded,
};

// Selectors
export const selectProduct = (state: RootState) => state.product.product;

// Reducer
export default productSlice.reducer;
