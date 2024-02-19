"use client"
import Addjob from "@/components/AddJob";
import ApplyFilter from "@/components/ApplyFilter";
import Applyjob from "@/components/ApplyJob";
import JobListing from "@/components/JobListing";
import Jobs from "@/components/Jobs";
import axios from "axios";
import React, { useEffect } from "react";

 function  EmployerDashboard() {
  type UserType = {
    firstName : string,
    lastName : string,
    _id : string,
    role:string,
    email:string
  }

 let name = ""

  //const [userDetails, setUsers] = React.useState<UserType>();

  async function getUser(){
    const user = await axios.get("/api/users/me")
    name = user.data.data.firstName
  } 
  useEffect(() => 
  {
  getUser();
  }
  )

    return (
      <>
     
        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden ">
          <div className="max-w-[85rem] mx-auto sm:mt-2 mt-20 px-4 sm:px-6  lg:px-8 py-10 sm:py-24">
            <div className="text-center">
             
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
             HI {name}
              </h1>
              <div className="mt-10">
    <Addjob/>
    </div>
        
            </div>
          </div>
        </div>
        {/* <!-- End Hero --> */}
 
    <div></div>
        {/* <!-- Unicons --> */}
     
  <Jobs/>

      </>
    );
  }
  export default EmployerDashboard;
  