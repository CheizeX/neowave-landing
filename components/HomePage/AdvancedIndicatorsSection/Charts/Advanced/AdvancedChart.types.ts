export interface TooltipFormatterParams {
  value: [number, number, number];
}

export interface Option {
  tooltip: {
    position: string;
    formatter: (params: TooltipFormatterParams) => string;
    backgroundColor: string;
    extraCssText: string;
    borderColor?: string;
    textStyle: {
      color: string;
    };
  };
  grid: {
    left: string;
    right: string;
    bottom: string;
    top: string;
    containLabel: boolean;
  };
  xAxis: {
    type: string;
    data: string[];
    splitArea: {
      show: boolean;
      areaStyle: {
        color: string[];
      };
    };
    axisLine: {
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      color: string;
    };
    axisTick: {
      alignWithLabel: boolean;
      lineStyle: {
        color: string;
      };
    };
  };
  yAxis: {
    type: string;
    data: string[];
    splitArea: {
      show: boolean;
      areaStyle: {
        color: string[];
      };
    };
    axisLine: {
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      color: string;
    };
    axisTick: {
      alignWithLabel: boolean;
      lineStyle: {
        color: string;
      };
    };
  };
  visualMap: {
    min: number;
    max: number;
    calculable: boolean;
    orient: string;
    left: string;
    bottom: string;
    textStyle: {
      color: string;
    };
    inRange: {
      color: string[];
    };
    backgroundColor: string;
    borderColor: string;
    padding: number;
  };
  series: {
    type: string;
    data: [number, number, number][];
    label: {
      show: boolean;
    };
    emphasis: {
      itemStyle: {
        shadowBlur: number;
        shadowColor: string;
      };
    };
    itemStyle: {
      borderColor: string;
      borderWidth: number;
    };
  }[];
}
