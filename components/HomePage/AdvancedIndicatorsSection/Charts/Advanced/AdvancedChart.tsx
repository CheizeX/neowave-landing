import ReactECharts from "echarts-for-react";
import { ADVANCED_DATA } from "@/components/HomePage/AdvancedIndicatorsSection/Charts/Advanced/AdvancedChart.shared";
import {
  Option,
  TooltipFormatterParams,
} from "@/components/HomePage/AdvancedIndicatorsSection/Charts/Advanced/AdvancedChart.types";

const AdvancedChart = () => {
  const data: [number, number, number][] = ADVANCED_DATA.tickers_col.flatMap(
    (ticker, i) =>
      ADVANCED_DATA.data
        .filter((item) => item[0] === i)
        .map((item, j) => [j, i, item[2]] as [number, number, number])
  );

  const option: Option = {
    tooltip: {
      position: "top",
      formatter: function (params: TooltipFormatterParams) {
        return `${ADVANCED_DATA.tickers_col[params.value[1]]}<br/>Value: ${
          params.value[2]
        }`;
      },
      backgroundColor: "rgba(25, 23, 23, 0.5)",
      extraCssText: "backdrop-filter: blur(10px);",
      textStyle: {
        color: "#b1b1b1",
      },
    },
    grid: {
      left: "4px",
      right: "4px",
      bottom: "0px",
      top: "0px",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ADVANCED_DATA.tickers_idx,
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250, 69, 21, 0.02)", "rgba(250, 69, 21, 0.01)"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "#b1b1b1",
        },
      },
      axisLabel: {
        color: "#b1b1b1",
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#444",
        },
      },
    },
    yAxis: {
      type: "category",
      data: ADVANCED_DATA.tickers_col,
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250, 69, 21, 0.02)", "rgba(250, 69, 21, 0.01)"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "#b1b1b1",
        },
      },
      axisLabel: {
        color: "#b1b1b1",
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#444",
        },
      },
    },
    visualMap: {
      min: Math.min(...data.map((item) => item[2])),
      max: Math.max(...data.map((item) => item[2])),
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "5%",
      textStyle: {
        color: "#b1b1b1",
      },
      inRange: {
        color: [
          "rgba(250, 69, 21, 0.1)",
          "rgba(250, 69, 21, 0.3)",
          "rgba(250, 69, 21, 0.5)",
          "rgba(250, 69, 21, 0.6)",
          "rgba(250, 69, 21, 0.7)",
          "#FA4515",
        ],
      },
      backgroundColor: "rgba(25, 23, 23, 0.1)",
      borderColor: "#333",
      padding: 10,
    },
    series: [
      {
        type: "heatmap",
        data: data,
        label: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowColor: "rgba(250, 69, 21, 0.3)",
          },
        },
        itemStyle: {
          borderColor: "rgba(25, 23, 23, 0.1)",
          borderWidth: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "20px",
      }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default AdvancedChart;
