import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import JobComponent from "../component/jobComponent";
import Pagination from "../component/pagination";
import { addjobsData_Cart } from "../store/jobSlice";

const Jobs = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState([]); // For Job Component//
  const [pageNo, setPageNo] = useState(1);
  const [displayPerPageValue, setDisplayPerPageValue] = useState(6);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPaginationData(1);
  }, [displayPerPageValue]);

  const fetchPaginationData = async (page) => {
    setPageNo(page);
    try {
      const data = await fetch(
        "http://localhost:8000/jobs?_page=" +
          page +
          "&_per_page=" +
          displayPerPageValue,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await data.json();
      setTotalPages(json.pages);
      // dispatch(addjobsData_Cart(json));
      setFormData(json);
    } catch (error) {
      alert(error);
    }
  };

  const handleNextPagination = () => {
    fetchPaginationData(pageNo + 1);
  };

  const handlePreviousPagination = () => {
    fetchPaginationData(pageNo - 1);
  };

  const displayPerPage = (e) => {
    const { value } = e.target;
    setDisplayPerPageValue(value);
  };

  return (
    <>
      <div className="bg-slate-200 ">
        <div className="flex flex-wrap justify-center">
          {formData.data?.map((data) => {
            return (
              <>
                <JobComponent data={data} />
              </>
            );
          })}
        </div>
      </div>
      {console.log(displayPerPageValue)}
      <Pagination
        totalPages={totalPages}
        handlePagination={fetchPaginationData}
        handleNextPagination={handleNextPagination}
        handlePreviousPagination={handlePreviousPagination}
        pageNo={pageNo}
        displayPerPage={displayPerPage}
        displayPerPageValue={displayPerPageValue}
      />
    </>
  );
};

export default Jobs;
