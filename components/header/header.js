const api_request = require('../../utils/util.js').api_request
const app = getApp()

Component({
  properties:{
    header_title:{
      type: String,
      value:'default title'
    }
  },
  data:{
    showLeft:false,
    category:{},
    categoryArr:[],
    scrollHeight:'1000px',
  },
  methods:{
    toggleLeft(){
      this.setData({
        showLeft: !this.data.showLeft,
      })
    }
  },
    attached(){
      let that = this
      wx.getSystemInfo({
        success:function(res){
          that.setData({
            scrollHeight: res.windowHeight + 'px'
          })
        }
      })
      api_request(`${app.globalData.api.baseUrl}${app.globalData.api.categoryList}`, {}, (res)=>{
        this.setData({
          category: res.data
        })
        console.log(this.data.category)
        let Arr = []
        for(let key in this.data.category){
          for(let keys in this.data.category[key].forums){
            Arr.push((this.data.category[key].forums[keys]))
          }
        }
        this.setData({
          categoryArr: Arr
        })
      },)
    }
})