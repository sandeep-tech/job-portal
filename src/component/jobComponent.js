import React from "react";
import { Link } from "react-router-dom";

const JobComponent = ({ data }) => {
  return (
    <>
      <div className="w-3/12 p-2 m-2 bg-white rounded-md">
        <p className="text-sm">{data.type}</p>
        <p className="font-bold my-2">{data.title}</p>
        <p className="text-xs">{data.description}</p>
        <p className="text-sm my-3 text-purple-800">{data.salary} / Year</p>
        <div className="justify-between flex my-3">
          <p className="text-red-800 text-sm">{data.location}</p>
          <Link to={"/jobs/" + data.id}>
            <label className="text-sm bg-blue-500 rounded-lg p-2 text-white cursor-pointer">
              Read More
            </label>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobComponent;
