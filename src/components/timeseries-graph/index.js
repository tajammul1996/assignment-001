import React from "react";
import { TimeSeries, Index } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler,
} from "react-timeseries-charts";

const SimpleChart = ({ allBills = [] }) => {

    if(!allBills.length) {
        return <h3>No bills added!</h3>
    }

 const values = allBills.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  }).map(bill => [bill.date, bill.amount / 1000])


  const maxAmt = Math.max(...allBills.map(b => b.amount))
  console.log("max-amt", maxAmt);

console.log(values)
  const series = new TimeSeries({
    name: "timeseries-graph",
    columns: ["index", "precip"],
    points: values.map(([d, value]) => [
      Index.getIndexString("1d", new Date(d)),
      value,
    ]),
  });

  const style = styler([
    {
      key: "precip",
      color: "#001529",
      selected: "#001529",
    },
  ]);

  return (
    <Resizable>
      <ChartContainer timeRange={series.range()}>
        <ChartRow height="300">
          <YAxis
            id="rain"
            label="Spends in K"
            format=".1f"
            min={0}
            max={(maxAmt / 1000) > 10 ? (maxAmt / 1000) : 10}
            width="70"
            type="linear"
          />
          <Charts>
            <BarChart
              axis="rain"
              style={style}
              spacing={1}
              columns={["precip"]}
              series={series}
              minBarHeight={1}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default SimpleChart;
