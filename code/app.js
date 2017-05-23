//app.js
App({
  onLaunch: function () {
    this.getServicesName();
  },
  getServicesName: function (callback) {
    var self = this;
    this.sendRequest({
      rUrl: self.globalData.config.serviceName.api,
      formateData: function (servicNameData) {
        self.globalData.serviceName = servicNameData;
        callback && callback(servicNameData);
        console.log(self.globalData.serviceName);
      }
    });
  },
  sendRequest: function (oParam) {
    var self = this;
    this.loading();
    wx.request({
      url: oParam.rUrl,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        oParam.formateData && oParam.formateData(res.data);
        console.log('success');
      },
      fail: function () {
        // fail

        console.log('fail');
      },
      complete: function () {
        // complete
        self.loading('hide');
      }
    })
  },
  popup: function(oParam){
    oParam.title = oParam.title || '';
    oParam.content = oParam.content || '';
    oParam.callback = oParam.callback || function(){};
    oParam.showCancel = oParam.showCancel !== false;
    wx.showModal({
      title: oParam.title,
      content: oParam.content,
      showCancel: oParam.showCancel,
      confirmColor: '#03a9f4',
      success: function(res) {
        if (res.confirm) {
          oParam.callback && oParam.callback();
          console.log('用户点击确定')
        }
      }
    })    
  },
  loading: function (param) {
    var self = this;
    if (param === 'hide') {
      wx.hideToast();
    } else {
      wx.showToast({
        title: self.globalData.msg.LOADING,
        icon: 'loading',
        duration: 10000
      })
    }
  },
  globalData: {
    appName: 'Azure服务器仪表盘',
    version: '0.0.9',
    config: {
      status: {
        title: '服务器仪表盘',
        path: 'pages/index/index',
        api: 'https://www.azure.cn/support/status-api?api=incidents',
        //api: 'http://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/Content/support/shd/insidentData.json',
        interval: 120000
      },
      history: {
        title: '历史记录',
        path: 'pages/history/history',
        api: 'https://www.azure.cn/support/status-api?api=history'
        //interval: 120000
      },
      service: {
        title: '所有服务',
        path: 'pages/service/service',
        api: 'https://wacn-ppe.chinacloudsites.cn/static/jsons/shd.json'
      },
      historyDetail: {
        title: '历史详情',
        path: 'pages/history-detail/history-detail',
      },
      incidentDetail: {
        title: '事件详情',
        path: 'pages/history-detail/incident-detail',
      },
      icon: {
        baseURL: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/media/images/shd/',
        defaultURL: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/media/images/shd/defaultIcon.png',
      },
      serviceName: {
        api: 'https://wacn-ppe.chinacloudsites.cn/static/jsons/services.json'
      },
      maxRetryTimes: 3
    },
    msg: {
      LOADING: '努力加载中',
      SERVICE_IS_OK: '服务正常运行',
      ALL_SERVICE_IS_OK: '所有服务正常',
      CHINA_ALL: '中国地区',
      CHINA_EAST: '中国东部',
      CHINA_NORTH: '中国北部',
      GOOD: '良好',
      WARNING: '警告',
      ERROR: '错误',
      INFORMATION: '信息',
      NETWORK_ERROR: '状态服务器无响应',
      RETRY_INFO: '是否尝试重新连接？'
    }
  }
})