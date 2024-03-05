import { Button } from '@/libs/ui/components/Button/Button';
import { Main } from 'next/document';
import Image from 'next/image';
import { dot } from 'node:test/reporters';
import { start } from 'repl';
import style from 'styled-jsx/style';

export const DashboardPage = () => {
  
  return (
  <section className='h-screen'>
    <div className='w-full'>

    
<div className='flex justify-center items-center'>
<div className='w-[40%]'>
  <h1 className='text-3xl font-bold text-gray-900'>SideBar</h1>
  
</div>
<div className='w-[60%]'>
  <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
</div>
</div>
</div>
  </section>
)
  };


