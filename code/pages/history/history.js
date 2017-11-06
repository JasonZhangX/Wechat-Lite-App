var app = getApp();
var AW = require('../../utils/util');
Page({
    data: {
        title: app.globalData.config.history.title,
        path: app.globalData.config.history.path,
    },
    onLoad: function () {
        
    },
    onShow: function () {
        this.list();
    },
    list: function () {
        var that = this;
        app.loading();
        wx.request({
            url: app.globalData.config.history.api,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res);
                that.formateData(res);
                console.log('success');
            },
            fail: function () {
                // fail
                console.log('fail');
            },
            complete: function () {
                // complete
                app.loading('hide');
            }
        })
    },
    formateData: function (res) {
        var incidentsData = [];
        if (res.data.incidents != null){
            res.data.incidents.forEach(function (value, index) {
                var incident = {
                    id: index,
                    title: value.title,
                    status: value.status,
                    state: value.state,
                    startDate: AW.formatTimeStr(value.startdate),
                    startMonth: AW.formatTimeStr(value.startdate, 'month'),
                    endDate: AW.formatTimeStr(value.enddate),
                    service: value.impacted[0].service,
                    area: AW.formatArea(value.impacted[0].regions),
                    description: value.updates[0].description
                };
                incidentsData.push(incident);
            });
            console.log(incidentsData);
        }
        this.setData({
            incidents: incidentsData
        });
    },
    viewDetail: function (event) {
        var detailId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../history-detail/history-detail?id=' + detailId
        });
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});