import Image from 'next/image';
import { useState } from 'react';

export const ResetPassword = () => {
  return (
    <>
      <section className="flex h-screen items-center  justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 mb-[40px]">
        <div className="w-full max-w-2xl space-y-8  ">
          <div className="flex justify-center items-center">
            <Image src="/icons/svg/ventel.svg" width={300} height={300} alt="logo" />
          </div>
          <div className=" shadow-sm  bg-white p-6 border border-2 border-red-800 rounded-[20px]">
            <div>
              <h2 className="mt-6 text-center text-[36px] md:text-[48px] font-extrabold text-red-900">Set New Password</h2>
              <p className="mt-2 text-center text-[20px] text-black-600">
                We sent you an email with a six-digit security code. Please enter that code below.
              </p>
            </div>
            <div>
              <form className="mt-8 space-y-6 relative" action="#" method="POST">
                <div className="flex justify-center flex-col space-y-4 w-full ">
                  <label className="text-22px font-bold">Security Code:</label>
                  <input
                    type="password"
                    placeholder="Enter Six digit code"
                    className="w-full py-4 px-12 rounded border border-gray-400 "
                  ></input>
                </div>
                <div className="flex justify-center flex-col space-y-4 w-full">
                  <label className="text-22px font-bold">New Password:</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your passsword"
                      className="w-full py-4 px-12 rounded border border-gray-400 pr-10"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center flex-col space-y-4 w-full">
                  <label className="text-22px font-bold">Confirm Password:</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full py-4 px-12 rounded border border-gray-400 pr-10"
                    ></input>
                  </div>
                </div>
                <Image src="/icons/svg/code.svg" height={30} width={30} alt="profile" className="absolute top-[1.8rem] left-3"></Image>
                <Image
                  src="/icons/svg/password.svg"
                  height={25}
                  width={25}
                  alt="profile"
                  className="absolute top-[9.5rem] left-3"
                ></Image>
                <Image
                  src="/icons/svg/password.svg"
                  height={25}
                  width={25}
                  alt="profile"
                  className="absolute top-[17rem] left-3"
                ></Image>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-white bg-custom-gradient hover:bg-custom-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 py-4"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
