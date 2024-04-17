import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import ReadMore from "./component/readMore";
import AddJobs from "./Pages/addJobs";
import EditForm from "./Pages/editForm";
import Home from "./Pages/home";
import Jobs from "./Pages/jobs";
import Store from "./store/store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addjob" element={<AddJobs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<ReadMore />} />
            <Route path="/jobs/edit/:id" element={<EditForm />} />
          </Routes>
        </Main>
      </Provider>
    </>
  );
}

export default App;
