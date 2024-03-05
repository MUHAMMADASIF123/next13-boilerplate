

import {Login} from '@/features/product/components/Login';

import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';

const LoginPage = () => {
  
  return (
  
    <Main meta={<Meta title="Next14 Boilerplate" description="Next14 Boilerplate" />}>
    <Login/>
        
      </Main>
    
  );
};



export default LoginPage;
