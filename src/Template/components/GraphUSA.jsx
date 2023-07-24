import React, { Component } from "react";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
let chartData = {
  chart: {
    caption: "Recommended Category Split",
    // subCaption: "For a net-worth of $1M",
    showValues: "1",
    showPercentInTooltip: "0",
    numberPrefix: "$",
    enableMultiSlicing: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "Residential",
      value: "300000",
    },
    {
      label: "Commercial",
      value: "230000",
    },
    {
      label: "Land",
      value: "180000",
    },
    {
      label: "Other",
      value: "270000",
    },
  ],
};

const GraphUSA = () => {
  const chartConfigs = {
    type: "Pie3D",
    width: 550,
    // height: 400,
    dataFormat: "json",
    dataSource: chartData,
  };

  return <ReactFC {...chartConfigs} />;
};

export { GraphUSA };
