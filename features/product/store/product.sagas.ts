import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProducts,getProductById } from '../api';
import { ProductResponse } from '../types';
import { productActions } from './product.slice';

// Worker Sagas
export function* onGetProduct(): SagaIterator {
  const product: ProductResponse = yield call(getProducts);
  console.log(product,"products")
  yield put(productActions.fetchAllSucceeded(product));
}

export function* onGetSingleProduct(action: ReturnType<typeof productActions.fetchSingle>): SagaIterator {
  try {
    const product: ProductResponse = yield call(getProductById, action.payload); // action.payload should be the productId
    yield put(productActions.fetchAllSucceeded(product));
    console.log(product,"productonme") // Assuming your state is set up to handle an array of products
    // If your state is designed to handle a single product differently, you might need a different action here
  } catch (error) {
    console.error('Fetch single product failed', error);
    // Optionally, dispatch a failure action here
  }
}
// Watcher Saga
export function* productWatcherSaga(): SagaIterator {
  yield takeEvery(productActions.fetchAll.type, onGetProduct);
  yield takeEvery(productActions.fetchSingle.type, onGetSingleProduct);
}

export default productWatcherSaga;
