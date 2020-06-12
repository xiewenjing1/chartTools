function tooltipFormatter (params) {
  const value = params.value;
  let result = '';
  if (isNaN(value)) {
    return;
  } else {
    result = params.name + ' : ' + value;
  }
  return result;
}
function randomData () {
  return Math.round(Math.random() * 500);
}
const mydata = [
  { name: '北京', value: '100' },
  { name: '天津', value: randomData() },
  { name: '上海', value: randomData() },
  { name: '重庆', value: randomData() },
  { name: '河北', value: randomData() },
  { name: '河南', value: randomData() },
  { name: '云南', value: randomData() },
  { name: '辽宁', value: randomData() },
  { name: '黑龙江', value: randomData() },
  { name: '湖南', value: randomData() },
  { name: '安徽', value: randomData() },
  { name: '山东', value: randomData() },
  { name: '新疆', value: randomData() },
  { name: '江苏', value: randomData() },
  { name: '浙江', value: randomData() },
  { name: '江西', value: randomData() }
  // {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
  // {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
  // {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
  // {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
  // {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
  // {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
  // {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
  // {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
  // {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
];
const optionMap = {
  backgroundColor: '#000',
  title: {
    text: '全国地图大数据',
    subtext: '',
    x: 'center',
    textStyle: {
      fontSize: 30,
      lineHeight: '35px',
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: tooltipFormatter
  },
  geo: {
    show: true,
    map: 'china',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    roam: false,
    // 地图设置不可拖拽，固定的
    // 整张地图的样式设置。
    itemStyle: {
      normal: {
        borderWidth: 8,
        areaColor: '#184572',
        borderColor: '#00BFFF',
        shadowColor: '#4A708B',
        shadowBlur: 5,
        shadowOffsetY: 5,
        shadowOffsetX: -2
      },
      emphasis: {
        areaColor: null
      }
    }
  },
  // 导航图标
  visualMap: {
    show: true,
    x: 'center',
    y: '5%',
    // 从大到小排序
    inverse: true,
    orient: 'horizontal',
    // 图例文字样式
    textStyle: {
      fontSize: 16,
      fontWeight: 700,
      color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea']
    },
    // 划分值的范围
    splitList: [
      {start: 500, end: 600, label: '严重风险'}, {start: 400, end: 500, label: '较高风险'},
      {start: 300, end: 400, label: '一般风险'}, {start: 200, end: 300, label: '较低风险'},
      {start: 100, end: 200, label: '极低风险'}, {start: 0, end: 100, label: '没有风险'}
    ],
    color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea']
  },

  // 配置属性
  series: [{
    name: '数据',
    type: 'map',
    map: 'china',
    label: {
      normal: {
        // 省份名称
        show: false
      },
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#184572',
        borderWidth: 1,
        borderColor: '#1874CD'
      },
      // 控制悬浮的区域的颜色。
      emphasis: {
        areaColor: null
      }
    },
    data: mydata
    // 数据
  }]
};
export default optionMap;
