import { AnyAction, SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProducts, updateProduct, } from '../api';
import { Product,  ProductResponse } from '../types';
import { productActions } from './product.slice';
import { PayloadAction } from '@reduxjs/toolkit';

// Worker Sagas
interface UpdateProductPayload {
  id: number;
  payload: Product;
}
export function* onGetProduct(): SagaIterator {
  const product: ProductResponse = yield call(getProducts);
  console.log(product,"productsa")
  yield put(productActions.fetchAllSucceeded(product));
}

export function* onUpdateProduct(action: { payload: { id: number; productData: Product; } }) {
  try {
    // Destructure payload to get productId and productData
    const { id, productData } = action.payload;

    // Call the updateProduct API with both productId and productData
    const updatedProduct: UpdateProductPayload = yield call(updateProduct, id, productData);
    // Dispatch the success action with the updated product
    yield put(productActions.updateProductSucceeded(updatedProduct));
   
  } catch (error) {
    console.error('Update product failed', error);
    // Handle any errors, such as dispatching a failure action
  }

}
// function isUpdateProductAction(action: AnyAction): action is PayloadAction<{ id: number; productData: Product; }> {
//   return action.type === productActions.updateProduct.type;
// }



// Watcher Saga
export function* productWatcherSaga() {
  yield takeEvery(productActions.fetchAll.type, onGetProduct);
  yield takeEvery(productActions.updateProduct, onUpdateProduct);
}

export default productWatcherSaga;
function dispatch(arg0: { payload: { id: number; productData: Product; }; type: string; }) {
  throw new Error('Function not implemented.');
}

