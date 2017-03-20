var app = getApp();
Page({
    data: {
        title: app.globalData.config.historyDetail.title,
        path: app.globalData.config.historyDetail.path,
    },
    onLoad: function (data) {
        console.log(data.id);
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});