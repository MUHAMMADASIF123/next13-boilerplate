import Image from 'next/image';

export const ForgetPasswordPage = () => {
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-8">
          <div className="flex justify-center items-center">
            <Image src="/icons/svg/ventel.svg" width={300} height={300} alt="logo" />
          </div>
          <div className=" shadow-sm  bg-white p-6 border border-2 border-red-800 rounded-[20px]">
            <div>
              <h2 className="mt-6 text-center text-[36px] md:text-[48px] font-extrabold text-red-900">Forgot Password</h2>
              <p className="mt-2 text-center text-[20px] text-black-600">
                Enter your email address below. If there is a user account associated with that email, you will receive an email
                with further instructions.
              </p>
            </div>
            <div>
              <form className="mt-8 space-y-6 relative" action="#" method="POST">
                <div className="flex justify-center flex-col space-y-4 w-full ">
                  <label className="text-22px font-bold">Email Address:</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address:"
                    className="w-full py-4 px-12 rounded border border-gray-400 "
                  ></input>
                </div>

                <Image
                  src="/icons/svg/profile.svg"
                  height={25}
                  width={25}
                  alt="profile"
                  className="absolute top-8 left-3"
                ></Image>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-white bg-custom-gradient hover:bg-custom-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 py-4"
                  >
                    Reset Password
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-bold rounded-md text-black focus:outline-none  py-4"
                  >
                    BACK TO LOGIN
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
