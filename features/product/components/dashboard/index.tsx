import { Sidebar } from '../Sidebar';
import { Header } from '../../../../components/Header/Header';
import { useRouter } from 'next/router'; // Adjust the import path according to your project structure
import { ReactNode } from 'react';
import Image from 'next/image';
import Layout from '../../../../components/LayoutTwo';
type LayoutProps = {
  children: ReactNode;
};

const DashboardPage = () => {
  return (
    <section className="px-4 h-full  ">
      <div className="text-[32px]  text-black-800 font-extrabold">
        <h1 className="">Dashboard</h1>
      </div>
      <div className="w-full h-[90px] bg-[#FFEFF0] rounded px-4 flex items-center mt-8">
        <p className="text-[28px] text-red-800 font-extrabold">Welcome Back to the new Vinlogx experience!</p>
        <span className="text-[28px] text-black-800  ml-4"> Andew Gerdel</span>
      </div>

      <div className="flex justify-center items-center mt-32 gap-y-32 ">
        <div className="w-[700px] h-[350px] rounded-lg bg-white shadow-2xl flex justify-center flex-col items-center px-4">
          <div>
            <Image src="/icons/svg/reportlogo.svg" width={100} height={100} alt="logo" />
          </div>
          <div className="mt-8">
            <span className="text-[20px] flex justify-center items-center text-center px-32 font-extrabold ">
              To view your Performance Report, select the Reports menu option on the left.
            </span>
          </div>
        </div>
      </div>
    </section>

  );
};

export default DashboardPage;
