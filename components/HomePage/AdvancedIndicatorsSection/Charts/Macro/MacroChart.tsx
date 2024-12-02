import ReactECharts from "echarts-for-react";
import { MACRO_DATA, ALL_DATES } from "./MacroChart.shared";

const MacroChart = () => {
  const seriesNames = [...new Set(MACRO_DATA.map((obs) => obs.name))];

  const seriesData = seriesNames.map((name) => ({
    name,
    type: "line",
    data: ALL_DATES.map((date) => {
      const obs = MACRO_DATA.find((d) => d.name === name && d.date === date);
      return obs ? parseFloat(obs.value) : null;
    }),
    lineStyle: {
      width: 1,
    },
    symbolSize: 2,
    connectNulls: true,
  }));

  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(25, 23, 23, 0.1)",
      extraCssText: "backdrop-filter: blur(10px);",
      borderColor: "#333",
      textStyle: {
        color: "#b1b1b1",
      },
    },
    legend: {
      data: seriesNames,
      textStyle: {
        color: "#b1b1b1",
      },
      top: "0px",
      icon: "circle",
    },
    grid: {
      left: "4px",
      right: "4px",
      bottom: "0px",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ALL_DATES,
      axisLine: {
        lineStyle: {
          color: "#b1b1b1",
        },
      },
      axisLabel: {
        color: "#b1b1b1",
        margin: 20,
        formatter: (value: string) => {
          const date = new Date(value);
          return date.toLocaleDateString("en-US", {
            month: "short",
            year: "2-digit",
          });
        },
      },
      axisTick: {
        show: true,
        length: 6,
        lineStyle: {
          color: "#b1b1b1",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#b1b1b1",
        },
      },
      axisLabel: {
        color: "#b1b1b1",
      },
      splitLine: {
        lineStyle: {
          color: "#444",
        },
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
    series: seriesData,
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        paddingTop: "30px",
        paddingBottom: "0px",
      }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default MacroChart;
