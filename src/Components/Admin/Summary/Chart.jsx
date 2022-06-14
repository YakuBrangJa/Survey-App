import React, { useState, useEffect, forwardRef, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const backgroundColor = [
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(102, 255, 122, 0.8)",
];

const Chart = ({
  selectedData,
  selectedDataKeys,
  chartType,
  sorted,
  setChartRef,
}) => {
  const chartRef = useRef();

  useEffect(() => {
    setChartRef(chartRef);
  }, [chartRef]);

  const [sortedDataKeys, setSortedDataKeys] = useState();

  useEffect(() => {
    setSortedDataKeys(
      selectedDataKeys.length !== 0 &&
        selectedDataKeys
          .slice()
          .sort((a, b) => selectedData.value[a] - selectedData.value[b])
    );
  }, [selectedDataKeys]);

  const dataKey = sorted ? sortedDataKeys : selectedDataKeys;

  // OPTION STRUCTURE
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        // grace: 1,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        position: "right",
        align: "center",
        maxWidth: 300,
      },
      title: {
        display: false,
        text: "Respondend's Summary",
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "right",
        align: "center",
      },
      title: {
        display: true,
        text: "Gender",
        position: "bottom",
        align: "center",
      },
    },
  };

  // DATA STRUCTURE
  const barStructure = {
    labels: [""],
    datasets: dataKey.map((key, i) => {
      return {
        label: key,
        data: [selectedData.value[key]],
        backgroundColor: backgroundColor[i],
        // barThickness: 170,
      };
    }),
  };

  const pieStructure = {
    labels: dataKey,
    datasets: [
      {
        labels: ["pie"],
        data: dataKey.map((key) => selectedData.value[key]),
        backgroundColor: backgroundColor,
        borderWidth: 2,
        // borderColor: backgroundColor,
      },
    ],
  };

  const data = chartType === "bar" ? barStructure : pieStructure;

  // CHART TYPE
  let chart;

  if (chartType === "bar")
    chart = (
      <Bar
        options={barOptions}
        data={data}
        ref={chartType === "bar" && chartRef}
      />
    );

  if (chartType === "pie")
    chart = (
      <Pie
        options={pieOptions}
        data={data}
        ref={chartType === "pie" && chartRef}
      />
    );

  if (chartType === "doughnut")
    chart = (
      <Doughnut
        options={pieOptions}
        data={data}
        ref={chartType === "doughnut" && chartRef}
      />
    );

  return chart;
};
export default Chart;
