// pages/poster/poster.js
var calorie = {};
var util = require('../../utils/common.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calorie: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      others: 0,
      consume: 0,
    },
    picture: '../../images/Goal.png',
    sum: 0,
    final: 0
  },
  addition: function () {
    var breakfast = app.commonData.calorie.breakfast
    var lunch = app.commonData.calorie.lunch
    var dinner = app.commonData.calorie.dinner
    var consume = app.commonData.calorie.consume
    var other = app.commonData.calorie.other
    this.setData({
      sum: parseInt(breakfast) + parseInt(lunch) + parseInt(dinner) + parseInt(other) - parseInt(consume),
      calorie:app.commonData.calorie
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addition();
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({

      time: time
    });
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