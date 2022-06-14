import { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";

// ICONS
import { IoMdDownload } from "react-icons/io";
import {
  BiSortDown,
  BiBarChartAlt2,
  BiPieChartAlt2,
  BiDoughnutChart,
  BiBarChart,
  BiBarChartAlt,
} from "react-icons/bi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { RiAlignRight } from "react-icons/ri";
import { TbAntennaBars5 } from "react-icons/tb";

// COMPONENT
import Chart from "./Chart";
import Loader1 from "../../Loaders/Loader1/Loader1";

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

function SummaryChart({ selectedData, selectedDataKeys, activeTab }) {
  const [selectedChart, setSelectedChart] = useState("bar");
  const [sorted, setSorted] = useState(false);

  const selectChartType = (type) => setSelectedChart(type);
  const sortHandler = () => setSorted((prevSorted) => !prevSorted);

  const [chartRef, setChartRef] = useState();

  const downloadChart = useCallback(() => {
    console.log(chartRef);
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = chartRef.current.toBase64Image();
    link.click();
  }, [chartRef]);

  const isLoading = useSelector((state) => state.uiState.isLoading);

  return (
    <div className="summary-chart shadow">
      <div className="chart-header">
        <div className="chart-title">
          <h4>{activeTab}</h4>
        </div>
        <div className="chart-control">
          {sorted ? (
            <span className="chart-sort serialize" onClick={sortHandler}>
              <span>Serialize</span>
              <AiOutlineAlignLeft className="icon" />
            </span>
          ) : (
            <span className="chart-sort sort" onClick={sortHandler}>
              <span>Sort</span>
              <TbAntennaBars5 className="icon" />
              {/* <BiSortDown className="icon" /> */}
            </span>
          )}
          <span className="chart-download" onClick={downloadChart}>
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
          {isLoading ? (
            <Loader1 scale={70} borderWidth={4} />
          ) : (
            <Chart
              selectedData={selectedData}
              selectedDataKeys={selectedDataKeys}
              chartType={selectedChart}
              sorted={sorted}
              setChartRef={setChartRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SummaryChart;
