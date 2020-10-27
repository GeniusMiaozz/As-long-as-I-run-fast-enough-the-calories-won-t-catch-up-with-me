// pages/home/home.js
var common = require('../../utils/common.js');
var app = getApp();
var uk, dk; /*全局变量定义方式*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/images/YongHu.png',
    src1: '/images/Middle.png',
    name: '人类',
    up_kaluli: '???',
    down_kaluli: '???',
    kaluli_review: "你的健康，私人订制。",
    choose1: '请登陆后进行操作！',
    choose2: '登录都懒还想减肥？'
  },

  getMyInfo: function(e) { /*登录并更新信息*/
    let info = e.detail.userInfo;
    uk = app.commonData.calorie.breakfast + app.commonData.calorie.lunch + app.commonData.calorie.dinner
    dk = app.commonData.calorie.consume
    this.setData({
      src: info.avatarUrl, //更新图片来源
      name: info.nickName, //更新昵称
      isLogin: true,
      choose1: '点击查看近日记录数据>',
      choose2: '点击生成今日减肥海报>',
      up_kaluli: uk,
      down_kaluli: dk,
    })
    if (uk > dk) {
      this.setData({
        kaluli_review: '今日养膘计划(1/1)√',
        src1: '/images/Left.png'
      })
    } else if (uk < dk) {
      this.setData({
        kaluli_review: '今日养生计划(1/1)√',
        src1: '/images/Right.png',
      })
    } else if (uk == dk) {
      this.setData({
        kaluli_review: '千钧一发。',
        src1: '/images/Middle.png',
      })
    }
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var today_date = year + '-' + month + '-' + day; //今天的日期，形式如“2019-5-29”
    wx.setStorageSync('breakfast', 10)
    wx.setStorageSync('lunch', 20)
    wx.setStorageSync('dinner', 11)
    wx.setStorageSync('other', 11)
    wx.setStorageSync('consume', 21)
    wx.setStorageSync('ic0', 10);
    wx.setStorageSync('ic1', 20);
    wx.setStorageSync('ic2', 30);
    wx.setStorageSync('oc0', 11);
    wx.setStorageSync('oc1', 21);
    wx.setStorageSync('oc2', 31);
    wx.setStorageSync('tc0', 12);
    wx.setStorageSync('tc1', 22);
    wx.setStorageSync('tc2', 32);
    wx.setStorageSync('xh0', 13);
    wx.setStorageSync('xh1', 23);
    wx.setStorageSync('xh2', 33);
    wx.setStorageSync('rq0', '2019-5-27');
    wx.setStorageSync('rq1', '2019-5-28');
    wx.setStorageSync('rq2', '2019-5-29');
    wx.setStorageSync('today_number', 1)
    app.commonData.number1 = parseInt(wx.getStorageSync('today_number')) > 0 ? parseInt(wx.getStorageSync('today_number')) : 0; 
    console.log(parseInt(wx.getStorageSync('other')))
    if (parseInt(app.commonData.number1) < 3) { //首先判断是否已大于缓存项目最大容量，未大于则从第一个未存的地方开始存
      for (var i = 0; i < 3; i++) { //从缓存数据第一项开始遍历，遇到第一个日期和今天日期想等的更新今天数据
        if (today_date == wx.getStorageSync('rq' + i)) { //仍然为今天数据，更新今天
          app.commonData.number2 = i; //今天继续更新第i项数据，赋值给app.commonData.number2
          app.commonData.list[i].inCalorie = parseInt(wx.getStorageSync('ic' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].outCalorie = parseInt(wx.getStorageSync('oc' + i)) > 0 ? parseInt(wx.getStorageSync('oc' + i)) : 0;
          app.commonData.list[i].calorie = parseInt(wx.getStorageSync('tc' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].sport = parseInt(wx.getStorageSync('xh' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].add_date = parseInt(wx.getStorageSync('rq' + i)) > 0 ? wx.getStorageSync('rq' + i) : 0;
          app.commonData.calorie.breakfast = parseInt(wx.getStorageSync('breakfast')) > 0 ? parseInt(wx.getStorageSync('breakfast')) : 0;
          app.commonData.calorie.lunch = parseInt(wx.getStorageSync('lunch')) > 0 ? parseInt(wx.getStorageSync('lunch')) : 0;
          app.commonData.calorie.dinner = parseInt(wx.getStorageSync('dinner')) > 0 ? parseInt(wx.getStorageSync('dinner')) : 0;
          app.commonData.calorie.other = parseInt(wx.getStorageSync('other')) > 0 ? parseInt(wx.getStorageSync('other')) : 0;
          app.commonData.sport_consume.walk = parseInt(wx.getStorageSync('walk')) > 0 ? parseInt(wx.getStorageSync('walk')) : 0;
          app.commonData.sport_consume.run = parseInt(wx.getStorageSync('run')) > 0 ? parseInt(wx.getStorageSync('run')) : 0;
          app.commonData.sport_consume.jump = parseInt(wx.getStorageSync('jump')) > 0 ? parseInt(wx.getStorageSync('jump')) : 0;
          app.commonData.sport_consume.circle = parseInt(wx.getStorageSync('circle')) > 0 ? parseInt(wx.getStorageSync('circle')) : 0;
          app.commonData.sport_consume.ball = parseInt(wx.getStorageSync('ball')) > 0 ? parseInt(wx.getStorageSync('ball')) : 0;
          app.commonData.sport_consume.bike = parseInt(wx.getStorageSync('bike')) > 0 ? parseInt(wx.getStorageSync('bike')) : 0;
          app.commonData.sport_consume.tiao = parseInt(wx.getStorageSync('tiao')) > 0 ? parseInt(wx.getStorageSync('tiao')) : 0;
          app.commonData.sport_consume.energy = parseInt(wx.getStorageSync('energy')) > 0 ? parseInt(wx.getStorageSync('energy')) : 0;
          app.commonData.sport_consume.count = parseInt(wx.getStorageSync('count')) > 0 ? parseInt(wx.getStorageSync('count')) : 0;
          for (i = i + 1; i < 3; i++) {
            app.commonData.list[i].inCalorie = 0; //list中最后的项用新值0
            app.commonData.list[i].outCalorie = 0;
            app.commonData.list[i].calorie = 0;
            app.commonData.list[i].sport = 0;
            app.commonData.list[i].add_date = 0;
          }
          break;
        } else if (i != 2) {
          app.commonData.list[i].inCalorie = parseInt(wx.getStorageSync('ic' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].outCalorie = parseInt(wx.getStorageSync('oc' + i)) > 0 ? parseInt(wx.getStorageSync('oc' + i)) : 0;
          app.commonData.list[i].calorie = parseInt(wx.getStorageSync('tc' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].sport = parseInt(wx.getStorageSync('xh' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].add_date = parseInt(wx.getStorageSync('rq' + i)) > 0 ? wx.getStorageSync('rq' + i) : 0;
        } else if (i == 2) { //如果前三个遍历过之后，最后一个也与今天日期不同，则超出最大缓存容量开始清除最前缓存，更新最后一项
          for (var i = 0; i < 2; i++) { //把缓存中的后两项赋值给list中的前两项
            var y = parseInt(i) + 1
            app.commonData.list[i].inCalorie = parseInt(wx.getStorageSync('ic' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('ic' + parseInt(y))) : 0;
            app.commonData.list[i].outCalorie = parseInt(wx.getStorageSync('oc' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('oc' + parseInt(y))) : 0;
            app.commonData.list[i].calorie = parseInt(wx.getStorageSync('tc' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('ic' + parseInt(y))) : 0;
            app.commonData.list[i].sport = parseInt(wx.getStorageSync('xh' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('ic' + parseInt(y))) : 0;
            app.commonData.list[i].add_date = parseInt(wx.getStorageSync('rq' + y)) > 0 ? wx.getStorageSync('rq' + y) : 0;
          }
          app.commonData.list[2].inCalorie = 0; //list中最后一项先用新值0
          app.commonData.list[2].outCalorie = 0;
          app.commonData.list[2].calorie = 0;
          app.commonData.list[2].sport = 0;
          app.commonData.list[2].add_date = today_date; //最后一项的日期用今天的日期
          app.commonData.calorie.breakfast = 0;
          app.commonData.calorie.lunch = 0;
          app.commonData.calorie.dinner = 0;
          app.commonData.calorie.other =  0;
          app.commonData.sport_consume.walk = 0;
          app.commonData.sport_consume.run = 0;
          app.commonData.sport_consume.jump = 0;
          app.commonData.sport_consume.circle = 0;
          app.commonData.sport_consume.ball = 0;
          app.commonData.sport_consume.bike = 0;
          app.commonData.sport_consume.tiao = 0;
          app.commonData.sport_consume.energy = 0;
          app.commonData.sport_consume.count = 0;
          app.commonData.number2 = 2; //保证每次更新最后一项数据
          wx.setStorageSync('today_number', parseInt(app.commonData.number1) + 1);
        }
      }
    } else if (parseInt(app.commonData.number1) >= 3) { //已经超出最大容量，直接更新最后一项并把后两项赋值给list前两项
      if (today_date == wx.getStorageSync('rq2')) { //仍然为今天数据，更新今天
        for (var i = 0; i < 3; i++) { //从缓存数据第一项开始遍历，遇到第一个日期和今天日期想等的更新今天数据
          app.commonData.list[i].inCalorie = parseInt(wx.getStorageSync('ic' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].outCalorie = parseInt(wx.getStorageSync('oc' + i)) > 0 ? parseInt(wx.getStorageSync('oc' + i)) : 0;
          app.commonData.list[i].calorie = parseInt(wx.getStorageSync('tc' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].sport = parseInt(wx.getStorageSync('xh' + i)) > 0 ? parseInt(wx.getStorageSync('ic' + i)) : 0;
          app.commonData.list[i].add_date = parseInt(wx.getStorageSync('rq' + i)) > 0 ? wx.getStorageSync('rq' + i) : 0;
        }
        app.commonData.calorie.breakfast = parseInt(wx.getStorageSync('breakfast')) > 0 ? parseInt(wx.getStorageSync('breakfast')) : 0;
        app.commonData.calorie.lunch = parseInt(wx.getStorageSync('lunch')) > 0 ? parseInt(wx.getStorageSync('lunch')) : 0;
        app.commonData.calorie.dinner = parseInt(wx.getStorageSync('dinner')) > 0 ? parseInt(wx.getStorageSync('dinner')) : 0;
        app.commonData.calorie.other = parseInt(wx.getStorageSync('other')) > 0 ? parseInt(wx.getStorageSync('other')) : 0;
        app.commonData.sport_consume.walk = parseInt(wx.getStorageSync('walk')) > 0 ? parseInt(wx.getStorageSync('walk')) : 0;
        app.commonData.sport_consume.run = parseInt(wx.getStorageSync('run')) > 0 ? parseInt(wx.getStorageSync('run')) : 0;
        app.commonData.sport_consume.jump = parseInt(wx.getStorageSync('jump')) > 0 ? parseInt(wx.getStorageSync('jump')) : 0;
        app.commonData.sport_consume.circle = parseInt(wx.getStorageSync('circle')) > 0 ? parseInt(wx.getStorageSync('circle')) : 0;
        app.commonData.sport_consume.ball = parseInt(wx.getStorageSync('ball')) > 0 ? parseInt(wx.getStorageSync('ball')) : 0;
        app.commonData.sport_consume.bike = parseInt(wx.getStorageSync('bike')) > 0 ? parseInt(wx.getStorageSync('bike')) : 0;
        app.commonData.sport_consume.tiao = parseInt(wx.getStorageSync('tiao')) > 0 ? parseInt(wx.getStorageSync('tiao')) : 0;
        app.commonData.sport_consume.energy = parseInt(wx.getStorageSync('energy')) > 0 ? parseInt(wx.getStorageSync('energy')) : 0;
        app.commonData.sport_consume.count = parseInt(wx.getStorageSync('count')) > 0 ? parseInt(wx.getStorageSync('count')) : 0;
        app.commonData.number2 = 2; //今天继续更新第i项数据，赋值给app.commonData.number2
      } else { //最后一个也与今天日期不同，则是新的一天，则超出最大缓存容量开始清除最前缓存，更新最后一项
        for (var i = 0; i < 2; i++) { //把缓存中的后两项赋值给list中的前两项
          var y = parseInt(i) + 1
          app.commonData.list[i].inCalorie = parseInt(wx.getStorageSync('ic' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('ic' + parseInt(y))) : 0;
          app.commonData.list[i].outCalorie = parseInt(wx.getStorageSync('oc' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('oc' + parseInt(y))) : 0;
          app.commonData.list[i].calorie = parseInt(wx.getStorageSync('tc' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('tc' + parseInt(y))) : 0;
          app.commonData.list[i].sport = parseInt(wx.getStorageSync('xh' + parseInt(y))) > 0 ? parseInt(wx.getStorageSync('xh' + parseInt(y))) : 0;
          app.commonData.list[i].add_date = parseInt(wx.getStorageSync('rq' + y)) > 0 ? wx.getStorageSync('rq' + y) : 0;
        }
        app.commonData.list[2].inCalorie = 0; //list中最后一项先用新值0
        app.commonData.list[2].outCalorie = 0;
        app.commonData.list[2].calorie = 0;
        app.commonData.list[2].sport = 0;
        app.commonData.list[2].add_date = today_date; //最后一项的日期用今天的日期
        app.commonData.calorie.breakfast = 0;
        app.commonData.calorie.lunch = 0;
        app.commonData.calorie.dinner = 0;
        app.commonData.calorie.other =  0;
        app.commonData.sport_consume.walk = 0;
        app.commonData.sport_consume.run = 0;
        app.commonData.sport_consume.jump = 0;
        app.commonData.sport_consume.circle = 0;
        app.commonData.sport_consume.ball = 0;
        app.commonData.sport_consume.bike = 0;
        app.commonData.sport_consume.tiao = 0;
        app.commonData.sport_consume.energy = 0;
        app.commonData.sport_consume.count = 0;
        app.commonData.number2 = 2;
        wx.setStorageSync('today_number', parseInt(app.commonData.number1) + 1);
      }
    }
  },

  GoToTodayReport: function(e) {
    common.GoToTodayReport(e.currentTarget.dataset.id)
  },
  GoToRencentlyDatas: function(e) {
    common.GoToRencentlyDatas(e.currentTarget.dataset.id)
  },
  clearStorage: function() {
    wx.clearStorage()
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