import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import Login from '../login';
import DashboardPage from '@/features/product/components/dashboard';
import Layout from '@/components/LayoutTwo';
import ScanPage from '@/features/product/components/Scan';
const Scan = () => {
  return (
    <Layout>
      <ScanPage />
    </Layout>
  );
};
export default Scan;
