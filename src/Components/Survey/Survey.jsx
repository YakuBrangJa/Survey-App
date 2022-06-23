import React, { useState } from "react";
import "./survey.css";

import { useNavigate, Link } from "react-router-dom";

// ICONS

// COMPONENTS
import Header from "./Header";
import Form from "./Form/Form";
import Footer from "./Footer";
import SuccessMessage from "./SuccessMessage";

function Survey({ submitID }) {
  const navigate = useNavigate();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  console.log(loadingStatus);

  if (submitSuccess && !loadingStatus) return <SuccessMessage />;

  return (
    <div className="survey">
      <Header />
      <Form
        submitID={submitID}
        setSubmitSuccess={setSubmitSuccess}
        setLoadingStatus={setLoadingStatus}
      />

      {/* <div className="view-dashboard">
        <Link to={"/admin"}>View Dashboard</Link>
        <p>Appear only in development mode</p>
      </div> */}
      <Footer />
    </div>
  );
}

export default Survey;
