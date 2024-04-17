import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <nav class="bg-black p-4">
          <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div class="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
              <Link to="/home">
                <p>React Jobs</p>
              </Link>
            </div>

            {/* Navigation links */}
            <div>
              <ul className="flex">
                <Link to="/">
                  <li class="text-white  px-4 py-2 hover:text-orange-600">
                    Home
                  </li>
                </Link>
                <Link to="/jobs">
                  <li class="text-white  px-4 py-2  hover:text-orange-600">
                    Jobs
                  </li>
                </Link>
                <Link to="/addjob">
                  <li class="text-white  px-4 py-2  hover:text-orange-600">
                    Add Jobs
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
