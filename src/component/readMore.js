import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReadMore = () => {
  const [jobData, setJobData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await data.json();

      setJobData(json);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const json = await data.json();
      if (data.status == 200) {
        alert("Deleted Successfully");
        navigate("/home");
      }

      setJobData(json);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <Link to="/home">
          <p className="ml-48 text-blue-500 p-3">Back to job Listing</p>
        </Link>
      </div>
      <div className="bg-blue-100">
        <div className="flex justify-center">
          <div className=" w-6/12 p-2 mr-4 my-7">
            <div className="bg-white p-3 py-7">
              <p className="text-sm">{jobData.type}</p>
              <p className="font-bold my-2 text-lg">{jobData.title}</p>
              <p className="text-xs text-red-900">{jobData.location}</p>
            </div>
            <div className="mt-2 bg-white p-3 py-7">
              <p className="text-xs font-bold">Job Description</p>
              <p className="text-xs my-3">{jobData.description}</p>
              <p className="text-xs font-bold">Salary</p>
              <p className="text-sm mt-2">{jobData.salary}</p>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg- bg-white ml-4 p-3 my-7">
              <p className="text-xs font-bold mb-5">Company Info</p>
              <p className="mb-1 font-bold">{jobData.company?.name}</p>
              <p className="text-xs">{jobData.company?.description}</p>
              <p className="mt-1 text-sm">Contact Email:</p>
              <p className="bg-gray-300 py-2 text-xs">
                {jobData.company?.contactEmail}
              </p>
              <p className="mt-1 text-sm">Contact Phone:</p>
              <p className="bg-gray-300 py-2 text-xs">
                {jobData.company?.contactPhone}
              </p>
            </div>
            <div className="bg- bg-white ml-4 p-3 my-7">
              <p className="font-bold">Manage Job</p>
              <div className="text-center my-3">
                <Link to={"/jobs/edit/" + jobData.id}>
                  <button className="bg-blue-400 w-full m-1 p-2 rounded-full">
                    Edit Job
                  </button>
                </Link>
              </div>
              <div className="text-center my-3">
                <button
                  onClick={handleDelete}
                  className="bg-red-400 w-full m-1 p-2 rounded-full"
                >
                  Delete job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
