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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinChart(props) {
  const chartData = props.chartData.map((values) => ({
    x: values[0],
    y: values[1],
  }));

  const data = {
    labels: chartData.map((val) => {
      const date = new Date(val.x).toLocaleDateString();
      return date;
    }),
    datasets: [
      {
        data: props.chartData,
        borderColor: "#2c2d33",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.0)");
          gradient.addColorStop(0.25, "#404040");
          gradient.addColorStop(1, "RGBA(23,24,33,0 )");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

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
      maintainAspectRatio: false,
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
      },
    },
    tension: 0.5,
  };

  return (
    <>
      <Line options={options} data={data} height={70} />
    </>
  );
}
