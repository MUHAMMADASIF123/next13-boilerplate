// Adjust the import path according to your project structure
import { ReactNode } from 'react';
import Image from 'next/image';


const ReportsPage = () => {
  return (
    <section className="px-4 h-full ">
      <div className="text-[32px] text-black-800 font-extrabold">
        <h1 className="text-[32px] text-black font-extrabold">Reports</h1>
      </div>
  

      <div className="flex justify-center items-center mt-32">
        <div className="w-[700px] h-[350px] rounded-2xl bg-white shadow-2xl flex justify-center flex-col items-center">
          <div>
            <Image src="/icons/svg/report.svg" width={100} height={100} alt="logo" />
          </div>
          <div className="mt-8">
            <span className="text-[32px] flex justify-center items-center text-center px-32 font-extrabold text-red-800 ">
            Report Performance
            </span>
          </div>
          <div className="mt-8">
            <span className="text-[16px] flex justify-center items-center text-center px-32 font-bold ">
            Click here to view your performance.
            </span>
          </div>

          <div className='mt-8 w-full px-16'>
                  <button
                    type="submit"
                    className="group relative w-full text-[18px] flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-white bg-custom-gradient hover:bg-custom-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 py-4"
                  >
                 View Performance Report
                  </button>
                </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsPage;
