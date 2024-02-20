import axios from "axios";
import React, { useEffect, useState } from "react";



type JobType = {
  _id: string,
  userId: string,
  title: string,
  companyName: string,
  description: string,
  type: string,
  pay: number,
  category: string,
  address: string
}

  




 async function Jobss() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    async function getJobs() {
      try {
        const response = await axios.get("/api/jobs/");
        if (response.status === 200) {
          console.log(response.data); // Make sure the data structure is as expected
          setJobs(response.data.data); // Set the fetched data to the state
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    getJobs();
  }, []);




  // const [jobs, setJobs] = useState([]);

  // const   getJobs = async() => {



    // const dynamicData = await fetch(`https://...`, { cache: 'no-store' })
    // setJobs(dynamicData);

    // try {
    //   const response = await axios.get("/api/jobs");
    //   if(response.status==200){
    //     console.log(response.data.data);
    //     setJobs(response.data.data.category); // Assuming the data you need is in the response's data property
    //     console.log(jobs);
    //   }
      
    // } catch (error) {
    //   console.error("Error fetching jobs:", error);
    // }
  // };
  // useEffect(() => {
  //   getJobs();
  // }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />
{jobs.map((job) => (
        <div className="text-black" >
          {job.description}
        </div>
      ))}





      {/* {jobs.map((job) => {
            <div className="text-black">
              {job.category}
            </div>
   

      })} */}




    </>
  )
}

export default Jobss;