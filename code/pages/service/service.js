var app = getApp();
Page({
    data: {
        title: app.globalData.config.service.title,
        path: app.globalData.config.service.path,
    },
    onShow: function () {
        this.list();
    },
    list: function () {
        var that = this;
        this.loading();
        wx.request({
            url: app.globalData.config.service.api,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res);
                that.formateData(res.data);
                console.log('success');
            },
            fail: function () {
                // fail
                console.log('fail');
            },
            complete: function () {
                // complete
                wx.hideToast();
            }
        })
    },
    formateData: function (res) {
        this.setData(res);
        console.log(this.data);
    },
    loading: function () {
        wx.showToast({
            title: app.globalData.msg.LOADING,
            icon: 'loading',
            duration: 10000
        })
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});