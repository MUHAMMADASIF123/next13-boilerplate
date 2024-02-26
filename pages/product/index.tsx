/* eslint-disable @typescript-eslint/no-unused-vars */
import { Store } from '@reduxjs/toolkit';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import { ProductContainer } from '@/features/product';
import { productActions } from '@/features/product/store';
import dispatchSSR from '@/store/dispatchSSR';
import { reduxWrapper } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log('func1')
     dispatch(productActions.fetchAll());
  },[dispatch])
  return (
    <Main meta={<Meta title="Next13 Boilerplate" description="Next13 Boilerplate" />}>
      <ProductContainer />
    </Main>
  );
};



export default ProductPage;


