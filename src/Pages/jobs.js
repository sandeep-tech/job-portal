import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import JobComponent from "../component/jobComponent";
import { addjobsData_Cart } from "../store/jobSlice";

const Jobs = () => {
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
        <div className="flex flex-wrap justify-center">
          {formData_Api.map((data) => {
            return (
              <>
                <JobComponent data={data} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Jobs;
