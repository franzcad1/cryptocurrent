import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VolumeChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    tension: 0.5,
  };

  const getMappedData = () => {
    const mappedData = props.data.total_volumes.map((values) => ({
      x: values[0],
      y: values[1],
    }));

    const data = {
      labels: mappedData.map((val) => {
        const date = new Date(val.x);
        return date.getHours();
      }),
      datasets: [
        {
          data: mappedData.map((val) => val.y),
          backgroundColor: "#2172E5",
          borderWidth: 0,
          borderRadius: 4,
        },
      ],
    };
    return data;
  };

  return <>{props.data && <Bar options={options} data={getMappedData()} />}</>;
}
