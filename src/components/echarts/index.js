import echarts from 'echarts';
import 'echarts-gl';
import optionsMap from './config/index';

export class Chart {
  constructor ($el, chartOption) {
    this.$chartBox = $el || null;
    this.outOptions = chartOption || {};
    this.type = chartOption.type;
    this.options = {};
  }
  formOptions () {
    const defalutOptions = optionsMap[this.type];
    return Object.assign({}, defalutOptions, this.outOptions);
  };
  rendChart () {
    const initChart = echarts.init(this.$chartBox);
    this.options = this.formOptions();
    initChart.setOption(this.options);
  };
};

export default function chartRend ($el, chartOption) {
  const chartTool = new Chart($el, chartOption);
  return chartTool.rendChart();
};
