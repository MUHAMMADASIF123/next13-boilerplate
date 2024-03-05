


import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import Login from '../login';
import { DashboardPage } from '@/features/product/components/dashboard';


const Dashboard = () => {
  
  return (
  
    <Main meta={<Meta title="Next14 Boilerplate" description="Next14 Boilerplate" />}>
    <DashboardPage/>
        
      </Main>
    
   
  );
};



export default Dashboard;
