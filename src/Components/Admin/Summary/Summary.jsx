import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useSelector } from "react-redux";

// COMPONENT
import NavBar from "../NavBar/NavBar";
import SummaryChart from "./SummaryChart";
import SummaryTable from "./SummaryTable";

function Summary({ surveyData }) {
  const [activeTab, setActiveTab] = useState("Gender");
  const formContents = useSelector((state) => state.formCardContent);

  const [respondentData, setRespondentData] = useState({});

  useEffect(() => {
    const reducedData = surveyData.reduce((acc, value) => {
      value.formData.forEach((item, i) => {
        if (!acc[item.name]) acc[item.name] = {};
        if (!acc[item.name].index) acc[item.name].index = i + 1;
        if (!acc[item.name].value) acc[item.name].value = {};
        if (!acc[item.name].value[item.value])
          acc[item.name].value[item.value] = 0;
        acc = {
          ...acc,
          [item.name]: {
            ...acc[item.name],
            value: {
              ...acc[item.name].value,
              [item.value]: (acc[item.name].value[item.value] || 0) + 1,
            },
          },
        };
      });
      return acc;
    }, {});

    setRespondentData(reducedData);
  }, [surveyData]);

  const selectedData = respondentData && respondentData[activeTab];
  const matchedFormContent =
    selectedData &&
    formContents.sectionA.content
      .filter((item) => item.index === selectedData.index)
      .pop();

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
