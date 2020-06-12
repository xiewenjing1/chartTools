const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 11, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [3, 11, 4], [4, 0, 1], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [5, 3, 3], [5, 4, 0], [5, 5, 0], [6, 6, 0], [6, 20, 1]];
const bar3DOption = {
  tooltip: {},
  visualMap: {
    max: 20,
    inRange: {
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
  },
  xAxis3D: {
    type: 'category',
    data: hours
  },
  yAxis3D: {
    type: 'category',
    data: days
  },
  zAxis3D: {
    type: 'value'
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 80,
    viewControl: {
      // projection: 'orthographic'
    },
    light: {
      main: {
        intensity: 1.2,
        shadow: true
      },
      ambient: {
        intensity: 0.3
      }
    }
  },
  series: [{
    type: 'bar3D',
    data: data.map(function (item) {
      return {
        value: [item[1], item[0], item[2]]
      };
    }),
    shading: 'lambert',

    label: {
      textStyle: {
        fontSize: 16,
        borderWidth: 1
      }
    },
    emphasis: {
      label: {
        textStyle: {
          fontSize: 20,
          color: '#900'
        }
      },
      itemStyle: {
        color: '#900'
      }
    }
  }]
};
export default bar3DOption;
