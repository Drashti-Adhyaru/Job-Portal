import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type JobType = {
  userId: string;
  title: string;
  companyName: string;
  description: string;
  type: string;
  pay: number;
  category: string;
  address: string;
  email: string;
  phone: number;
};

function JobListing() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const type = searchParams.get('type') || 'all';
  const pay = searchParams.get('pay') || 'all';
  const location = searchParams.get('location') || '';
  






  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    async function getJobs() {
      try {
        let url = "/api/jobs/filter?";
        const queryParams = { category, type, pay, location };
        const filteredParams = Object.entries(queryParams).filter(([key, value]) => value !== "all");
        url += filteredParams.map(([key, value]) => `${key}=${value}`).join("&");

        const response = await axios.get(url);
        if (response.status === 200) {
          setJobs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    getJobs();
  }, [pathname, category, type, pay, location]);


  function truncateText(text: string, wordLimit: number) {
    const words = text.split(" ");
    let data = "";
    if (words.length > wordLimit) {
      data = words.slice(0, wordLimit).join(" ") + "...";

      const regex = /\*\*(.*?)\*\*/g;
      const lines = data.split("\n");
      let formattedTdata = "";

      for (const line of lines) {
        if (line.trim().startsWith("-")) {
          formattedTdata += `<br>${line.trim()}`;
        } else {
          formattedTdata += `${line.trim()}`;
        }
        formattedTdata += "\n";
      }
      const newdata = formattedTdata.trim();

      const formattedText = newdata.replace(
        regex,
        '<h2 style="color:gray; font-weight:800 ">$1</h2>'
      );

      return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />
      {jobs && jobs.map((job) => (
        <div className="text-black">
          <div className="grid mx-20">
            <div className="grid place-items-center">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 w-full sm:w-3/4 md:px-2 py-4 my-6">
                <div className="grid grid-cols-10 gap-3">
                  <div className="col-span-12 sm:px-5 sm:col-start-1 sm:col-end-13 px-3 sm:px-0">
                    <div className="mt-2">
                      <a
                        href="#"
                        className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
                      >
                        {job.title}
                      </a>
                      <div className="flex justify-between items-center hidden sm:block">
                        <span className="font-bold ml-0 text-red-800 text-md">
                          {job.companyName}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm md:text-md">
                        {truncateText(job.description, 50)}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 mt-4 my-auto">
                      <div className="col-span-12 lg:col-span-8">
                        <a
                          className="inline-block rounded-full text-white bg-red-400 hover:bg-red-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-3 md:px-4 py-1 opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                        >
                          {job.address}
                        </a>
                        <a
                          href="#"
                          className="inline-block rounded-full text-white bg-yellow-400 hover:bg-yellow-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                        >
                          {job.category}
                        </a>
                        <a
                          href="#"
                          className="inline-block rounded-full text-white bg-green-400 hover:bg-green-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                        >
                          {job.type}
                        </a>
                      </div>
                      <div className="col-none mt-2 mr-2 lg:block lg:col-start-9 lg:col-end-12">
                        <div className="lg:flex lg:flex-1 lg:justify-end">
                          <a
                            href={`/${job.userId}/jobdetails`}
                            className="text-lg font-semibold leading-6 text-pink-900"
                          >
                            View Job <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default JobListing;
