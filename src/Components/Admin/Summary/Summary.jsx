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

  const tabSelectHandler = (index) => {
    setActiveTab(index);
  };

  const [respondentData, setRespondentData] = useState();

  useEffect(() => {
    const reducedData = surveyData.reduce((acc, value) => {
      // let acc = acc;

      value.formData.forEach((item, i) => {
        if (!acc[item.name]) acc[item.name] = {};
        if (!acc[item.name][item.value]) acc[item.name][item.value] = 0;
        acc = {
          ...acc,
          [item.name]: {
            ...acc[item.name],
            [item.value]: (acc[item.name][item.value] || 0) + 1,
          },
        };
      });

      return acc;
    }, {});

    setRespondentData(reducedData);
  }, [surveyData]);

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
              respondentData={respondentData}
              activeTab={activeTab}
            />
            <SummaryTable />
          </div>
        </div>
      </section>
    </>
  );
}

export default Summary;
