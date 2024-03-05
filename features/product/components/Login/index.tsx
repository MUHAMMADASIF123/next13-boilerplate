import Image from 'next/image';
import { useState } from 'react';

export const Login = () => {
  const[eyeIcon,setEyeIcon]=useState(false)
  const handleToggle = () => {
    setEyeIcon(prevState => !prevState);
  }

  console.log(eyeIcon,"eyeIcon")
  return (
    <>
  <section className="flex h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-2xl space-y-8">
      <div className='flex justify-center items-center'>
        <Image src="/icons/svg/ventel.svg" width={300} height={300} alt="logo" />
      </div>
      <div className=' shadow-sm space-y-px bg-white p-6 border border-2 border-red-800 rounded-[20px]'>
        <div>
          <h2 className="mt-6 text-center text-[36px] md:text-[48px] font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-center text-[20px] text-red-600">
            Please Login to Customer Portal
          </p>
        </div>
        <div>
        <form className="mt-8 space-y-6 relative" action="#" method="POST">
          <div className='flex justify-center flex-col space-y-4 w-full '>
          <label className='text-22px font-bold'>User ID:</label>
            <input type="text" placeholder='Enter User Id' className='w-full py-4 px-12 rounded border border-gray-400 '></input>
          </div>
          <div className='flex justify-center flex-col space-y-4 w-full'>
  <label className='text-22px font-bold'>Password:</label>
  <div className="relative">
    <input type={eyeIcon ? "text":"Password" } placeholder="Enter your passsword" className='w-full py-4 px-12 rounded border border-gray-400 pr-10'></input>
    <Image  src={eyeIcon ? "/icons/svg/closeeye.svg":"/icons/svg/eye.svg" } height={25} width={25} alt='toggle visibility' className='absolute inset-y-0 right-3 my-auto'
    
    onClick={handleToggle}
    ></Image>
  </div>
</div>
          <Image src="/icons/svg/profile.svg" height={25} width={25} alt='profile' className='absolute top-8 left-3'></Image>
          <Image src="/icons/svg/password.svg" height={25} width={25} alt='profile' className='absolute top-[9.5rem] left-3'></Image>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-md font-bold text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-bold text-red-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-white bg-custom-gradient hover:bg-custom-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 py-4"
            >
              LOGIN
            </button>
          </div>
      
        </form>
        </div>
      </div>
    </div>
  </section>
  </>
)
  };


