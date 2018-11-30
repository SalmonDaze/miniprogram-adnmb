const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

let api_request = function(url, data, success_callback, fail_callback){
  wx.request({
    url: url,
    data: data,
    method:'POST',
    header:{
      'content-type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
    },
    success:(res)=>{
      success_callback(res)
    },
    fail: (res)=>{
      fail_callback(res)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  api_request: api_request
}
