import React, { useEffect, useState } from "react";
import "./admin.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import NavBar from "./NavBar/NavBar";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import Analyse from "./Analyse/Analyse";
import Summary from "./Summary/Summary";

// HOOKS
import useHttps from "../../hooks/useHttps";

// REDUCERS
import { uiStateActions } from "../../store/ui-state";
import { useCallback } from "react";

// GLOBAL VARS

const testUrl =
  "https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey.json";
const url =
  "https://survey-app-b95ef-default-rtdb.firebaseio.com/thesis-survey.json";

function Admin() {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.uiState);
  const [surveyData, setSurveyData] = useState({});
  // const surveyData = {};
  const surveyDataArray =
    useCallback(Object.values(surveyData), [surveyData]) || [];

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [test, setTest] = useState(false);

  const { isLoading, error, sendRequest } = useHttps();

  const fetchHandler = useCallback(() => {
    sendRequest(
      {
        url: url,
        method: "GET",
      },
      setSurveyData
    );
  }, [sendRequest]);

  useEffect(() => {
    if (!isUpdating) return;

    fetchHandler();

    dispatch(uiStateActions.setIsUpdating(false));
  }, [fetchHandler, isUpdating]);

  useEffect(() => {
    dispatch(uiStateActions.setIsLoading(isLoading));
  }, [isLoading]);

  const [reducedSurveyData, setReducedSurveyData] = useState({});

  console.log(surveyData);
  // console.log(surveyDataArray);

  useEffect(() => {
    const reducedData = surveyDataArray.reduce((acc, value) => {
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

    setReducedSurveyData(reducedData);
  }, [surveyDataArray]);

  return (
    <div className={`admin ${sidebarOpen && "collapse"}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
        <Routes>
          <Route
            path={"summary"}
            element={
              <Summary
                surveyData={surveyDataArray}
                reducedSurveyData={reducedSurveyData}
              />
            }
          />
          <Route
            path={"table"}
            element={<Table surveyData={surveyDataArray} />}
          />
          <Route
            path={"analyse"}
            element={
              <Analyse
                surveyData={surveyDataArray}
                reducedSurveyData={reducedSurveyData}
              />
            }
          />
          <Route path="/" element={<Navigate to="summary" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Admin;
