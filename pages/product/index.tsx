/* eslint-disable @typescript-eslint/no-unused-vars */
import { Store } from '@reduxjs/toolkit';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import { ProductContainer } from '@/features/product';
import { productActions } from '@/features/product/store';
import dispatchSSR from '@/store/dispatchSSR';
import { reduxWrapper } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ProductPage = () => {
  const dispatch = useDispatch();
  // If you store the products in the Redux state, use useSelector to access them
  // const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(productActions.fetchAll());
  }, [dispatch]);
  return (
    <Main meta={<Meta title="Next14 Boilerplate" description="Next14 Boilerplate" />}>
      <ProductContainer />
    </Main>
  );
};

// export const getServerSideProps: GetServerSideProps = reduxWrapper.getServerSideProps(
//   (store: Store) =>
//     async (context: GetServerSidePropsContext): Promise<any> => {
//       await dispatchSSR(store, productActions.fetchAll());
//     },
// );

export default ProductPage;
