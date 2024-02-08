"use client"
function ApplyFilter(){
    return (
        <>
         <form>
                <div className="mt-10 sm:mt-20 flex flex-row gap-x-4 gap-y-4 items-end justify-center flex-wrap">
                  <div className=".space-y-2 flex flex-col items-center">
                    <label className="text-gray-600 mr-2">Category</label>
                    <select
                      id="category"
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                    >
                      <option value="all">All</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="design">Design</option>
                      <option value="writing">Writing</option>
                    </select>
                  </div>
                  <div
                    className="space-y-2 flex flex-col items-center
  "
                  >
                    <label className="text-gray-600 mr-2">Type</label>
                    <select
                      id="type"
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                    >
                      <option value="all">All</option>
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>
                  <div className=" space-y-2 flex flex-col items-center">
                    <label className="text-gray-600 mr-2">Pay</label>
                    <select
                      id="pay"
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                    >
                      <option value="all">All</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="space-y-2 flex flex-col items-center">
                    <label className="text-gray-600 mr-2">Location</label>
                    <input
                      id="location"
                      type="text"
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 w-40 text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Enter city or country"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col items-center">
                    <label className="text-gray-600 mr-2"></label>
                    <button
                      type="submit"
                      className=" py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </form>
        </>
    )
}
export default ApplyFilter;