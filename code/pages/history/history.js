var app = getApp();
Page({
    data: {
        title: app.globalData.config.history.title,
        path: app.globalData.config.history.path,        
        history: [{
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        },
        {
            id: '2017',
            date: '2017 03-02',
            service: 'Virtual Machines',
            area: '中国北区'
        }]
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