import makeApi from '@/libs/core/configureAxios';
import Env from '@/libs/helpers/Env';

import { Product, ProductResponse } from '../types';

const api = makeApi(`${Env.API_SERVER_URL}`);

const PRODUCT_URL = 'products';
interface UpdateProductPayload {
  id: number;
  productData: Partial<Product>;
}

export const getProducts = (): Promise<ProductResponse> => api.get(PRODUCT_URL);

// Within your API file



export const updateProduct = (id: number, productData: Product): Promise<UpdateProductPayload> => {
  console.log("Updating product with ID:", id);
  return api.put(`${PRODUCT_URL}/${id}`, productData);
};