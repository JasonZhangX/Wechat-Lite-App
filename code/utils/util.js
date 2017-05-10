var app = getApp();
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

var printf = function () {
  var num = arguments.length;
  var oStr = arguments[0];
  for (var i = 1; i < num; i++) {
    var pattern = "\\{" + (i - 1) + "\\}";
    var re = new RegExp(pattern, "g");
    oStr = oStr.replace(re, arguments[i]);
  }
  return oStr;
}

var formatTimeStr = function (time, result) {
  var reg = /(\d{4})(\-)(\d{2}\-\d{2})(\w)(\d{2}\:\d{2}\:\d{2})(\.\d{3}\w)/g;
  var replacement;
  switch (result) {
    case 'date':
      replacement = '$1-$3';
      break;
    case 'month':
      replacement = '$1 $3';
      break;
    case 'time':
      replacement = '$5';
      break;
    default:
      replacement = '$1-$3 $5';
  }
  return time.replace(reg, replacement);
}

var formatArea = function (apiArea) {
  var area = '';
  var aMap = {
    'global': app.globalData.msg['CHINA_ALL'],
    'china-east': app.globalData.msg['CHINA_EAST'],
    'china-north': app.globalData.msg['CHINA_NORTH']
  }
  apiArea.forEach(function (value, index) {
    if(index === 0){
      area = area + aMap[value];
    }else{
      area = area + '/' + aMap[value];
    }
    
  })
  return area;
}

var isArea = function(areaId, regionsArr){
  var hasArea = false;
  for(var item in regionsArr){
    if(areaId === regionsArr[item]){
      hasArea = true;
      break;
    }
  }
  return hasArea;
}

var isIncidentService = function(slug, incidentArr){
  var isService = false;
  if(incidentArr.length>0){
    for(var i=0; i<incidentArr.length; i++){
      if(incidentArr[i].serviceId === slug){
        var tempObj = {};
        incidentArr[i].areaId.forEach(function(item){
          tempObj[item] = incidentArr[i].status;
        });
        isService = tempObj;
        break;
      }
    }  
  }
  return isService;
}

var formatStatusStr = function(status){
    var sMap = {
    'good': app.globalData.msg['GOOD'],
    'warning': app.globalData.msg['WARNING'],
    'error': app.globalData.msg['ERROR'],
    'information': app.globalData.msg['INFORMATION']
  }
  return sMap[status];
}

var formatStatusICON = function(status, size){
    var sMap = {
    'good': {
      type:'success',
      size: size
    },
    'OK': {
      type:'success',
      size: size
    },
    'warning': {
      type:'safe_warn',
      size: size
    },
    'error': {
      type:'warn',
      size: size
    },
    'information': {
      type:'info',
      size: size
    }
  }
  return sMap[status];
}

var sortByPriority = function(array){
  
}

var getServiceIcon = function(serviceId, callback){
  var iconImgae = new Image();
  var imageURL = app.globalData.config.icon.baseURL + serviceId + '.png';
  iconImgae.src = imageURL;
  iconImgae.addEventListener('load', function(){
      callback && callback(imageURL);
  });
  iconImgae.addEventListener('error', function(){
      callback && callback(app.globalData.config.icon.defaultURL);
  });
}

var limitStr = function(textStr, limit){
  return textStr.substring(0, limit) + '...';
}

module.exports = {
  formatTime: formatTime,
  printf: printf,
  formatTimeStr: formatTimeStr,
  formatArea: formatArea,
  formatStatusStr: formatStatusStr,
  formatStatusICON: formatStatusICON,
  sortByPriority: sortByPriority,
  isArea: isArea,
  isIncidentService: isIncidentService,
  limitStr: limitStr,
}
