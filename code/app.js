//app.js
App({
  onLaunch: function () {
    this.getServicesName();
  },
  getServicesName: function () {
    var self = this;
    this.sendRequest({
      rUrl: self.globalData.config.serviceName.api,
      formateData: function (servicNameData) {
        self.globalData.serviceName = servicNameData;
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
    oParam.showCancel = oParam.showCancel || true;
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
    version: '0.0.8',
    config: {
      status: {
        title: '服务器仪表盘',
        path: 'pages/index/index',
        api: 'https://www.windowsazurestatus.cn/api/incidents?api-version=1.0',
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
        api: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/Content/support/shd.json'
      },
      historyDetail: {
        title: '历史详情',
        path: 'pages/history-detail/history-detail',
      },
      icon: {
        baseURL: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/media/images/shd/'
      },
      serviceName: {
        api: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/Content/support/services.json'
      }
    },
    msg: {
      LOADING: '努力加载中',
      SERVICE_IS_OK: '服务正常运行',
      ALL_SERVICE_IS_OK: '所有服务正常',
      CHINA_ALL: '中国地区',
      CHINA_EAST: '中国东区',
      CHINA_NORTH: '中国北区',
      GOOD: '服务正常',
      WARNING: '性能警告',
      ERROR: '服务中断',
      INFORMATION: '附加信息',
      NETWORK_ERROR: '服务器无响应',
      RETRY_INFO: '是否尝试重新连接？'
    }
  }
})