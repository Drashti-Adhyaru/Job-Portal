"use client"


import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Image from 'next/image';


interface idProps {
   
  _id: string;

}


const ViewJob: React.FC<idProps> = ({_id }) => {
  
  type JobType = {
    _id: string,
    userId: string,
    title: string,
    companyName: string,
    description: string,
    type: string,
    pay: number,
    email:string,
    phone:number,
    category: string,
    address: string
  }
  const [job, setJob] = React.useState<JobType>();
  const router = usePathname();
  let [uerid,setName] = React.useState("");
  const id = _id ;
  //console.log(id)
  const description = job?.description ? job.description+"" : '';
  function formatDataForDisplay(data :string) {

    
    const regex = /\*\*(.*?)\*\*/g;
    const lines = data.split('\n');
    let formattedTdata = '';
  
    for (const line of lines) {
      if (line.trim().startsWith('-')) {
        formattedTdata += `<br>${line.trim()}`;
      } else {
        formattedTdata += `${line.trim()}`;
      }
      formattedTdata += '\n';
    }
     const newdata = formattedTdata.trim()
  
  // Replace ** symbols with <h2> and </h2> tags
  const formattedText = newdata.replace(regex, '<h2 style="color:gray; font-weight:800  ; margin-bottom:.5rem; margin-top:1rem">$1</h2>');

//const modifiedString = data.replace(/\*\*/g, '<h2  style="color:gray; font-weight:800 ; margin-bottom:.5rem">Job Title:</h2>');
    console.log(formattedText);
    return   <div dangerouslySetInnerHTML={{ __html: formattedText }} />

  }
  
  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const response = await axios.get(`/api/jobs/jobdetails`, {
          params: {
            id: id,
          },
        });
        const user = await axios.get("/api/users/me");
        uerid = user.data.data._id
        setName(uerid);
        console.log(response.data.data[0]);
        setJob(response.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest(); // Call the function once when component mounts
  }, []); 


  const jobId = job?._id;
    return (

  
<>

{job &&
<div className="grid sm:max-h-80 ">
        {/* <!-- Question Listing Item Card --> */}
        <div className="grid place-items-center" >
          <div className="">
            <div className="px-2 pt-16 pb-16 h-[350px]  overflow-y-scroll">
              {/* <!-- Meta Column --> */}
              <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{job?.title}</h2>
    </div>    <div className="relative mt-8 flex items-center gap-x-4">
          {/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"/> */}
          <Image
  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  alt=""
  className="h-10 w-10 rounded-full bg-gray-50"
  width={40} // Set the desired width
  height={40} // Set the desired height
/>

          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Employer Name here
              </a>
            </p>
            <p className="text-gray-600">{job?.companyName}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 text-xs mt-6 mb-10">
        
        <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{job?.type}</a>
        <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{job?.category}</a>

      </div>

      <div className=" text-lg  font-bold leading-8 text-black-800">
        Job Description
      </div><div>{formatDataForDisplay(description)}</div>

      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Salary</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job?.pay}</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job?.address}</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job?.email}</dd>
      </div>
      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job?.phone}</dd>
      </div>            
            </div>
          </div>
          </div>
      </div>
}
        </>
    )
}
export default ViewJob;