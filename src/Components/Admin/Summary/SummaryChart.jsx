import React, { useState } from "react";

// ICONS
import { HiDotsHorizontal } from "react-icons/hi";
import { BsSortUp } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { BiSortDown } from "react-icons/bi";
import { RiBarChart2Fill } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";

import { BiBarChartAlt2 } from "react-icons/bi";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BiDoughnutChart } from "react-icons/bi";

// COMPONENT
import Chart from "./Chart";

const chartOptions = [
  {
    type: "bar",
    label: "BAR",
    icon: <BiBarChartAlt2 className="icon" />,
  },
  {
    type: "pie",
    label: "PIE",
    icon: <BiPieChartAlt2 className="icon" />,
  },
  {
    type: "doughnut",
    label: "DOUGHNUT",
    icon: <BiDoughnutChart className="icon" />,
  },
];

function SummaryChart({ respondentData, activeTab }) {
  const [selectedChart, setSelectedChart] = useState("bar");

  const selectChartType = (type) => setSelectedChart(type);

  console.log(activeTab);
  console.log(respondentData);
  console.log(respondentData && respondentData[activeTab]);

  return (
    <div className="summary-chart shadow">
      <div className="chart-header">
        <div className="chart-title">
          <h4>{activeTab}</h4>
        </div>
        <div className="chart-control">
          <span className="chart-sort">
            <span>Sort</span>
            <BiSortDown className="icon" />
          </span>
          <span className="chart-download">
            <IoMdDownload className="icon" />
          </span>
        </div>
      </div>
      <div className="chart-section">
        <div className="chart-select">
          {chartOptions.map((item, i) => (
            <div
              className={`${item.type} ${
                item.type === selectedChart && "active"
              }`}
              key={i}
              onClick={() => selectChartType(item.type)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="chart">
          <Chart
            selectedData={respondentData && respondentData[activeTab]}
            chartType={selectedChart}
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryChart;
