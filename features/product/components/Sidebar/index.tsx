import Link from 'next/link';
import Image from 'next/image';
const sideBarData = [
  {
    icon: "/icons/svg/dashboard.svg",
    title: "Dashboard",
   
  },
  {
    icon: "/icons/svg/reportlogo.svg",
    title: "Reports",
    
  },
  {
    icon: "/icons/svg/scan.svg",
    title: "Scan",
    
  }
];
export const Sidebar = () => {
  return (
    <div className="h-full w-[200px] md:w-[250px] bg-white-800 text-black shadow-lg ">
      <div className="flex justify-center items-center">
        <Image src="/icons/svg/ventel.svg" width={150} height={150} alt="logo" />
      </div>
      <div className='mt-8 text-[20px] w-[100px] md:w-[250px] items-center  '>
        {sideBarData.map((item, index) => (
          <div key={index} className="md:flex px-2 py-2 md:items-center hover:bg-[#FFEFF0] flex justify-center md:justify-start">
            <Image src={item.icon} width={22} height={22} alt="icon" className="mr-4" /> 
            <Link href={`/${item.title.toLowerCase()}`} className='md:block hidden'>
               {item.title} 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
