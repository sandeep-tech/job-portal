import React, { useState } from "react";
import AddJobForm from "../component/addJobForm";

const AddJobs = () => {
  const [formData, setFormData] = useState({
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

  const handleJobChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      company: { ...prev.company, [name]: value },
    }));
  };

  const handleAddJob = async () => {
    try {
      const data = await fetch("http://localhost:8000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await data.json();
      if (data.status == 201) {
        alert("job Added Sucessfully");
        setFormData({
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
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {console.log(formData)}
      <AddJobForm
        handleJobChange={handleJobChange}
        handleCompanyChange={handleCompanyChange}
        formData={formData}
        handleJobSubmit={handleAddJob}
      />
    </>
  );
};

export default AddJobs;
