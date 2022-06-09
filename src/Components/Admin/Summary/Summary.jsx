import React from "react";
import "./Summary.css";

// COMPONENT
import NavBar from "../NavBar/NavBar";

function Summary({ surveyData }) {
  console.log("surveyData: ", surveyData);

  return (
    <>
      <NavBar title={"Respondent Summary"}></NavBar>
      <section className="Summary">
        <div className="summary-container">
          <div className="summary-header"></div>
        </div>
      </section>
    </>
  );
}

export default Summary;
