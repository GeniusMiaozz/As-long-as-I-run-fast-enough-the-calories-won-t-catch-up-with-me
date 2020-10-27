// pages/todayDiet/todayDiet.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */

  data: {
    foodCa1: app.commonData.calorie.breakfast,
    foodCa2: app.commonData.calorie.lunch,
    foodCa3: app.commonData.calorie.dinner,
    foodCa4: app.commonData.calorie.other,
  },
  showaxis: function () {


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodCa1: app.commonData.calorie.breakfast,
      foodCa2: app.commonData.calorie.lunch,
      foodCa3: app.commonData.calorie.dinner,
      foodCa4: app.commonData.calorie.other
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      foodCa1: app.commonData.calorie.breakfast,
      foodCa2: app.commonData.calorie.lunch,
      foodCa3: app.commonData.calorie.dinner,
      foodCa4: app.commonData.calorie.other
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      foodCa1: app.commonData.calorie.breakfast,
      foodCa2: app.commonData.calorie.lunch,
      foodCa3: app.commonData.calorie.dinner,
      foodCa4: app.commonData.calorie.other
    })
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