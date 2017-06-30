var app = getApp();
Page({
    data: {
        title: app.globalData.config.failover.title,
        path: app.globalData.config.failover.path,
    },
    callTel: function(e){
        console.log(e);
        var telNumber = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: telNumber
        })       
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});