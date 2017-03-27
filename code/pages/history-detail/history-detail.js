var app = getApp();
var AW = require('../../utils/util');
Page({
    data: {
        title: app.globalData.config.historyDetail.title,
        path: app.globalData.config.historyDetail.path,
    },
    onLoad: function (data) {
        console.log(data.id);
        console.log(getCurrentPages());   
        var historyData = getCurrentPages()[0].data.incidents[data.id];
        this.formateData(historyData);
    },
    formateData: function (res) {
        var historyDetail = {
            service: app.globalData.serviceName[res.service],
            icon: app.globalData.config.icon.baseURL + res.service + '.png',
            title: res.title,
            status: AW.formatStatus(res.status),
            area: res.area,
            description: res.description,
            startDate: res.startDate,
            endDate: res.endDate
        };
        this.setData({
            history: historyDetail
        });
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});