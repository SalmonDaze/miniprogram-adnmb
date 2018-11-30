//index.js
//获取应用实例
const app = getApp()
const api_request = require('../../utils/util.js').api_request

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    api_request('http://adnmb1.com/Api/timeline',{},function(res){console.log(res)})
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
