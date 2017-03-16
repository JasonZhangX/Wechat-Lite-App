//index.js
//获取应用实例
var AW = require('../../utils/util');
var app = getApp()
Page({
  config: {
    api: 'https://www.windowsazurestatus.cn/api/incidents?api-version=1.0',
    interval: 120000
  },
  data: {
    incidents:{
      status: 'OK',
      title: '服务正常运行',
      area: '中国地区',
      desctiption: '中国地区中国地区中中国地区中国地区中中国地区中国地区中中国地区中国地区',
    },
    area:{
      chinaNorth: '所有服务正常',
      chinaEast: '所有服务正常',
      china: '所有服务正常'
    },
    updateTime: AW.formatTime(new Date())
  },
  init: function(){
    this.checkStatus();
    setInterval(this.checkStatus, this.config.interval);
  },
  onLoad: function () {
    // this.checkStatus();
    this.init();
  },
  onShow: function(){
    //this.checkStatus();
  },
  checkStatus: function(){
    var that = this;
    this.loading(); 
    wx.request({
      url: that.config.api,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideToast();
        console.log('success');
      },
      fail: function() {
        // fail
        wx.hideToast();
        console.log('fail');
      },
      complete: function() {
        // complete
      }
    })
  },
  formateData: function(data){
    return {};
  },
  loading: function(){
    wx.showToast({
      title: '努力加载中',
      icon: 'loading',
      duration: 10000
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
})