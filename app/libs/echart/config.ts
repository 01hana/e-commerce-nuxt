const emptyOption = {
  title: {
    text: '尚無資料',
    top: 'center',
    left: 'center',
    textStyle: {
      color: '#4d5156',
      fontWeight: 'normal',
    },
  },
};

const sharedOption = {
  grid: {
    left: '5%',
    right: '5%',
  },
  title: {
    textStyle: {
      fontSize: '1rem',
    },
    subtextStyle: {
      align: 'left',
    },
    padding: 0,
  },
  xAxis: {
    type: 'category',
    nameTextStyle: {
      fontSize: 15,
    },
    axisLabel: {
      fontSize: 14,
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: 'value',
    name: '次數',
    nameTextStyle: {
      fontSize: 15,
    },
    axisLabel: {
      fontSize: '1rem',
    },
  },
  legend: {
    textStyle: {
      fontSize: '1rem',
    },
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontSize: '1rem',
    },
    axisPointer: {
      label: {
        backgroundColor: '#272829',
      },
    },
  },
  //   dataZoom: [
  //     {
  //       xAxisIndex: 0,
  //       height: 20,
  //       bottom: 5,
  //       start: 0,
  //       end: 100,
  //       handleIcon:
  //         'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
  //       handleSize: '80%',
  //     },
  //   ],
};

export { emptyOption, sharedOption };
