import ECharts from './utils';

type ChartParams = {
  series: number[] | string[] | Record<string, any>[];
  xAxis: string[];
};

export default class Charts extends ECharts {
  revenueChart({ series, xAxis }: ChartParams) {
    if (!series || (Array.isArray(series) && !series.length)) {
      this.setEmpty();

      return;
    }

    const options = {
      tooltip: {
        trigger: 'axis',
        formatter: '{c}',
        axisPointer: {
          type: '',
        },
      },
      xAxis: {
        data: xAxis,
        name: '月份',
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
        axisPointer: {
          type: 'shadow',
        },
      },
      yAxis: {
        name: '銷售額',
      },
      series: [
        {
          type: 'bar',
          //   label: {
          //     show: true,
          //     formatter: '{c}',
          //     fontSize: '1rem',
          //   },
          data: series,
          itemStyle: {
            borderRadius: [8, 8, 8, 8],
          },
        },
      ],
    };

    this.setOption(options);
  }

  growthChart({ series, xAxis }: ChartParams) {
    if (!series || (Array.isArray(series) && !series.length)) {
      this.setEmpty();

      return;
    }

    const options = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {},
      xAxis: {
        name: '月份',
        data: xAxis,
      },
      series: series,
    };

    this.setOption(options);
  }
}
