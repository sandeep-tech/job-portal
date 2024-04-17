import React from "react";
import { Link } from "react-router-dom";

const ForDeveopers_forEmployers = () => {
  return (
    <>
      <div class="flex my-0 py-12 justify-center ">
        <div className="bg-gray-200 mx-3 w-4/12 p-4 rounded-md">
          <h2 class="font-bold text-xl">For Developers</h2>
          <p class="text-sm">
            Browse our React jobs and start your career today
          </p>
          <Link to="/jobs">
            <button className="p-2 my-2 rounded-lg bg-black text-white">
              browse Jobs
            </button>
          </Link>
        </div>
        <div className="bg-blue-100 mx-3 w-4/12 p-4 rounded-md">
          <h2 class="font-bold text-xl">For employers</h2>
          <p class="text-sm">
            List your job to find the perfect developers for the role
          </p>
          <Link to="/addjob">
            <button className="p-2 my-2 rounded-lg bg-blue-300">Add Job</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForDeveopers_forEmployers;
