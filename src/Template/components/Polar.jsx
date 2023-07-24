import React from "react";
import { PolarArea } from "react-chartjs-2";

const data = {
  labels: ["Residential", "Commercial", "Land", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [300000, 230000, 180000, 270000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const Polar = () => <PolarArea data={data} />;

export { Polar };
