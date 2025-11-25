import { emptyOption, sharedOption } from './config';
import type { ECharts as EChartsInstance } from 'echarts';

import { merge } from 'lodash';

export default class ECharts {
  private chart: EChartsInstance;

  constructor(chart: EChartsInstance) {
    if (!chart) {
      throw new Error('Chart instance is required');
    }

    this.chart = chart;
  }

  setOption(options: echarts.EChartsCoreOption): void {
    this.chart.setOption(merge({}, sharedOption, options));

    this.setLoading(false);
  }

  setLoading(state: boolean): void {
    if (state) {
      this.clear();
      this.chart.showLoading();
    } else {
      this.chart.hideLoading();
    }
  }

  clear(): void {
    this.chart.clear();
  }

  setEmpty(): void {
    this.clear();
    this.chart.setOption(emptyOption);
    this.setLoading(false);
  }
}
