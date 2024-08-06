import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {
  return (
    <div className="">
      <div className="lg:flex items-start justify-start  bg-gray-300">
        <div className="hidden lg:block lg:w-[17%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="ml-auto lg:h-[100vh] w-full lg:w-[83%] bg-grey-300 ">
            <div className="lg:fixed top-0 w-full lg:w-[83%] h-[10vh] ">
              <Topbar />
            </div>
            <div className="lg:fixed lg:top-[10%] border-red-500 w-full lg:w-[83%] md:h-[90vh]">
              <Dashboard />
            </div>
        </div>
        {/* show */}
      </div>
    </div>
  );
}
