//index.js
//获取应用实例
var AW = require('../../utils/util');
var app = getApp();
Page({
  data: {
    title: app.globalData.config.status.title,
    path: app.globalData.config.status.path,
  },
  init: function () {
    this.checkStatus();
    setInterval(this.checkStatus, app.globalData.config.status.interval);
  },
  onLoad: function () {
    // this.checkStatus();
    this.init();
  },
  onShow: function () {
    //this.checkStatus();
  },
  checkStatus: function () {
    var self = this;
    app.loading();
    wx.request({
      url: app.globalData.config.status.api,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        self.formateData(res);
        console.log('success');
      },
      fail: function () {
        app.popup({
          title: app.globalData.msg.NETWORK_ERROR,
          content: app.globalData.msg.RETRY_INFO,
          callback: self.checkStatus
        });
        console.log('fail');
      },
      complete: function () {
        // complete
        app.loading('hide');
      }
    })
  },
  formateData: function (res) {
    if (res.data.status === undefined) {
      return;
    }
    var lastUpdateTime = AW.formatTimeStr(res.data.lastupdated);
    var incedentsData = {};
    var areaData = {};
    if (res.data.status === 'OK' && res.data.incidents.length === 0) {
      incedentsData.title = app.globalData.msg.SERVICE_IS_OK;
      incedentsData.statusICON = AW.formatStatusICON(res.data.status, 128);
      areaData.chinaNorth = app.globalData.msg.ALL_SERVICE_IS_OK;
      areaData.chinaEast = app.globalData.msg.ALL_SERVICE_IS_OK;
      areaData.china = app.globalData.msg.ALL_SERVICE_IS_OK;
    } else {
      incedentsData.title = '';
      incedentsData.statusICON = AW.formatStatusICON(res.data.status, 128);
      areaData.chinaNorth = app.globalData.msg.ALL_SERVICE_IS_OK;
      areaData.chinaEast = app.globalData.msg.ALL_SERVICE_IS_OK;
      areaData.china = app.globalData.msg.ALL_SERVICE_IS_OK;
    }
    this.setData({
      incidents: incedentsData,
      area: areaData,
      updateTime: lastUpdateTime
    });
  },
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: this.data.path
    }
  }
})