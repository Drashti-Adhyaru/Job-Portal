"use client"
function Register(){

    return(
        <>
      {/* <!-- Hero --> */} 
<div className="relative via-transparent dark:from-blue-950 dark:via-transparent h-screen flex items-center justify-center absolute ">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Grid --> */} 
    <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Preline: A vision for 2024
        </p>

        {/* <!-- Title --> */} 
        <div className="mt-4 md:mb-12 max-w-2xl">
          <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
            Fully customizable rules to match your unique needs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
          </p>
        </div>
        {/* <!-- End Title --> */}

      {/* <!-- Blockquote --> */} 
      
        {/* <!-- End Blockquote --> */} 
      </div>
      {/* <!-- End Col --> */} 

      <div>
        {/* <!-- Form --> */} 
        <form>
          <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
            {/* <!-- Card --> */} 
            <div className="p-4 sm:p-7 flex flex-col rounded-2xl shadow-lg dark:bg-slate-900 bg-white bg-opacity-40 py-4">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Already have an account? 
                  <a className="text-blue-600 decoration-2 ml-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-5">
              


              {/* <!-- Grid --> */}
                <div className="grid grid-cols-2 gap-4">
                {/* <!-- Input Group --> */}
                  <div>
                  {/* <!-- Floating Input --> */}
                    <div className="relative">
                    <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First Name</label>
          <input name="First Name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                  {/* <!-- End Floating Input --> */}
                  </div>
                {/* <!-- End Input Group --> */}

                {/* <!-- Input Group --> */}
                  <div>
                  {/* <!-- Floating Input --> */}
                    <div className="relative">
                    <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Name</label>
          <input name="text" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                  {/* <!-- End Floating Input --> */}
                  </div>
                {/* <!-- End Input Group --> */}

                {/* <!-- Input Group --> */}
                  <div className="col-span-full">
                  {/* <!-- Floating Input --> */}
                    <div className="relative">
                    <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
          <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                  {/* <!-- End Floating Input --> */}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 col-span-full">
  <label  className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <input type="radio" name="userole" className=" shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form"/>
    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Job Seeker</span>
  </label>

  <label  className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <input type="radio" name="userole" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" />
    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Employer</span>
  </label>
</div>
                {/* <!-- End Input Group --> */}

                {/* <!-- Input Group --> */}
                  <div>
                  {/* <!-- Floating Input --> */}
                  
                  {/* <!-- End Floating Input --> */}
                  </div>
                {/* <!-- End Input Group --> */}

                {/* <!-- Input Group --> */}
                  <div className="relative col-span-full">
                  {/* <!-- Floating Input --> */}
                    <div className="relative">
                    <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">New password</label>
                      <input type="password" id="hs-hero-signup-form-floating-input-new-password"className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="********"/>
                     
                    </div>
                  {/* <!-- End Floating Input --> */}

                   
                  </div>
                {/* <!-- End Input Group --> */}

                {/* <!-- Input Group --> */}
                  <div className="col-span-full">
                  {/* <!-- Floating Input --> */}
                    <div className="relative">
                    <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Confirm password</label>
                      <input type="password" id="hs-hero-signup-form-floating-input-new-password"className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="********"/>
                     
                    </div>
                  {/* <!-- End Floating Input --> */}
                  </div>
             
                {/* <!-- End Input Group --> */}
                </div>
              {/* <!-- End Grid --> */}

          

                <div className="mt-5">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Get started</button>
                </div>
              </div>
            </div>
          {/* <!-- End Card --> */}
          </div>
        </form>
      {/* <!-- End Form --> */}
      </div>
    {/* <!-- End Col --> */}
    </div>
  {/* <!-- End Grid --> */}


  </div>
  {/* <!-- End Clients Section --> */} 
</div>
{/* <!-- End Hero --> */} 
        </>
    )
}
export default Register;