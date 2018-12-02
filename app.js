//app.js
App({
  onLaunch: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
          that.globalData.scrollHeight = res.windowHeight + 'px'
      }
    })
  },
  globalData: {
    userInfo: null,
    api:{
      baseUrl: 'https://nmb.fastmirror.org/',
      categoryList: 'Api/getForumList?appid=wechatapp',
      timeLine: 'Api/timeline',
      forumUrl:'Api/showf?appid=wechatapp',
    },
    scrollHeight:'',
    status:{
      currentPlate: 4
    }
  }
})