import React from 'react';
import { LineChart } from 'react-d3-basic';

function GraphD3() {
  const chartData = [
    {
      Date: "2017-03-03",
      Open: "21.16",
      High: "21.35",
      Low: "21.03",
      Close: "21.10",
      Volume: "4647100",
      'Adj Close': "21.0019"
    },
    {
      Date: "2017-03-02",
      Open: "21.50",
      High: "22.01",
      Low: "21.50",
      Close: "21.75",
      Volume: "2747900",
      'Adj Close': "21.64887"
    },
    {
      Date: "2017-03-01",
      Open: "22.06",
      High: "22.21",
      Low: "21.53",
      Close: "21.83",
      Volume: "3087500",
      'Adj Close': "21.7285"
    },
    {
      Date: "2017-02-28",
      Open: "22.36",
      High: "22.47",
      Low: "21.98",
      Close: "22.14",
      Volume: "4572100",
      'Adj Close': "22.03706"
    },
    {
      Date: "2017-02-27",
      Open: "23.70",
      High: "23.71",
      Low: "23.01",
      Close: "23.07",
      Volume: "2708300",
      'Adj Close': "22.96274"
    },
    {
      Date: "2017-02-24",
      Open: "23.85",
      High: "23.99",
      Low: "23.35",
      Close: "23.53",
      Volume: "5134100",
      'Adj Close': "23.4206"
    },
    {
      Date: "2017-02-23",
      Open: "23.00",
      High: "23.47",
      Low: "22.87",
      Close: "23.42",
      Volume: "3302900",
      'Adj Close': "23.31111"
    }
  ];
  const width = 700;
  const height = 300;
  const margins = {left: 100, right: 100, top: 50, bottom: 50};
  const title = "User sample";
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
  const chartSeries = [
    {
      field: 'Close',
      name: 'Close',
      color: '#ff7f0e'
    }
  ];
  // your x accessor
  const x = function(d) {
    return new Date(d.Date);
  }
  const xScale = 'time'
  return (
      <div>
        <LineChart
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
        />
      </div>
  );
}

export default GraphD3;
