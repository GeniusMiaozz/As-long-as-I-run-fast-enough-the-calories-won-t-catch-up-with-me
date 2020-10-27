function GoToRencentlyDatas() {
  wx.navigateTo({
    url: '../RencentlyDatas/RencentlyDatas',
  })
}
function GoToTodayReport() {
  wx.navigateTo({
    url: '../TodayReport/TodayReport',
  })
}
module.exports = {
  GoToTodayReport: GoToTodayReport,
  GoToRencentlyDatas: GoToRencentlyDatas,
  formatTime: formatTime
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
