//index.js
//获取应用实例
const app = getApp()
const api_request = require('../../utils/util.js').api_request

let debounce = true

Page({
  data: {
    forum_id:4,
    page:1,
    isLoading: true,
    bktitle:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchLoad:function () {
    this.setData({
      isLoading : false
    })
  },
  change:function(info){
    this.setData({
      forum_id: info.detail.currentTarget.dataset.id,
      bktitle:info.detail._relatedInfo.anchorTargetText
    })
    this.selectComponent("#list").changeCategory()
    this.setData({
      isLoading: true
    })
  },
  getTitle:function(res){
    let that = this
    for(let i in res.detail){
      for(let j in res.detail[i].forums){
        if(that.data.forum_id == res.detail[i].forums[j].id){
          that.setData({
            bktitle: res.detail[i].forums[j].name
          })
        }
      }
    }
  },
  onPageScroll(e) {
    let that = this
    let query = wx.createSelectorQuery()
    query.select('.container').boundingClientRect().exec(function (res) {
      if (e.scrollTop > res[0].height * 0.80 ) {
        if (debounce){
          that.setData({
            page: that.data.page += 1
          })
          that.selectComponent("#list").getData();
          debounce = false
          setTimeout(()=>{
            debounce = true
          }, 1000)
        }
      }
    })
  }
})
