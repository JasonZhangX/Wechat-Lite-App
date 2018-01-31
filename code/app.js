//app.js
App({
  onLaunch: function () {
    this.getServicesName();
  },
  getServicesName: function (callback) {
    // var self = this;
    // this.sendRequest({
    //   rUrl: self.globalData.config.serviceName.api,
    //   formateData: function (servicNameData) {
    //     self.globalData.serviceName = servicNameData;
    //     callback && callback(servicNameData);
    //     console.log(self.globalData.serviceName);
    //   }
    // });
  },
  sendRequest: function (oParam) {
    var self = this;
    this.loading();
    wx.request({
      url: oParam.rUrl,
      data: {},
      dataType: 'json',
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
        //api: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/Content/support/shd/insidentData.json',
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
        api: 'https://www.azure.cn/static/jsons/shd.json'
      },
      historyDetail: {
        title: '历史详情',
        path: 'pages/history-detail/history-detail',
      },
      incidentDetail: {
        title: '事件详情',
        path: 'pages/history-detail/incident-detail',
      },
      failover: {
        title: '技术支持',
        path: 'pages/failover/failover',
      },
      icon: {
        baseURL: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/media/images/shd/',
        defaultURL: 'https://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/media/images/shd/defaultIcon.png',
      },
      serviceName: {
        api: 'https://www.azure.cn/static/jsons/services.json'
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
    },
    serviceName:
    {
      "virtual-machines": "虚拟机",
      "app-service\\web": "Web 应用",
      "app-service\\mobile": "移动应用",
      "app-service\\api": "API 应用",
      "cloud-services": "云服务",
      "batch": "批处理",
      "service-fabric": "Service Fabric",
      "virtual-machine-scale-sets": "虚拟机规模集",
      "cdn": "CDN",
      "expressroute": "ExpressRoute",
      "virtual-network": "虚拟网络",
      "traffic-manager": "流量管理器",
      "load-balancer": "负载均衡器",
      "vpn-gateway": "VPN 网关",
      "network-access": "网络基础设施",
      "application-gateway": "应用程序网关",
      "storage": "存储",
      "mobile-services": "移动服务",
      "media-services\\encoding": "媒体编码",
      "media-services\\on-demand-streaming": "实时和点播流媒体",
      "notification-hubs": "通知中心",
      "sql-database\\data-sync": "SQL 数据同步",
      "documentdb": "DocumentDB",
      "mysql": "MySQL Database on Azure",
      "sql-data-warehouse": "SQL 数据仓库",
      "redis-cache": "Redis 缓存",
      "sql-server-stretch-database": "SQL Server Stretch Database",
      "hdinsight": "HDInsight",
      "power-bi-embedded": "Power BI 工作区集合",
      "face-api": "人脸识别 API",
      "Emotion-api": "情绪识别 API",
      "Ecomputervision": "计算机视觉 API ",
      "stream-analytics": "流分析",
      "event-hubs": "事件中心",
      "iot-hub": "Azure IoT 中心",
      "iot-suite": "Azure IoT 套件",
      "service-bus": "服务总线",
      "active-directory": "Active Directory",
      "multi-factor-authentication": "多重身份验证",
      "key-vault": "密钥保管库",
      "access-control": "访问控制服务",
      "backup": "备份",
      "site-recovery": "站点恢复",
      "scheduler": "计划程序",
      "automation": "自动化",
      "azure-portal": "Azure 门户预览",
      "management-portal": "manage.windowsazure.cn",
      "azure-microsoft-cn": "www.azure.cn",
      "azure-resource-manager": "Azure 资源管理器",
      "api-management": "API管理",
      "cosmos-db": "Azure Cosmos DB",
      "expressroute\\circuits": "ExpressRoute Circuits",
      "expressroute\\gateways": "ExpressRoute 网关",
      "analysis-services": "Azure分析服务",
      "network-watcher":"网络观察程序",

    },
    serviceSlug:
    {
      "shd": {
        "category": [
          {
            "name": "计算",
            "service": [
              {
                "name": "虚拟机",
                "slug": "virtual-machines",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "云服务",
                "slug": "cloud-services",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "虚拟机规模集",
                "slug": "virtual-machine-scale-sets",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "网络",
            "service": [
              {
                "name": "CDN",
                "slug": "cdn",
                "regions": { "global": "true" }
              },
              {
                "-has-inner-services": "true",
                "name": "ExpressRoute",
                "slug": "expressroute",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                },
                "inner-services": {
                  "service": [
                    {
                      "name": "ExpressRoute Circuits",
                      "slug": "expressroute\\circuits"
                    },
                    {
                      "name": "ExpressRoute 网关",
                      "slug": "expressroute\\gateways"
                    }
                  ]
                }
              },
              {
                "name": "虚拟网络",
                "slug": "virtual-network",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "流量管理器",
                "slug": "traffic-manager",
                "regions": { "global": "true" }
              },
              {
                "name": "负载均衡器",
                "slug": "load-balancer",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "VPN 网关",
                "slug": "vpn-gateway",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "网络基础设施",
                "slug": "network-access",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "应用程序网关",
                "slug": "application-gateway",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                  "name": "网络观察程序",
                  "slug": "network-watcher",
                  "regions": {
                      "china-east": "true",
                      "china-north": "true"
                  }
              }              
            ]
          },
          {
            "name": "存储",
            "service": {
              "name": "存储",
              "slug": "storage",
              "regions": {
                "china-east": "true",
                "china-north": "true"
              }
            }
          },
          {
            "name": "Web + 移动",
            "service": [
              {
                "-has-inner-services": "true",
                "name": "应用服务",
                "slug": "app-service",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                },
                "inner-services": {
                  "service": [
                    {
                      "name": "Web 应用",
                      "slug": "app-service\\web"
                    },
                    {
                      "name": "移动应用",
                      "slug": "app-service\\mobile"
                    },
                    {
                      "name": "API 应用",
                      "slug": "app-service\\api"
                    }
                  ]
                }
              },
              {
                "name": "移动服务",
                "slug": "mobile-services",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "API管理",
                "slug": "api-management",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "-has-inner-services": "true",
                "name": "媒体服务",
                "slug": "media-services",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                },
                "inner-services": {
                  "service": [
                    {
                      "name": "媒体编码",
                      "slug": "media-services\\encoding"
                    },
                    {
                      "name": "实时和点播流媒体",
                      "slug": "media-services\\on-demand-streaming"
                    }
                  ]
                }
              },
              {
                "name": "通知中心",
                "slug": "notification-hubs",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "容器",
            "service": [
              {
                "name": "批处理",
                "slug": "batch",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "Service Fabric",
                "slug": "service-fabric",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
            ]
          },
          {
            "name": "数据库",
            "service": [
              {
                "-has-inner-services": "true",
                "name": "SQL 数据库",
                "slug": "sql-database",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                },
                "inner-services": {
                  "service": {
                    "name": "SQL 数据同步",
                    "slug": "sql-database\\data-sync"
                  }
                }
              },
              {
                "name": "Azure Cosmos DB",
                "slug": "cosmos-db",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "MySQL Database on Azure",
                "slug": "mysql",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "SQL 数据仓库",
                "slug": "sql-data-warehouse",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "Redis 缓存",
                "slug": "redis-cache",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "SQL Server Stretch Database",
                "slug": "sql-server-stretch-database",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "智能 + 分析",
            "service": [
              {
                "name": "HDInsight",
                "slug": "hdinsight",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "Power BI 工作区集合",
                "slug": "power-bi-embedded",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "Azure分析服务",
                "slug": "analysis-services",
                "regions": {
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "AI 和认知服务",
            "type": "s3l",
            "service": [
              {
                "-has-inner-services": "true",
                "name": "认知服务",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                },
                "inner-services": {
                  "service": [
                    {
                      "name": "人脸识别 API",
                      "slug": "face-api"
                    },
                    {
                      "name": "情绪识别 API",
                      "slug": "Emotion-api"
                    },
                    {
                      "name": "计算机视觉 API ",
                      "slug": "Ecomputervision"
                    }
                  ]
                }
              }
            ]
          },
          {
            "name": "物联网",
            "service": [
              {
                "name": "流分析",
                "slug": "stream-analytics",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "事件中心",
                "slug": "event-hubs",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "IoT 中心",
                "slug": "iot-hub",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "IoT 套件",
                "slug": "iot-suite",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "企业集成",
            "service": {
              "name": "服务总线",
              "slug": "service-bus",
              "regions": {
                "china-east": "true",
                "china-north": "true"
              }
            }
          },
          {
            "name": "安全性 + 身份",
            "service": [
              {
                "name": "Active Directory",
                "slug": "active-directory",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "多重身份验证",
                "slug": "multi-factor-authentication",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "密钥保管库",
                "slug": "key-vault",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "访问控制服务",
                "slug": "access-control",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              }
            ]
          },
          {
            "name": "监控 + 管理 ",
            "service": [
              {
                "name": "备份",
                "slug": "backup",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "站点恢复",
                "slug": "site-recovery",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "计划程序",
                "slug": "scheduler",
                "regions": {
                  "china-east": "true",
                  "china-north": "true"
                }
              },
              {
                "name": "自动化",
                "slug": "automation",
                "regions": { "china-north": "true" }
              },
              {
                "name": "Azure 门户预览",
                "slug": "azure-portal",
                "regions": { "global": "true" }
              },
              {
                "name": "manage.windowsazure.cn",
                "slug": "management-portal",
                "regions": { "global": "true" }
              },
              {
                "name": "www.azure.cn",
                "slug": "azure-microsoft-cn",
                "regions": { "global": "true" }
              },
              {
                "name": "Azure 资源管理器",
                "slug": "azure-resource-manager",
                "regions": { "global": "true" }
              }
            ]
          }
        ]
      }
    } 
  }
})