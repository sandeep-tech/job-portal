import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addjobsData_Cart } from "../store/jobSlice";
import JobComponent from "./jobComponent";

const Browse_Job = () => {
  const [formData_Api, setFormData_Api] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await data.json();
      dispatch(addjobsData_Cart(json));
      setFormData_Api(json);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="bg-slate-200 ">
        <p className="font-bold text-2xl p-4 text-center">Browse Jobs</p>
        <div className="flex flex-wrap justify-center">
          {formData_Api.slice(0, 3).map((data) => {
            return (
              <>
                <JobComponent data={data} />
              </>
            );
          })}
        </div>
        <div className="text-center">
          <Link to="/jobs">
            <button className="bg-green-500 font-bold text-white text-xl p-2 px-10 rounded-full m-4">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Browse_Job;
