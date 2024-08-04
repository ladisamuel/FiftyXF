import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {
  return (
    <div>
      <div className="flex items-start justify-start h-[100vh] bg-gray-300">
        <div className="w-[17%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="ml-auto h-[100vh] w-[83%] ">
            <div className="fixed top-0 w-[83%] h-[10vh] ">
              <Topbar />
            </div>
            <div className="fixed bottom-0  w-[83%] h-[90vh]">
              <Dashboard />
            </div>
        </div>
        {/* show */}
      </div>
    </div>
  );
}
