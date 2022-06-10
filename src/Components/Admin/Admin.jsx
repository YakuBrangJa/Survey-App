import React, { useEffect, useState } from "react";
import "./admin.css";
import { Routes, Route, Navigate } from "react-router-dom";

// COMPONENTS
import NavBar from "./NavBar/NavBar";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import Analyse from "./Analyse/Analyse";
import Summary from "./Summary/Summary";

// HOOKS
import useHttps from "../../hooks/useHttps";

function Admin() {
  const [surveyData, setSurveyData] = useState({});

  const { isLoading, error, sendRequest } = useHttps();

  const firebaseDB =
    "https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey.json";

  useEffect(() => {
    sendRequest(
      {
        url: firebaseDB,
        method: "GET",
      },
      setSurveyData
    );
  }, [sendRequest]);

  const surveyDataArray = Object.values(surveyData);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="admin">
      <Sidebar />
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
