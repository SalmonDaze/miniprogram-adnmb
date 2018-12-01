//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    api:{
      baseUrl: 'https://nmb.fastmirror.org/',
      categoryList: 'Api/getForumList?appid=wechatapp',
      timeLine: 'Api/timeline',
    }
  }
})