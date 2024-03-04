/* eslint-disable @typescript-eslint/no-unused-vars */
import { Store } from '@reduxjs/toolkit';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import { ProductContainer, useProductService } from '@/features/product';
import { productActions } from '@/features/product/store';
import dispatchSSR from '@/store/dispatchSSR';
import { reduxWrapper } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Hero, } from '@/features/product/components/Hero/Hero';
import { useEffect } from 'react';
import ProductPage from '../product';
import { Tour } from '@/features/product/components/Tour';
import { Card } from '@/features/product/components/Crad';
import {Meeting} from '@/features/product/components/Meeting';
const HomePage = () => {
  
  return (
    <Main meta={<Meta title="Next14 Boilerplate" description="Next14 Boilerplate" />}>

      <Hero />
      <Tour/>
      <Card/>
      <Meeting/>
    </Main>
  );
};

// export const getServerSideProps: GetServerSideProps = reduxWrapper.getServerSideProps(
//   (store: Store) =>
//     async (context: GetServerSidePropsContext): Promise<any> => {
//       await dispatchSSR(store, productActions.fetchAll());
//     },
// );

export default HomePage;
