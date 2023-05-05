import React, { Component } from "react";
import axios from "axios";
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
export default class BitcoinChart extends Component {
  state = {
    bitcoinData: null,
  };

  options = {
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
        display: true,
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

  getBitcoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily`
      );
      this.setState({ bitcoinData: data });
    } catch (err) {
      console.log(err);
    }
  };

  getMappedData = () => {
    const mappedData = this.state.bitcoinData.prices.map((values) => ({
      x: values[0],
      y: values[1],
    }));

    const data = {
      labels: mappedData.map((val) => {
        const date = new Date(val.x);
        return date.getDate();
      }),
      datasets: [
        {
          data: mappedData.map((val) => val.y),
          borderColor: "#00FF5F",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgba(0, 255, 95, .56)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            return gradient;
          },
          pointRadius: 0,
          borderWidth: 3,
          fill: true,
        },
      ],
    };

    return data;
  };

  componentDidMount() {
    this.getBitcoinData();
  }
  render() {
    return (
      <>
        {this.state.bitcoinData && (
          <Line options={this.options} data={this.getMappedData()} />
        )}
      </>
    );
  }
}
