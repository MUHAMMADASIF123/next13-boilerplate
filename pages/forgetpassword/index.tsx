


import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import Login from '../login';
import { ForgetPasswordPage } from '@/features/product/components/ForgetPassword';

const ForgetPassword = () => {
  
  return (
  
    <Main meta={<Meta title="Next14 Boilerplate" description="Next14 Boilerplate" />}>
    <ForgetPasswordPage/>
        
      </Main>
    
   
  );
};



export default ForgetPassword;
