import React from "react";
import "./survey.css";

import Header from "./Header";
import Form from "./Form/Form";
import Footer from "./Footer";

function Survey({ submitID }) {
  return (
    <div className="survey">
      <Header />
      <Form submitID={submitID} />
      <Footer />
    </div>
  );
}

export default Survey;
