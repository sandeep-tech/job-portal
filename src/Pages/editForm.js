import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddJobForm from "../component/addJobForm";
import { addjobsData_Cart } from "../store/jobSlice";

const EditForm = () => {
  const [updateFormData, setUpdateFormData] = useState({
    title: "",
    type: "",
    description: "",
    salary: "",
    location: "",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jobCartData = useSelector((state) => state.job);

  useEffect(() => {
    if (jobCartData.length == 0) {
      fetchData();
    } else {
      //   const jobData = jobCartData.find((job) => job.id == id);
      setUpdateFormData(jobCartData.find((job) => job.id == id));
    }
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(updateFormData),
      });
      const json = await data.json();
      setUpdateFormData(json);
    } catch (error) {
      alert(error);
    }
  };

  const handleJobChange = (e) => {
    const { value, name } = e.target;
    setUpdateFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (e) => {
    const { value, name } = e.target;
    setUpdateFormData((prev) => ({
      ...prev,
      company: { ...prev.company, [name]: value },
    }));
  };

  const handleJobUpdate = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateFormData),
      });
      const json = await data.json();
      const filterData = jobCartData.filter((job) => job.id != id);
      dispatch(addjobsData_Cart([...filterData, json]));
      if (data.status == 200) {
        alert("job Updated Sucessfully");
        navigate("/jobs/" + id);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <AddJobForm
        handleJobChange={handleJobChange}
        handleCompanyChange={handleCompanyChange}
        formData={updateFormData}
        handleJobSubmit={handleJobUpdate}
      />
    </>
  );
};

export default EditForm;
