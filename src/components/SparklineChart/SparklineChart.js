import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SparklineChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 0,
        },
      },
    },
    tension: 0.5,
  };

  const data = {
    labels: props.coin.sparkline_in_7d.price,
    datasets: [
      {
        label: props.coin.id,
        data: props.coin.sparkline_in_7d.price,
        borderColor:
          props.coin.price_change_percentage_7d_in_currency > 0
            ? "#00FC2A"
            : "#FE1040",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  return <>{props.coin && <Line options={options} data={data} />} </>;
}
