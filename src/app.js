App({
  commonData: {
    number1: wx.getStorageSync('number1') > 0 ? wx.getStorageSync('number1') : 0,//缓存存储了多少项数据
    number2: wx.getStorageSync('number2') > 0 ? wx.getStorageSync('number2') : 0,//今天更新第几个数据,ic/tc/...+他
    food: {
      food1: 0,
      food2: 0,
      food3: 0,
      food4: 0
    },
    calorie: {
      breakfast: wx.getStorageSync('breakfast') > 0 ? wx.getStorageSync('breakfast') : 0,
      lunch: wx.getStorageSync('lunch') > 0 ? wx.getStorageSync('lunch') : 0,
      dinner: wx.getStorageSync('dinner') > 0 ? wx.getStorageSync('dinner') : 0,
      other: wx.getStorageSync('other') > 0 ? wx.getStorageSync('other') : 0,
      consume: wx.getStorageSync('consume') > 0 ? wx.getStorageSync('consume') : 0,
    },
    sport_consume: {
      walk: parseInt(wx.getStorageSync('walk')) > 0 ? parseInt(wx.getStorageSync('walk')) : 0,
      run: parseInt(wx.getStorageSync('run')) > 0 ? parseInt(wx.getStorageSync('run')) : 0,
      jump: parseInt(wx.getStorageSync('jump')) > 0 ? parseInt(wx.getStorageSync('jump')) : 0,
      circle: parseInt(wx.getStorageSync('circle')) > 0 ? parseInt(wx.getStorageSync('circle')) : 0,
      ball: parseInt(wx.getStorageSync('ball')) > 0 ? parseInt(wx.getStorageSync('ball')) : 0,
      bike: parseInt(wx.getStorageSync('bike')) > 0 ? parseInt(wx.getStorageSync('bike')) : 0,
      tiao: parseInt(wx.getStorageSync('tiao')) > 0 ? parseInt(wx.getStorageSync('tiao')) : 0,
      energy: parseInt(wx.getStorageSync('energy')) > 0 ? parseInt(wx.getStorageSync('energy')) : 0,
      count: parseInt(wx.getStorageSync('count')) > 0 ? parseInt(wx.getStorageSync('count')) : 0
    },
    list: [{
        //id: '288255',
        inCalorie: parseInt(wx.getStorageSync('ic0')) > 0 ? parseInt(wx.getStorageSync('ic0')) : 0,
        outCalorie: parseInt(wx.getStorageSync('oc0')) > 0 ? parseInt(wx.getStorageSync('oc0')) : 0,
        calorie: parseInt(wx.getStorageSync('tc0')) > 0 ? parseInt(wx.getStorageSync('ic0')) : 0,
        sport: parseInt(wx.getStorageSync('xh0')) > 0 ? parseInt(wx.getStorageSync('ic0')) : 0,
        add_date: parseInt(wx.getStorageSync('rq0')) > 0 ? parseInt(wx.getStorageSync('ic0')) : 0,
        /*year: 2019,
        month: 5,
        day: 28,*/
      },
      {
        //id: '288255',
        inCalorie: parseInt(wx.getStorageSync('ic1')) > 0 ? parseInt(wx.getStorageSync('ic1')) : 0,
        outCalorie: parseInt(wx.getStorageSync('oc1')) > 0 ? parseInt(wx.getStorageSync('oc1')) : 0,
        calorie: parseInt(wx.getStorageSync('tc1')) > 0 ? parseInt(wx.getStorageSync('tc1')) : 0,
        sport: parseInt(wx.getStorageSync('xh1')) > 0 ? parseInt(wx.getStorageSync('xh1')) : 0,
        add_date: parseInt(wx.getStorageSync('rq1')) > 0 ? parseInt(wx.getStorageSync('rq1')) : 0,
        /*year: 2019,
        month: 5,
        day: 28,*/
      },
      {
        //id: '288255',
        inCalorie: parseInt(wx.getStorageSync('ic2')) > 0 ? parseInt(wx.getStorageSync('ic2')) : 0,
        outCalorie: parseInt(wx.getStorageSync('oc2')) > 0 ? parseInt(wx.getStorageSync('oc2')) : 0,
        calorie: parseInt(wx.getStorageSync('tc2')) > 0 ? parseInt(wx.getStorageSync('tc2')) : 0,
        sport: parseInt(wx.getStorageSync('xh2')) > 0 ? parseInt(wx.getStorageSync('xh2')) : 0,
        add_date: parseInt(wx.getStorageSync('rq2')) > 0 ? parseInt(wx.getStorageSync('rq2')) : 0,
        /*year: 2019,
        month: 5,
        day: 28,*/
      }
    ]
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})