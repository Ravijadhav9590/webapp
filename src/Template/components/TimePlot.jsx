import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Average Yearly Download",
    yaxisname: "Download ",
    subcaption: "[2009-2020]",
    numbersuffix: " ",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "2009",
      value: "90.67",
    },
    {
      label: "2010",
      value: "90.54",
    },
    {
      label: "2011",
      value: "90.75",
    },
    {
      label: "2012",
      value: "90.8",
    },
    {
      label: "2013",
      value: "91.16",
    },
    {
      label: "2014",
      value: "91.37",
    },
    {
      label: "2015",
      value: "91.66",
    },
    {
      label: "2016",
      value: "91.8",
    },
    {
      label: "2017",
      value: "89.45",
    },
    {
      label: "2018",
      value: "89.87",
    },
    {
      label: "2019",
      value: "89.64",
    },
    {
      label: "2020",
      value: "90.13",
    },
  ],
};

class ColumnChartTimeAxis extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="line"
        width="325"
        height="300"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export { ColumnChartTimeAxis };
