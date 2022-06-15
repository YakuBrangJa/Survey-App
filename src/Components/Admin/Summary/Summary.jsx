import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useSelector } from "react-redux";

// COMPONENT
import NavBar from "../NavBar/NavBar";
import SummaryChart from "./SummaryChart";
import SummaryTable from "./SummaryTable";

function Summary({ surveyData, reducedSurveyData }) {
  const [activeTab, setActiveTab] = useState("Gender");
  const formContents = useSelector((state) => state.formCardContent);

  const selectedData = reducedSurveyData && reducedSurveyData[activeTab];
  const matchedFormContent =
    selectedData &&
    formContents.sectionA.content.find(
      (item) => item.index === selectedData.index
    );
  const tabSelectHandler = (index) => {
    setActiveTab(index);
  };

  const selectedDataKeys = selectedData ? Object.keys(selectedData.value) : [];

  selectedDataKeys.length !== 0 &&
    selectedDataKeys.sort(
      (a, b) =>
        matchedFormContent.options.indexOf(a) -
        matchedFormContent.options.indexOf(b)
    );

  return (
    <>
      <NavBar title={"Respondent Summary"}></NavBar>
      <section className="Summary">
        <div className="summary-container">
          <div className="summary-header shadow">
            {formContents.sectionA.content.map((item, i) => (
              <div
                key={i}
                className={`${activeTab === item.name && "active"}`}
                onClick={() => tabSelectHandler(item.name)}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="summary-viz">
            <SummaryChart
              selectedData={selectedData}
              selectedDataKeys={selectedDataKeys}
              activeTab={activeTab}
            />
            <SummaryTable
              surveyData={surveyData}
              selectedData={selectedData}
              selectedDataKeys={selectedDataKeys}
              activeTab={activeTab}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Summary;
