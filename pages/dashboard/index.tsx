import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import Login from '../login';
import DashboardPage from '@/features/product/components/dashboard';
import { ReactNode } from 'react';
import Layout from '@/components/LayoutTwo';

const Dashboard = () => {
  return (
    <Layout>
      <DashboardPage />
    </Layout>
  );
};
export default Dashboard;
