"use strict";

const ctx = document.querySelector("#myChart");
const dataLines = [
  {
    label: "Cases",
    data: [12, 19, 30, 35, 40, 100],
    fill: false,
    backgroundColor: "rgba(255, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 0.5)"
  },
  {
    label: "Deaths",
    data: [1, 2, 3, 4, 10, 30],
    fill: false,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 0.5)"
  },
  {
    label: "Hospital",
    data: [3, 5, 7, 10, 20, 50],
    fill: false,
    backgroundColor: "rgba(51, 199, 255, 1)",
    borderColor: "rgba(51, 199, 255, 0.5)"
  },
  {
    label: "Recovered",
    data: [0, 0, 0, 5, 10, 12],
    fill: false,
    backgroundColor: "rgba(34, 182, 47, 1)",
    borderColor: "rgba(34, 182, 47, 0.5)"
  }
];

const dataLabels = [
  "March 24, 2020",
  "March 25, 2020",
  "March 26, 2020",
  "March 27, 2020",
  "March 28, 2020",
  "March 29, 2020"
];

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dataLabels,
    datasets: dataLines
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
