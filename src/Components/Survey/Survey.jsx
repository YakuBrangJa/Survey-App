import React, { useState } from "react";
import "./survey.css";

// ICONS

// COMPONENTS
import Header from "./Header";
import Form from "./Form/Form";
import Footer from "./Footer";
import SuccessMessage from "./SuccessMessage";

function Survey({ submitID }) {
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
      <Footer />
    </div>
  );
}

export default Survey;
