import React, { useEffect, useState } from "react";
import "./admin.css";

import useHttps from "../../hooks/useHttps";

function Admin() {
  const [surveyData, setSurveyData] = useState();

  const { isLoading, error, sendRequest } = useHttps();

  useEffect(() => {
    sendRequest(
      {
        url: `https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey.json`,
        method: "GET",
      },
      setSurveyData
    );
  }, [sendRequest]);

  console.log(surveyData);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="admin">
      <header>
        <h3>Survey Data</h3>
      </header>
      <table className="data-table">
        <thead>
          <tr>
            <th>Submit Info</th>
            {surveyData &&
              Object.values(Object.values(surveyData)[0].formData).map(
                (values) => <th>{values.name}</th>
              )}
          </tr>
        </thead>
        <tbody>
          {surveyData &&
            Object.values(surveyData).map((value) => (
              <>
                <tr>
                  <td className="first-column">{value.submitID}</td>
                  {Object.values(value.formData).map((item) => (
                    <td rowSpan={2} key={item.name}>
                      {item.value.split("(")[0]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="first-column">{value.date}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
