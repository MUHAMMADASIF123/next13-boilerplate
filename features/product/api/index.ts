import makeApi from '@/libs/core/configureAxios';
import Env from '@/libs/helpers/Env';

import { Product, ProductResponse } from '../types';

const api = makeApi(`${Env.API_SERVER_URL}`);

const PRODUCT_URL = 'products';
interface UpdateProductPayload {
  id: number;
  productData: Product;
}

export const getProducts = (): Promise<ProductResponse> => api.get(PRODUCT_URL);

// Within your API file



export const updateProduct = (id: number, productData: Product): Promise<UpdateProductPayload> => {
console.log("this is update product5",id)
const { id: productId, ...payloadWithoutId } = productData;
console.log("payloadWithoutId",payloadWithoutId)
  return api.put(`${PRODUCT_URL}/${id}`, payloadWithoutId); 
};