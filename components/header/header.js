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
    scrollHeight:app.globalData.scrollHeight,
    currentbk : app.globalData.status.currentPlate
  },
  methods:{
    toggleLeft(){
      this.setData({
        showLeft: !this.data.showLeft,
      })
    },
    switchCategory(e){
      this.setData({
        showLeft: false
      })
      this.triggerEvent('changeCategory', e)
      app.globalData.status.currentPlate = e.currentTarget.dataset.id
      this.setData({
        currentbk: app.globalData.status.currentPlate
      })
      console.log(app.globalData.status)
    }
  },
    attached(){
      api_request(`${app.globalData.api.baseUrl}${app.globalData.api.categoryList}`, {}, (res)=>{
        this.setData({
          category: res.data
        })
        let Arr = []
        for(let key in this.data.category){
          for(let keys in this.data.category[key].forums){
            Arr.push((this.data.category[key].forums[keys]))
          }
        }
        this.setData({
          categoryArr: Arr
        })
        this.triggerEvent('ss', res.data)
      },)
    },
})