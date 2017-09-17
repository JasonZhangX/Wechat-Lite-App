var app = getApp();
var AW = require('../../utils/util');
Page({
    data: {
        title: app.globalData.config.service.title,
        path: app.globalData.config.service.path,
    },
    onShow: function () {
        this.list();
    },
    list: function () {
        // var that = this;
        // app.loading();
        // wx.request({
        //     url: app.globalData.config.service.api,
        //     data: {},
        //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //     // header: {}, // 设置请求的 header
        //     success: function (res) {
        //         // success
        //         console.log(res);
        //         that.formateData(res.data);
        //         console.log('success');
        //     },
        //     fail: function () {
        //         // fail
        //         console.log('fail');
        //     },
        //     complete: function () {
        //         // complete
        //         app.loading('hide');
        //     }
        // })
      this.formateData(app.globalData.serviceSlug);
    },
    formateData: function (res) {
        var incidentsData = getCurrentPages()[0].data.incidents.incidentList;
        if(incidentsData){
            res.shd.category.forEach(function(level1Item){
                if(level1Item.service.length > 0){
                    level1Item.service.forEach(function(level2Item){
                        if(AW.isIncidentService(level2Item.slug, incidentsData)){
                            var regionsData = AW.isIncidentService(level2Item.slug, incidentsData);
                            for(var i in regionsData){
                                level2Item.regions[i] = regionsData[i];
                            }
                            console.log(level2Item);    
                        };
                    });
                }else{
                    if(AW.isIncidentService(level1Item.slug, incidentsData)){
                        console.log(level1Item);      
                    }
                }

            });
        }

        this.setData(res);
        console.log(this.data);
        //Get all service slug
        // var servicNameData = {};
        // this.data.shd.category.forEach(function (value, index) {
        //     if (value.service.length > 1) {
        //         value.service.forEach(function (cValue, cIndex) {
        //             if (cValue['inner-services'] !== undefined) {
        //                 console.log(cValue['inner-services'].service.length);
        //                 if (cValue['inner-services'].service.length) {
        //                     cValue['inner-services'].service.forEach(function (ccValue, ccIndex) {
        //                         servicNameData[ccValue.slug] = ccValue.name;
        //                     })
        //                 } else {
        //                     servicNameData[cValue['inner-services'].service.slug] = cValue['inner-services'].service.name;
        //                 }
        //             } else {
        //                 servicNameData[cValue.slug] = cValue.name;
        //             }
        //         });
        //     } else {
        //         if (value.service.slug !== undefined) {
        //             servicNameData[value.service.slug] = value.service.name;
        //         }
        //     }

        // });
        // console.log(JSON.stringify(servicNameData));
        // app.globalData.serviceName = servicNameData;

    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            path: this.data.path
        }
    }
});