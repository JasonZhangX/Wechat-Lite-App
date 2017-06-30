//index.js
var AW = require('../../utils/util');
var app = getApp();
Page({
  data: {
    title: app.globalData.config.status.title,
    path: app.globalData.config.status.path,
    retryTimes: 0
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
  failover: function () {
    wx.redirectTo({
      url: '../failover/failover'
    });
  },
  isAPIServerDown: function () {

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
      fail: function (error) {
        if (self.data.retryTimes < app.globalData.config.maxRetryTimes) {
          app.popup({
            title: app.globalData.msg.NETWORK_ERROR,
            content: app.globalData.msg.RETRY_INFO,
            callback: self.checkStatus
          });
          self.data.retryTimes++;
        } else {
          app.popup({
            title: app.globalData.msg.NETWORK_ERROR,
            showCancel: false,
            content: error.errMsg,
            callback: self.failover
          });
        }
        console.log(error);
      },
      complete: function () {
        // complete
        app.loading('hide');
      }
    })
  },
  viewDetail: function (event) {
    var detailId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../incident-detail/incident-detail?id=' + detailId
    });
  },
  formateData: function (res) {
    var self = this;
    if (res.data.status === undefined) {
      return;
    }
    var lastUpdateTime = AW.formatTimeStr(res.data.lastupdated, 'countdown');
    var incedentsData = {};
    var areaData = {};
    var pageStle = '';
    if (res.data.status === 'OK' && res.data.incidents.length === 0) {
      incedentsData.title = app.globalData.msg.SERVICE_IS_OK;
      incedentsData.status = res.data.status;
      incedentsData.statusICON = AW.formatStatusICON(res.data.status, 128);
      areaData.chinaNorth = [];
      areaData.chinaEast = [];
      areaData.china = [];
      pageStle = 'full-height';
      self.setData({
        incidents: incedentsData,
        area: areaData,
        updateTime: lastUpdateTime,
        pageStle: pageStle,
      });
    } else {
      app.getServicesName(function () {
        incedentsData.incidentList = [];
        areaData.chinaNorth = [];
        areaData.chinaEast = [];
        areaData.china = [];
        res.data.incidents.forEach(function (item, index) {
          var incidentObj = {};
          incidentObj.id = index;
          incidentObj.status = item.status;
          incidentObj.icon = app.globalData.config.icon.baseURL + item.impacted[0].service + '.png';
          incidentObj.serviceName = app.globalData.serviceName[item.impacted[0].service];
          incidentObj.serviceId = item.impacted[0].service;
          incidentObj.startDate = AW.formatTimeStr(item.startdate);
          incidentObj.dataMilliseconds = (new Date(item.startdate)).getTime();
          incidentObj.area = AW.formatArea(item.impacted[0].regions);
          incidentObj.areaId = item.impacted[0].regions;
          if (AW.isArea('china-north', incidentObj.areaId)) {
            areaData.chinaNorth.push({
              serviceName: incidentObj.serviceName,
              serviceId: incidentObj.serviceId,
              status: incidentObj.status,
              statusText: AW.formatStatusStr(incidentObj.status),
            });
          }
          if (AW.isArea('china-east', incidentObj.areaId)) {
            areaData.chinaEast.push({
              serviceName: incidentObj.serviceName,
              serviceId: incidentObj.serviceId,
              status: incidentObj.status,
              statusText: AW.formatStatusStr(incidentObj.status),
            });
          }
          if (AW.isArea('global', incidentObj.areaId)) {
            areaData.china.push({
              serviceName: incidentObj.serviceName,
              serviceId: incidentObj.serviceId,
              status: incidentObj.status,
              statusText: AW.formatStatusStr(incidentObj.status),
            });
          }
          incidentObj.summary = AW.limitStr(item.updates[0].description, 45);
          incidentObj.description = item.updates[0].description;
          incedentsData.incidentList.push(incidentObj);
        });

        incedentsData.incidentList = AW.sortByPriority(incedentsData.incidentList);

        self.setData({
          incidents: incedentsData,
          area: areaData,
          updateTime: lastUpdateTime,
          pageStle: pageStle,
        });
      });
    }

  },
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: this.data.path
    }
  }
})