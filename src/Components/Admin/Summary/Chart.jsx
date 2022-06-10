import React from "react";
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

function Chart({ selectedData, chartType }) {
  const selectedDataKeys = selectedData ? Object.keys(selectedData) : [];

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
    labels: ["Gender"],
    datasets: selectedDataKeys.map((key, i) => {
      return {
        label: key,
        data: [selectedData[key]],
        backgroundColor: backgroundColor[i],
      };
    }),
  };

  const pieStructure = {
    labels: selectedDataKeys,
    datasets: [
      {
        labels: ["pie"],
        data: selectedDataKeys.map((key) => selectedData[key]),
        backgroundColor: backgroundColor,
        borderWidth: 3,
      },
    ],
  };

  const data = chartType === "bar" ? barStructure : pieStructure;

  // CHART TYPE
  let chart;

  if (chartType === "bar") chart = <Bar options={barOptions} data={data} />;

  if (chartType === "pie") chart = <Pie options={pieOptions} data={data} />;

  if (chartType === "doughnut")
    chart = <Doughnut options={pieOptions} data={data} />;

  return chart;
}

export default Chart;
