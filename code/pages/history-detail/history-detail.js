var app = getApp();
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
            service: res.service,
            title: res.title,
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