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
const firebaseDB =
  "https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey.json";

function Admin() {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.uiState);
  const [surveyData, setSurveyData] = useState({});
  const surveyDataArray = Object.values(surveyData);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { isLoading, error, sendRequest } = useHttps();

  const fetchHandler = useCallback(() => {
    sendRequest(
      {
        url: firebaseDB,
        method: "GET",
      },
      setSurveyData
    );
  }, []);

  useEffect(() => {
    if (!isUpdating) return;

    fetchHandler();

    dispatch(uiStateActions.setIsUpdating(false));
  }, [sendRequest, fetchHandler, isUpdating]);

  useEffect(() => {
    dispatch(uiStateActions.setIsLoading(isLoading));
  }, [isLoading]);

  return (
    <div className={`admin ${sidebarOpen && "collapse"}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
        <Routes>
          <Route
            path={"summary"}
            element={<Summary surveyData={surveyDataArray} />}
          />
          <Route
            path={"table"}
            element={<Table surveyData={surveyDataArray} />}
          />
          <Route
            path={"analyse"}
            element={<Analyse surveyData={surveyDataArray} />}
          />
          <Route path="/" element={<Navigate to="summary" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Admin;
