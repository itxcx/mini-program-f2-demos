import F2 from '@antv/my-f2';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  const data = [
    {year: '2001', population: 41.8 },
    {year: '2002', population: 25.8 },
    {year: '2003', population: 31.7 },
    {year: '2004', population: 46 },
    {year: '2005', population: 28 }
  ];

  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data);
  chart.coord('polar');
  chart.legend({
    position: 'right'
  });
  chart.axis(false);
  chart.interval().position('year*population')
    .color('year')
    .style({
      lineWidth: 1,
      stroke: '#fff'
    });
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#rose')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('rose');
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  },
  touchStart(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchstart', [e]);
    }
  },
  touchMove(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchmove', [e]);
    }
  },
  touchEnd(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchend', [e]);
    }
  }
});
