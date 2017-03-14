//index.js
//获取应用实例
var app = getApp()
Page({
data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  add: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  onLoad: function () {
    console.log('onLoad')

  },
  viewTap: function () {
    console.log('view tap')
  },
   tapName: function(event) {
    console.log(event)
  }
})
