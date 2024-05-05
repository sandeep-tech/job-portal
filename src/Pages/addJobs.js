import React, { useRef, useState } from "react";
import AddJobForm from "../component/addJobForm";
import SimpleReactValidator from "simple-react-validator";

const initialFormData = {
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
};

const AddJobs = () => {
  const [, forceUpdate] = useState();

  const [formData, setFormData] = useState(initialFormData);

  const validator = useRef(new SimpleReactValidator());

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
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate(1);
      return;
    }
    try {
      const data = await fetch("http://localhost:8000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await data.json();
      if (data.status == 201) {
        alert("job Added Sucessfully");
        setFormData(initialFormData);
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
        formData={formData}
        handleJobSubmit={handleAddJob}
        validator={validator}
      />
    </>
  );
};

export default AddJobs;
