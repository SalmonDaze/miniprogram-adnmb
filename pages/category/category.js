const api_request = require('../../utils/util.js').api_request
const app = getApp()
const moment = require('../../utils/moment.min.js')
const wxParse = require('../../wxParse/wxParse.js')

function formatTime(time){
  moment.locale('zh-cn')
  let date = time.substr(0,time.indexOf('('))
  let now = moment().format('YYYYMMDD')
  return moment(date,'YYYYMMDD').fromNow()
}

Component({
  properties:{
    forum_id:{
      type:Number,
      value:4
    },
    page:{
      type: Number,
      value:1
    }
  },
  methods:{

  },
  data:{
    strand:[]
  },
  attached(){
    let that = this
    api_request(`${app.globalData.api.baseUrl}${app.globalData.api.forumUrl}`, 
    { 
      page:that.data.page,
      id:that.data.forum_id
      },
     function (res) {
       let list = []
       let ss = []
       for(let value in res.data){
         res.data[value].now = formatTime(res.data[value].now)
         list.push(res.data[value])
         ss.push(res.data[value].content)
       }
       wxParse.wxParseTemArray('_strand', 'ssr', ss.length, that)
       that.setData({
         strand: list
       })
     }
     )
  }
})