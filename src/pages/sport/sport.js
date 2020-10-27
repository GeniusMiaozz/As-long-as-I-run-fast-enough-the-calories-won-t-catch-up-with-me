// pages/index/index.js
var app = getApp();
var common = require('../../utils/common.js');
Page({
  jumpBtn: function(options) {
    wx.navigateTo({
      url: '../today_sport/today_sport'
    })
  },
  /**
   * 页面的初始数据
   */
  /**
   * 页面的初始数据
   */
  data: {
    walk: wx.getStorageSync('walk') > 0 ? wx.getStorageSync('walk') : 0,
    run: wx.getStorageSync('run') > 0 ? wx.getStorageSync('run') : 0,
    jump: wx.getStorageSync('jump') > 0 ? wx.getStorageSync('jump') : 0,
    circle: wx.getStorageSync('circle') > 0 ? wx.getStorageSync('circle') : 0,
    ball: wx.getStorageSync('ball') > 0 ? wx.getStorageSync('ball') : 0,
    bike: wx.getStorageSync('bike') > 0 ? wx.getStorageSync('bike') : 0,
    tiao: wx.getStorageSync('tiao') > 0 ? wx.getStorageSync('tiao') : 0,
    energy: wx.getStorageSync('energy') > 0 ? wx.getStorageSync('energy') : 0,
    count: 0,
    walkTime: wx.getStorageSync('walkTime') > 0 ? wx.getStorageSync('walkTime') : 0,
    runTime: wx.getStorageSync('runTime') > 0 ? wx.getStorageSync('runTime') : 0,
    jumpTime: wx.getStorageSync('jumpTime') > 0 ? wx.getStorageSync('jumpTime') : 0,
    circleTime: wx.getStorageSync('circleTime') > 0 ? wx.getStorageSync('circleTime') : 0,
    ballTime: wx.getStorageSync('ballTime') > 0 ? wx.getStorageSync('ballTime') : 0,
    bikeTime: wx.getStorageSync('bikeTime') > 0 ? wx.getStorageSync('bikeTime') : 0,
    tiaoTime: wx.getStorageSync('tiaoTime') > 0 ? wx.getStorageSync('tiaoTime') : 0,
    energyTime: wx.getStorageSync('energyTime') > 0 ? wx.getStorageSync('energyTime') : 0,
    countTime: 0
  },
  inputWalk: function(e) {
    this.data.walk = this.data.walk + e.detail.value * 4
    this.setData({
      walk: this.data.walk
    })
    wx.setStorageSync('walk', this.data.walk)
    this.data.walkTime = e.detail.value,
      wx.setStorageSync('walkTime', this.data.walkTime)
  },
  inputRun: function(e) {
    this.data.run = e.detail.value * 6
    this.setData({
      run: this.data.run
    })
    wx.setStorageSync('run', this.data.run)
    this.data.runTime = e.detail.value,
      wx.setStorageSync('runTime', this.data.runTime)
  },
  inputJump: function(e) {
    this.data.jump = e.detail.value * 5
    this.setData({
      jump: this.data.jump
    })
    wx.setStorageSync('jump', this.data.jump)
    this.data.jumpTime = e.detail.value,
      wx.setStorageSync('jumpTime', this.data.jumpTime)
  },
  inputCircle: function(e) {
    this.data.circle = e.detail.value * 3
    this.setData({
      circle: this.data.circle
    })
    wx.setStorageSync('circle', this.data.circle)
    this.data.circleTime = e.detail.value,
      wx.setStorageSync('circleTime', this.data.ciecleTime)
  },
  inputBall: function(e) {
    this.data.ball = e.detail.value * 7
    this.setData({
      ball: this.data.ball
    })
    wx.setStorageSync('ball', this.data.ball)
    this.data.ballTime = e.detail.value,
      wx.setStorageSync('ballTime', this.data.ballTime)
  },
  inputBike: function(e) {
    this.data.bike = e.detail.value * 7
    this.setData({
      bike: this.data.bike
    })
    wx.setStorageSync('bike', this.data.bike)
    this.data.bikeTime = e.detail.value,
      wx.setStorageSync('bikeTime', this.data.bikeTime)
  },
  inputTiao: function(e) {
    this.data.tiao = e.detail.value * 4
    this.setData({
      tiao: this.data.tiao
    })
    wx.setStorageSync('tiao', this.data.tiao)
    this.data.tiaoTime = e.detail.value,
      wx.setStorageSync('tiaoTime', this.data.tiaoTime)
  },
  inputEnergy: function(e) {
    this.data.energy = e.detail.value * 4
    this.setData({
      energy: this.data.energy
    })
    wx.setStorageSync('energy', this.data.energy)
    this.data.energyTime = e.detail.value,
      wx.setStorageSync('energyTime', this.data.energyTime)
  },
  jisuan: function(e) {
    this.data.countTime = parseInt(wx.getStorageSync('walkTime') > 0 ? wx.getStorageSync('walkTime') : 0) + parseInt(wx.getStorageSync('runTime') > 0 ? wx.getStorageSync('runTime') : 0) + parseInt(wx.getStorageSync('jumpTime') > 0 ? wx.getStorageSync('jumpTime') : 0) + parseInt(wx.getStorageSync('circleTime') > 0 ? wx.getStorageSync('circleTime') : 0) + parseInt(wx.getStorageSync('ballTime') > 0 ? wx.getStorageSync('ballTime') : 0) + parseInt(wx.getStorageSync('bikeTime') > 0 ? wx.getStorageSync('bikeTime') : 0) + parseInt(wx.getStorageSync('tiaoTime') > 0 ? wx.getStorageSync('tiaoTime') : 0) + parseInt(wx.getStorageSync('energyTime') > 0 ? wx.getStorageSync('energyTime') : 0)
    wx.setStorageSync('countTime', this.data.countTime)
    this.data.count = parseInt(wx.getStorageSync('walk') > 0 ? wx.getStorageSync('walk') : 0) + parseInt(wx.getStorageSync('run') > 0 ? wx.getStorageSync('run') : 0) + parseInt(wx.getStorageSync('jump') > 0 ? wx.getStorageSync('jump') : 0) + parseInt(wx.getStorageSync('circle') > 0 ? wx.getStorageSync('circle') : 0) + parseInt(wx.getStorageSync('ball') > 0 ? wx.getStorageSync('ball') : 0) + parseInt(wx.getStorageSync('bike') > 0 ? wx.getStorageSync('bike') : 0) + parseInt(wx.getStorageSync('tiao') > 0 ? wx.getStorageSync('tiao') : 0) + parseInt(wx.getStorageSync('energy') > 0 ? wx.getStorageSync('energy') : 0)
    wx.setStorageSync('count', this.data.count)
    this.setData({
      count: this.data.count
    })
  },
  formReset: function(e) {
    this.data.count = 0,
      this.data.walk = 0,
      this.data.run = 0,
      this.data.jump = 0,
      this.data.circle = 0,
      this.data.ball = 0,
      this.data.bike = 0,
      this.data.tiao = 0,
      this.data.energy = 0,
      this.data.countTime = 0,
      this.data.walkTime = 0,
      this.data.runTime = 0,
      this.data.jumpTime = 0,
      this.data.circleTime = 0,
      this.data.ballTime = 0,
      this.data.bikeTime = 0,
      this.data.tiaoTime = 0,
      this.data.energyTime = 0,
      wx.setStorageSync('walk', this.data.walk),
      wx.setStorageSync('run', this.data.run),
      wx.setStorageSync('jump', this.data.jump),
      wx.setStorageSync('circle', this.data.circle),
      wx.setStorageSync('ball', this.data.ball),
      wx.setStorageSync('bike', this.data.bike),
      wx.setStorageSync('tiao', this.data.tiao),
      wx.setStorageSync('energy', this.data.energy),
      wx.setStorageSync('walkTime', this.data.rwalkTime),
      wx.setStorageSync('runTime', this.data.runTime),
      wx.setStorageSync('circleTime', this.data.circleTime),
      wx.setStorageSync('ballTime', this.data.ballTime),
      wx.setStorageSync('bikeTime', this.data.bikeTime),
      wx.setStorageSync('tiaoTime', this.data.tiaoTime),
      wx.setStorageSync('jumpTime', this.data.jumpTime),
      wx.setStorageSync('energyTime', this.data.energyTime)
    wx.setStorageSync('count', this.data.count)
    wx.setStorageSync('countTime', this.data.countTime)
    this.setData({
      count: this.data.count,
      walk: this.data.walk,
      run: this.data.run,
      jump: this.data.jump,
      circle: this.data.circle,
      ball: this.data.ball,
      bike: this.data.bike,
      tiao: this.data.tiao,
      energy: this.data.energy
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})