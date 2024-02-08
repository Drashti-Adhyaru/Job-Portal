"use client"
import Applyjob from "@/components/ApplyJob";
import { Button } from "@nextui-org/button";

function JobDetail(){
    return (


<>


<div className="grid sm:mx-20  ">
        {/* <!-- Question Listing Item Card --> */}
        <div className="grid place-items-center" >
          <div className="bg-white rounded-lg  shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 sm:w-full  md:px-2 py-2 my-6 mt-24 ">
            <div className="px-14 pt-16 pb-16">
              {/* <!-- Meta Column --> */}
              <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">JOB TITLE HERE</h2>
    </div>    <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Employer Name here
              </a>
            </p>
            <p className="text-gray-600">Company name here</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 text-xs mt-6 mb-10">
        
        <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">job type here</a>
        <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">job category here</a>

      </div>

      <div className=" text-lg  font-bold leading-8 text-black-800">
        Job Description
      </div>
      <p className="mt-2 text-sm leading-8 text-gray-600">Learn how to grow your business with our expertarn how to grow your business with our expert advice.arn how to grow your business with our expert advice.arn how to grow your business with our exper business with our expertarn how to grow your business with our expert advice.arn how to grow your business with our expert advice.arn how to grow your business with our expert advice. advice.</p>

      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Salary</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Salary here</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Address here</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+1 4758 483 389</dd>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-2">
    <Button type="button" href="/user/dashboard" className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Cancel</Button>
    <div>
    <Applyjob/>
    </div>
  </div>
             
            </div>
          </div>
          </div>
      </div>
        </>
    )
}
export default JobDetail;