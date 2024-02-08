"use client";
function Jobrequests() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />

      <div className="grid mx-20">
        {/* <!-- Question Listing Item Card --> */}
        <div className="grid place-items-center">
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6   w-full sm:w-3/4 md:px-2 py-4 my-6">
            <div className="grid grid-cols-10 gap-3">
              {/* <!-- Meta Column --> */}

              {/* <!-- Summary Column --> */}
              <div className="col-span-12 sm:px-5  sm:col-start-1 sm:col-end-13 px-3 sm:px-0">
                <div className="mt-2">
                <div className="flex justify-between items-center hidden sm:block">
                    <span className="font-bold  text-gray-600 text-md">
                     George devid
                    </span>

                  
                  </div>
                  <a
                    
                    className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
                  >
                   Job Title
                  </a>

                

                  <p className="mt-2 text-gray-600 text-sm md:text-md">
                    Job Experience here....
                  </p>
                </div>

                {/* <!-- Question Labels --> */}
                <div className="grid grid-cols-2 mt-4 my-auto">
                  {/* <!-- Categories  --> */}
                  <div className="col-span-12 lg:col-span-8">
                    <a
                      className="inline-block rounded-full text-white 
                              bg-red-400 hover:bg-red-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-3 md:px-4 py-1 
                              opacity-90 hover:opacity-100    bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        className="h-4 w-4 text-white float-left mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Location Here
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-full text-white 
                              bg-yellow-400 hover:bg-yellow-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                              opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        width="20px"
                        className="float-left mr-2"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#CCCCCC"
                          stroke-width="4.8"
                        >
                          {" "}
                          <path
                            d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      Heighest here
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-full text-white 
                              bg-green-400 hover:bg-green-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                              opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        className="h-4 w-4 text-white  float-left mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Age
                    </a>
                  </div>

                  {/* <!-- User --> */}
                  <div className="col-none mt-2 mr-2 lg:block lg:col-start-9 lg:col-end-12">
                    <div className=" lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="2/resume"
                        className="text-md font-semibold leading-6 text-[#471c788a]"
                      >
                        View Resume <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid mx-20">
        {/* <!-- Question Listing Item Card --> */}
        <div className="grid place-items-center">
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6   w-full sm:w-3/4 md:px-2 py-4 my-6">
            <div className="grid grid-cols-10 gap-3">
              {/* <!-- Meta Column --> */}

              {/* <!-- Summary Column --> */}
              <div className="col-span-12 sm:px-5  sm:col-start-1 sm:col-end-13 px-3 sm:px-0">
                <div className="mt-2">
                <div className="flex justify-between items-center hidden sm:block">
                    <span className="font-bold  text-gray-600 text-md">
                     Joseph devid
                    </span>

                  
                  </div>
                  <a
                    
                    className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
                  >
                   Job Title
                  </a>

                

                  <p className="mt-2 text-gray-600 text-sm md:text-md">
                    Job Experience here....
                  </p>
                </div>

                {/* <!-- Question Labels --> */}
                <div className="grid grid-cols-2 mt-4 my-auto">
                  {/* <!-- Categories  --> */}
                  <div className="col-span-12 lg:col-span-8">
                    <a
                      className="inline-block rounded-full text-white 
                              bg-red-400 hover:bg-red-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-3 md:px-4 py-1 
                              opacity-90 hover:opacity-100    bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        className="h-4 w-4 text-white float-left mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Location Here
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-full text-white 
                              bg-yellow-400 hover:bg-yellow-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                              opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        width="20px"
                        className="float-left mr-2"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#CCCCCC"
                          stroke-width="4.8"
                        >
                          {" "}
                          <path
                            d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      Heighest here
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-full text-white 
                              bg-green-400 hover:bg-green-500 duration-300 
                              text-xs font-bold 
                              mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                              opacity-90 hover:opacity-100 bg-[#726cf88a] bg-gradient-to-br from-[#9996d6bf] to-[#e975a8] pb-4 pt-4 rounded-lg"
                    >
                      <svg
                        className="h-4 w-4 text-white  float-left mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Age
                    </a>
                  </div>

                  {/* <!-- User --> */}
                  <div className="col-none mt-2 mr-2 lg:block lg:col-start-9 lg:col-end-12">
                    <div className=" lg:flex lg:flex-1 lg:justify-end">
                      <a
                        href="/resumedetail"
                        className="text-md font-semibold leading-6 text-[#471c788a]"
                      >
                        View Resume <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobrequests;
