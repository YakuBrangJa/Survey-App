import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function DataTable({ surveyData }) {
  const formContents = useSelector((state) => state.formCardContent);
  const [highlightedRow, setHighlightedRow] = useState();
  const [tableHeadGroup, setTableHeadGroup] = useState(() =>
    Object.values(formContents)
  );
  const [tableHeadLabels, setTableHeadLabels] = useState([]);

  useEffect(() => {
    setTableHeadLabels(tableHeadGroup.map((section) => section.content).flat());
  }, [tableHeadGroup]);

  const [tableFilter, setTableFilter] = useState({
    1: "all",
    2: "all",
    3: "all",
    4: "all",
    5: "all",
    6: "all",
    7: "all",
  });

  useEffect(() => {
    if (!surveyData) return;

    setFilteredData(
      surveyData.filter(
        (item, i) =>
          (tableFilter[1] === "all"
            ? true
            : item.formData[0].value === tableFilter[1]) &&
          (tableFilter[2] === "all"
            ? true
            : item.formData[1].value === tableFilter[2]) &&
          (tableFilter[3] === "all"
            ? true
            : item.formData[2].value === tableFilter[3]) &&
          (tableFilter[4] === "all"
            ? true
            : item.formData[3].value === tableFilter[4]) &&
          (tableFilter[5] === "all"
            ? true
            : item.formData[4].value === tableFilter[5]) &&
          (tableFilter[6] === "all"
            ? true
            : item.formData[5].value === tableFilter[6]) &&
          (tableFilter[7] === "all"
            ? true
            : item.formData[6].value === tableFilter[7])
      )
    );
  }, [surveyData, tableFilter]);

  //  HANDLER FUNCTIONS
  const rowHighlighthandler = (id) => {
    setHighlightedRow(id === highlightedRow ? null : id);
  };

  const filterHandler = (e, index) => {
    setTableFilter({
      ...tableFilter,
      [index]: e.target.value,
    });
  };

  const [filteredData, setFilteredData] = useState();
  return (
    <div className="table-container">
      <table className="data-table sticky">
        <thead>
          <tr>
            <th rowSpan={2}>Submit Info</th>
            {tableHeadGroup.map((group, i) => (
              <th colSpan={group.content.length} key={i}>
                {group.group}
              </th>
            ))}
          </tr>
          <tr>
            {tableHeadLabels.map((content, i) => (
              <th key={i}>
                <label htmlFor={content.index}>{content.name}</label>
                {i <= 6 && (
                  <select
                    id={content.index}
                    onChange={(e) => filterHandler(e, content.index)}
                  >
                    <option value={"all"}>All</option>
                    {content.options.map((option, i) => (
                      <option value={option} key={i}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                {i > 6 && (
                  <div>
                    <p>{content.legend.en}</p>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData.map((value, i) => (
              <React.Fragment key={i}>
                <tr
                  className={`${
                    value.submitID === highlightedRow && "highlight"
                  }`}
                  onClick={() => rowHighlighthandler(value.submitID)}
                >
                  <td className="first-column">{value.submitID}</td>
                  {Object.values(value.formData).map((item) => (
                    <td
                      style={{ color: "#3a2b87", fontWeight: "500" }}
                      rowSpan={2}
                      key={item.name}
                    >
                      {item.value.split("(")[0]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="first-column">{value.date}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
