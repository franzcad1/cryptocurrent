import React, { Component } from "react";
import { connect } from "react-redux";
import { getBitcoinData } from "../../store/bitcoin/bitcoinActions";
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
class BitcoinChart extends Component {
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

  getMappedData = () => {
    const mappedData = this.props.bitcoin.data.prices.map((values) => ({
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
    this.props.getBitcoinData();
  }
  render() {
    return (
      <>
        {this.props.bitcoin.data && (
          <Line options={this.options} data={this.getMappedData()} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  bitcoin: state.bitcoin,
});

const mapDispatchToProps = {
  getBitcoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinChart);
