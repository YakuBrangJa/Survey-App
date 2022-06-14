import React from "react";
import { useSelector } from "react-redux";

// COMPONENT
import Loader1 from "../../Loaders/Loader1/Loader1";

// ICONS
import { BsPeople, BsPeopleFill } from "react-icons/bs";

function SummaryTable({
  surveyData,
  selectedData,
  selectedDataKeys,
  activeTab,
}) {
  const isLoading = useSelector((state) => state.uiState.isLoading);

  return (
    <div className="summary-dataList">
      <div className="dataList-total shadow">
        {isLoading ? (
          <Loader1 scale={50} borderWidth={3} borderColor={"#ffffff"} />
        ) : (
          <TotalCard surveyData={surveyData} />
        )}
      </div>
      <div className="list shadow">
        {isLoading ? (
          <Loader1 scale={70} borderWidth={4} />
        ) : (
          <List
            selectedDataKeys={selectedDataKeys}
            selectedData={selectedData}
          />
        )}
      </div>
    </div>
  );
}

export default SummaryTable;

export function TotalCard({ surveyData }) {
  return (
    <>
      <div className="top">
        <span>{surveyData.length}</span>
        <span>
          <BsPeopleFill className="icon" />
        </span>
      </div>
      <h3>Respondents</h3>
    </>
  );
}

export function List({ selectedDataKeys, selectedData }) {
  return (
    <ul>
      {selectedDataKeys.map((key, i) => (
        <li key={i}>
          <div>
            <span>{key}</span>
            <span>{selectedData.value[key]}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
