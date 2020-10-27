// pages/RenctlyDatas/RenctlyDatas.js
var app = getApp();
// 引入wx-charts.js文件
const wxCharts = require('../../utils/wxcharts.js');
var daylineChart = null;
var yuelineChart = null;
// 引入wx-charts.js文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [],
    num: 0
  },

  lineShow1: function (type) {
    var count = 3;
    var x = new Array(" ", " ", " ", " ", " ", " ", " "),
      incalorie = new Array(0, 0, 0, 0, 0, 0, 0),
      outcalorie = new Array(0, 0, 0, 0, 0, 0, 0),
      calorie = new Array(0, 0, 0, 0, 0, 0, 0);
    for (var i = 0; i < count; i++) {
      x[i] = this.data.List[i].add_date;
      incalorie[i] = this.data.List[i].inCalorie;
      outcalorie[i] = this.data.List[i].outCalorie;
      calorie[i] = this.data.List[i].calorie;
    }
    let line = {
      canvasId: 'lineGraph1', // canvas-id
      type: 'line', // 图表类型，可选值为pie, line, column, area, ring
      categories: [x[0], x[1], x[2], x[3], x[4], x[5], x[6]],
      series: [{
        name: '每日摄入量',
        data: [incalorie[0], incalorie[1], incalorie[2], incalorie[3], incalorie[4], incalorie[5], incalorie[6]],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: '每日消耗量',
        data: [outcalorie[0], outcalorie[1], outcalorie[2], outcalorie[3], outcalorie[4], outcalorie[5], outcalorie[6]],
        format: function (val) {
          return val.toFixed(2);
        }
      }],
      yAxis: {
        title: '卡路里 (K)',
        format: function (val) {
          return val.toFixed(2);
        },//显示两位小数
        fontColor: "red", //坐标颜色
        titleFontColor: "red", //标题颜色
        min: 0, // Y轴起始值
        gridColor: "grey",  //线的颜色
      },
      width: 310,
      height: 250,
      dataLabel: true, // 是否在图表中显示数据内容值
      legend: true, // 是否显示图表下方各类别的标识
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      }
    }
    new wxCharts(line);
  },
  lineShow2: function (type) {
    var count = 2;
    var x = new Array(" ", " ", " ", " ", " ", " ", " "),
      calorie = new Array(0, 0, 0, 0, 0, 0, 0);
    x[0] = this.data.List[0].add_date;
    calorie[0] = this.data.List[0].calorie
    for (var i = 1; i < count; i++) {
      x[i] = this.data.List[i].add_date;
      calorie[i] = this.data.List[i].calorie + this.data.List[i - 1].calorie;
    }
    let line = {
      canvasId: 'lineGraph2', // canvas-id
      type: 'line', // 图表类型，可选值为pie, line, column, area, ring
      categories: [x[0], x[1], x[2], x[3], x[4], x[5], x[6]],
      series: [{
        name: '每日净摄入量',
        data: [calorie[0], calorie[1], calorie[2], calorie[3], calorie[4], calorie[5], calorie[6]],
        format: function (val) {
          return val.toFixed(2);
        }
      }],
      yAxis: {
        title: '卡路里 (K)',
        format: function (val) {
          return val.toFixed(2);
        },//显示两位小数
        fontColor: "red", //坐标颜色
        titleFontColor: "red", //标题颜色
        min: 0, // Y轴起始值
        gridColor: "grey",  //线的颜色
      },
      width: 310,
      height: 250,
      dataLabel: true, // 是否在图表中显示数据内容值
      legend: false, // 是否显示图表下方各类别的标识
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      }
    }
    new wxCharts(line);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = new Array();
    list = app.commonData.list;
    //var num = app.commonData.list.length;
    this.setData({
      List: list,
      // num: num
    })
    this.lineShow1();
    this.lineShow2();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})