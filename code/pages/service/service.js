var app = getApp();
Page({
    data: {
        title: app.globalData.config.service.title,
        path: app.globalData.config.service.path,
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});