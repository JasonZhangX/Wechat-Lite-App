//app.js
App({
  onLaunch: function () {

  },
  globalData:{
    appName: 'Azure服务器仪表盘',
    version: '0.0.2',
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
        api: 'https://www.azure.cn/support/status-api?api=history',
        //interval: 120000
      },
      service: {
        title: '所有服务',
        path: 'pages/service/service',
      },
      historyDetail: {
        title: '历史详情',
        path: 'pages/history-detail/history-detail',
      }
    },
    msg:{
      LOADING: '努力加载中',
      SERVICE_IS_OK: '服务正常运行',
      ALL_SERVICE_IS_OK: '所有服务正常',
      CHINA_ALL: '中国地区',
      CHINA_EAST: '中国东区',
      CHINA_NORTH: '中国北区'
    }
  }
})