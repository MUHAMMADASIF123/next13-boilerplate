import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import Login from '../login';
import { ForgetPasswordPage } from '@/features/product/components/ForgetPassword';
import Layout from '@/components/LayoutTwo';

const ForgetPassword = () => {
  return (
    <Layout>
      <ForgetPasswordPage />
    </Layout>
  );
};

export default ForgetPassword;
