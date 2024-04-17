import React from "react";
import Banner from "../component/banner";
import Browse_Job from "../component/browse_Job";
import ForDeveopers_forEmployers from "../component/forDeveopers_forEmployers";

const Home = () => {
  return (
    <>
      <Banner />
      <ForDeveopers_forEmployers />
      <Browse_Job />
    </>
  );
};

export default Home;
