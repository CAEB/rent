const lmy = [727.5, 695, 700, 601.25, 600].reduce((prev, curr) => prev + curr, 0)
const yll = [727.5, 695, 700, 0, 600].reduce((prev, curr) => prev + curr, 0)
const optionL = {
  title: {
    text: '房租(元)'
  },
  tooltip: {},
  legend: {
    data: [{
        name: `刘明洋(${lmy}元)`,
        icon: 'image://https://s2.ax1x.com/2020/01/20/1PqBGt.jpg',
      },
      {
        name: `杨龙龙(${yll}元)`,
        icon: 'image://https://s2.ax1x.com/2020/01/20/1PqDRP.jpg'
      }
    ]
  },
  xAxis: {
    data: ["1月", "12月", "11月", "10月", "暖气"]
  },
  yAxis: {},
  series: [{
    name: `刘明洋(${lmy}元)`,
    type: 'bar',
    data: [727.5, 695, 700, 601.25, 600],
    itemStyle: {
      color: '#00cc66'
    },
    label: {
      show: true,
      position: 'top'
    }
  }, {
    name: `杨龙龙(${yll}元)`,
    type: 'bar',
    data: [727.5, 695, 700, 0, 600],
    itemStyle: {
      color: '#3399ff'
    },
    label: {
      show: true,
      position: 'top'
    }
  }]
}
const optionR = {
  title: {
    text: '房租截图'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    top: 'top',
    data: ['1月', '12月', '11月', '10月', '暖气']
  },
  series: [{
    name: '房租截图',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
        value: 100,
        name: '1月'
      },
      {
        value: 100,
        name: '12月'
      }, {
        value: 100,
        name: '11月'
      }, {
        value: 100,
        name: '10月'
      }, {
        value: 100,
        name: '暖气'
      },
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}

const app = new Vue({
  el: '#app',
  data: {
    visible: false,
    title: '',
    imgSrc: ''
  },
  created() {
    const left = echarts.init(document.getElementById('left'))
    const right = echarts.init(document.getElementById('right'))
    left.setOption(optionL)
    right.setOption(optionR)
    right.on('click', ({ name }) => {
      this.visible = true
      this.title = `${name}房租截图`
      this.imgSrc = `/rent/image/${name}.jpg`
    })
  },
  methods: {
    show: function () {
      this.visible = true
    }
  }
})