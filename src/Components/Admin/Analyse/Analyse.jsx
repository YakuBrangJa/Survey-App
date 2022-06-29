import React from "react";
import "./Analyse.css";

// COMPONENTS
import NavBar from "../NavBar/NavBar";

function Analyse({ surveyData, reducedSurveyData }) {
  // console.log("surveyData: ", surveyData);
  console.log("reducedSurveyData: ", reducedSurveyData);
  return (
    <>
      <NavBar title={"Analyse"}></NavBar>
      <section className="Analyse"></section>
    </>
  );
}

export default Analyse;
