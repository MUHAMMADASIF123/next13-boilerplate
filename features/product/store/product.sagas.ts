import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProducts, updateProduct, } from '../api';
import { Product,  ProductResponse } from '../types';
import { productActions } from './product.slice';

// Worker Sagas
interface UpdateProductPayload {
  id: number;
  productData: Partial<Product>;
}
export function* onGetProduct(): SagaIterator {
  const product: ProductResponse = yield call(getProducts);
  yield put(productActions.fetchAllSucceeded(product));
}

export function* onUpdateProduct(action: { payload: { id: number; productData: Product; } }): SagaIterator {
  try {
    // Destructure payload to get productId and productData
    const { id, productData } = action.payload;
    console.log("productData:", productData);

    // Call the updateProduct API with both productId and productData
    const updatedProduct: UpdateProductPayload = yield call(updateProduct, id, productData);

    // Dispatch the success action with the updated product
    yield put(productActions.updateProductSucceeded(updatedProduct));
  } catch (error) {
    console.error('Update product failed', error);
    // Handle any errors, such as dispatching a failure action
  }
}



// Watcher Saga
export function* productWatcherSaga(): SagaIterator {
  yield takeEvery(productActions.fetchAll.type, onGetProduct);
  yield takeEvery(productActions.updateProductSucceeded.type as any, onUpdateProduct)
}

export default productWatcherSaga;
