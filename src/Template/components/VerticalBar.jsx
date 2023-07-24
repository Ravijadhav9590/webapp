import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "325",
  height: "300",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "States With Most Contract purchased [2017-2020]",
      //   subCaption: "In MMbbl = One Million barrels",
      xAxisName: "States",
      yAxisName: "Contract purchased",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: [
      {
        label: "HI",
        value: "70.0",
      },
      {
        label: "DC",
        value: "52.3",
      },
      {
        label: "MD",
        value: "54.2",
      },
      {
        label: "DE",
        value: "55.3",
      },
      {
        label: "RI",
        value: "50.1",
      },
      {
        label: "WA",
        value: "48.3",
      },
      {
        label: "OR",
        value: "48.4",
      },
      {
        label: "CA",
        value: "59.4",
      },
      {
        label: "AK",
        value: "26.6",
      },
      {
        label: "label",
        value: "44.4",
      },
      {
        label: "NV",
        value: "49.9",
      },
      {
        label: "AZ",
        value: "60.3",
      },
      {
        label: "MT",
        value: "42.7",
      },
      {
        label: "WY",
        value: "42.0",
      },
      {
        label: "UT",
        value: "48.6",
      },
      {
        label: "CO",
        value: "45.1",
      },
      {
        label: "NM",
        value: "53.4",
      },
      {
        label: "ND",
        value: "40.4",
      },
      {
        label: "SD",
        value: "45.2",
      },
      {
        label: "NE",
        value: "48.8",
      },
      {
        label: "KS",
        value: "54.3",
      },
      {
        label: "OK",
        value: "59.6",
      },
      {
        label: "TX",
        value: "64.8",
      },
      {
        label: "MN",
        value: "41.2",
      },
      {
        label: "IA",
        value: "47.8",
      },
      {
        label: "MO",
        value: "54.5",
      },
      {
        label: "AR",
        value: "60.4",
      },
      {
        label: "LA",
        value: "66.4",
      },
      {
        label: "WI",
        value: "43.1",
      },
      {
        label: "IL",
        value: "51.8",
      },
      {
        label: "KY",
        value: "55.6",
      },
      {
        label: "TN",
        value: "57.6",
      },
      {
        label: "MS",
        value: "63.4",
      },
      {
        label: "AL",
        value: "62.8",
      },
      {
        label: "GA",
        value: "63.5",
      },
      {
        label: "MI",
        value: "44.4",
      },
      {
        label: "IN",
        value: "51.7",
      },
      {
        label: "OH",
        value: "50.7",
      },
      {
        label: "PA",
        value: "48.8",
      },
      {
        label: "NY",
        value: "45.4",
      },
      {
        label: "VT",
        value: "42.9",
      },
      {
        label: "NH",
        value: "43.8",
      },
      {
        label: "ME",
        value: "41.0",
      },
      {
        label: "MA",
        value: "47.9",
      },
      {
        label: "CT",
        value: "49.0",
      },
      {
        label: "NJ",
        value: "52.7",
      },
      {
        label: "WV",
        value: "51.8",
      },
      {
        label: "VA",
        value: "55.1",
      },
      {
        label: "NC",
        value: "59.0",
      },
      {
        label: "SC",
        value: "62.4",
      },
      {
        label: "FL",
        value: "70.7",
      },
    ],
  },
};

const VerticalBar = () => <ReactFC {...chartConfigs} />;

export { VerticalBar };
