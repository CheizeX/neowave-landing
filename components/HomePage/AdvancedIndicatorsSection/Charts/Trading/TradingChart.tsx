import { init, Chart, TooltipShowRule } from "klinecharts";
import { useEffect, useRef } from "react";
import { TRADING_DATA } from "./TradingChart.shared";

const TradingChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      chartInstanceRef.current = init(chartRef.current);

      // Formatear los datos al formato que espera KlineCharts
      const formattedData = TRADING_DATA.map((item) => ({
        timestamp: item.timestamp,
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
        volume: item.volume,
      }));

      // Configurar el tema y opciones
      if (chartInstanceRef.current) {
        chartInstanceRef.current.setStyles({
          grid: {
            vertical: {
              show: false,
            },
            horizontal: {
              color: "#f0f0f01b",
              size: 1,
            },
          },
          candle: {
            tooltip: {
              showRule: TooltipShowRule.None,
              text: {
                size: 10,
                family: "Roboto, sans-serif",
                weight: "500",
                color: "#FFFFFF",
              },
            },
          },
          indicator: {
            tooltip: {
              text: {
                size: 14,
                family: "Roboto, sans-serif",
                weight: "500",
                color: "#FFFFFF",
              },
            },
          },
        });
        chartInstanceRef.current.createIndicator("BOLL", true, {
          id: "candle_pane",
        });
      }

      // Cargar los datos
      if (chartInstanceRef.current) {
        chartInstanceRef.current.applyNewData(formattedData);
      }
    }

    // Cleanup - remove the chart container content
    return () => {
      if (chartRef.current && chartInstanceRef.current) {
        while (chartRef.current.firstChild) {
          chartRef.current.removeChild(chartRef.current.firstChild);
        }
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        paddingTop: "30px",
        paddingBottom: "0px",
      }}>
      <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TradingChart;
