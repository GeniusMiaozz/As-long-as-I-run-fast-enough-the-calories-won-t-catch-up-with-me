// pages/log/log.js
Page({
  backBtn: function () {
    wx.navigateBack()
  },

  /**
   * 页面的初始数据
   */
  data: {
    walkTime: wx.getStorageSync('walkTime') > 0 ? wx.getStorageSync('walkTime') : 0,
    runTime: wx.getStorageSync('runTime') > 0 ? wx.getStorageSync('runTime') : 0,
    jumpTime: wx.getStorageSync('jumpTime') > 0 ? wx.getStorageSync('jumpTime') : 0,
    circleTime: wx.getStorageSync('circleTime') > 0 ? wx.getStorageSync('circleTime') : 0,
    ballTime: wx.getStorageSync('ballTime') > 0 ? wx.getStorageSync('ballTime') : 0,
    bikeTime: wx.getStorageSync('bikeTime') > 0 ? wx.getStorageSync('bikeTime') : 0,
    tiaoTime: wx.getStorageSync('tiaoTime') > 0 ? wx.getStorageSync('tiaoTime') : 0,
    energyTime: wx.getStorageSync('energyTime') > 0 ? wx.getStorageSync('energyTime') : 0,
    countTime: wx.getStorageSync('countTime') > 0 ? wx.getStorageSync('countTime') : 0
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
    this.setData({
      walkTime: wx.getStorageSync('walkTime') > 0 ? wx.getStorageSync('walkTime') : 0,
      runTime: wx.getStorageSync('runTime') > 0 ? wx.getStorageSync('runTime') : 0,
      jumpTime: wx.getStorageSync('jumpTime') > 0 ? wx.getStorageSync('jumpTime') : 0,
      circleTime: wx.getStorageSync('circleTime') > 0 ? wx.getStorageSync('circleTime') : 0,
      ballTime: wx.getStorageSync('ballTime') > 0 ? wx.getStorageSync('ballTime') : 0,
      bikeTime: wx.getStorageSync('bikeTime') > 0 ? wx.getStorageSync('bikeTime') : 0,
      tiaoTime: wx.getStorageSync('tiaoTime') > 0 ? wx.getStorageSync('tiaoTime') : 0,
      energyTime: wx.getStorageSync('energyTime') > 0 ? wx.getStorageSync('energyTime') : 0,
      countTime: wx.getStorageSync('countTime') > 0 ? wx.getStorageSync('countTime') : 0
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