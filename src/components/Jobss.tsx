import axios from "axios";
import React, { useEffect, useState } from "react";

async function Jobss() {


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

  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    async function getJobs() {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data.data); // Assuming the data you need is in the response's data property
        console.log(response.data.data);
        console.log(jobs.length);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    getJobs();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />


      {jobs.map((job) => {
            <div className="text-black">
              hello
            </div>
   

      })}




    </>
  )
}

export default Jobss;