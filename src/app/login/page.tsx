"use-client"
function Login(){

    return(
        <>
      <div className="relative via-transparent dark:from-blue-950 dark:via-transparent h-screen flex items-center justify-center absolute  ">
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
        <form className="mx-auto max-w-lg rounded-lg border bg-white bg-opacity-40 py-6">
        <div className="text-center mt-4">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  New member?
                  <a className="text-blue-600 decoration-2 ml-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Sign Up here
                  </a>
                </p>
              </div>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
          <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
          <input name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Get started</button>

     
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
        </>
    )
}
export default Login;