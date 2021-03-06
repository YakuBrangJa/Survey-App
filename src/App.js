import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Survey from "./Components/Survey/Survey";
// import Admin from "./Components/Admin/Admin";

const Admin = lazy(() => import("./Components/Admin/Admin"));

function App() {
  const [submitID, setSubmitID] = useState(
    Math.floor(Math.random() * Date.now())
  );

  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route path="survey" element={<Survey submitID={submitID} />} />
          <Route
            path="admin/*"
            element={
              <Suspense fallback={<h1>Loading ...</h1>}>
                <Admin />
              </Suspense>
            }
          />
          <Route path="/" element={<Navigate to="survey" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
