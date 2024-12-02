import ReactECharts from "echarts-for-react";
import {
  FINANCIAL_DATA,
  formatValue,
  generateDates,
} from "./FinancialChart.shared";

const FinancialChart = () => {
  const dates = generateDates(FINANCIAL_DATA.length);
  const data = [...FINANCIAL_DATA].reverse();

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
      data: ["Revenue", "Gross Profit", "Operating Income", "Net Income"],
      textStyle: {
        color: "#b1b1b1",
      },
      top: "0px",
      icon: "rect",
    },
    grid: {
      left: "4px",
      right: "4px",
      bottom: "0px",
      top: "30px",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: dates,
      axisLabel: {
        color: "#b1b1b1",
        formatter: (value: string) => {
          const date = new Date(value);
          // Solo mostrar el año cuando es enero
          return date.getMonth() === 0 ? date.getFullYear().toString() : "";
        },
        rotate: 0,
        interval: 0,
      },
      axisTick: {
        alignWithLabel: true,
        interval: (index: number, value: string) => {
          return new Date(value).getMonth() === 0;
        },
      },
      axisLine: {
        lineStyle: { color: "#b1b1b1" },
      },
      splitLine: {
        show: true,
        interval: (index: number, value: string) => {
          return new Date(value).getMonth() === 0;
        },
        lineStyle: {
          color: "#444",
          type: "dashed",
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
        formatter: (value: number) => formatValue(value),
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
    series: [
      {
        name: "Revenue",
        type: "bar",
        data: data.map((item) => item.revenue),
        lineStyle: {
          width: 2,
        },
        symbolSize: 2,
      },
      {
        name: "Gross Profit",
        type: "bar",
        data: data.map((item) => item.grossProfit),
        lineStyle: {
          width: 2,
        },
        symbolSize: 2,
      },
      {
        name: "Operating Income",
        type: "bar",
        data: data.map((item) => item.operatingIncome),
        lineStyle: {
          width: 2,
        },
        symbolSize: 2,
      },
      {
        name: "Net Income",
        type: "bar",
        data: data.map((item) => item.netIncome),
        lineStyle: {
          width: 2,
        },
        symbolSize: 2,
      },
    ],
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "10px",
        paddingTop: "30px",
        paddingBottom: "0px",
      }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default FinancialChart;
