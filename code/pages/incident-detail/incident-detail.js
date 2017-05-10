var app = getApp();
var AW = require('../../utils/util');
Page({
    data: {
        title: app.globalData.config.incidentDetail.title,
        path: app.globalData.config.incidentDetail.path,
    },
    onLoad: function (data) {
        console.log(data.id);
        console.log(getCurrentPages());   
        var incidentData = getCurrentPages()[0].data.incidents.incidentList[data.id];
        this.formateData(incidentData);
    },
    formateData: function (res) {
        var incidentDetail = {
            service: app.globalData.serviceName[res.serviceId],
            icon: app.globalData.config.icon.baseURL + res.serviceId + '.png',
            title: res.serviceName,
            status: AW.formatStatusStr(res.status),
            statusICON: AW.formatStatusICON(res.status,20),
            area: res.area,
            description: res.description,
            startDate: res.startDate,
            endDate: res.endDate
        };
        this.setData({
            incident: incidentDetail
        });
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});