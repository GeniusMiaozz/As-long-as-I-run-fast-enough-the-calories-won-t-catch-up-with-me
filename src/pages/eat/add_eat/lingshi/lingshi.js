// pages/foodChoice/lingshi/lingshi.js
var app = getApp();
var foodName;
var foodTime;
var foodCa;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },
  inputWalk: function (e) {
    foodTime = e.detail.value;
  },

  addLingshi2: function () {
    if (foodTime > 6 && foodTime < 9) {
      app.commonData.calorie.breakfast = app.commonData.calorie.breakfast + foodCa;
    }
    else if (foodTime > 11 && foodTime < 14) {
      app.commonData.calorie.lunch = app.commonData.calorie.lunch + foodCa;
    }
    else if (foodTime > 17 && foodTime < 20) {
      app.commonData.calorie.dinner = app.commonData.calorie.dinner + foodCa;
    }
    else {
      app.commonData.calorie.other = app.commonData.calorie.other + foodCa;
    }
  },

  submit1: function () {
    this.setData({
      showModal: true
    })
    foodName = '薯片';
    foodCa = 180;
  },
  submit2: function () {
    this.setData({
      showModal: true
    })
    foodName = '果冻';
    foodCa = 50;
  },
  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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