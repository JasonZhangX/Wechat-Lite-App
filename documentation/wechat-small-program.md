#微信小程序调研
-----
Last update:　201702131335

##索引
- #### [什么是微信小程序？](#whatIsWeChatLiteApp)
- #### [小程序入口](#entrance)
- #### [小程序的特点,优势和不足](#advantagesAndDisadvantages)
- #### [小程序能为我们带来什么？](#value)
- #### [ACN哪些功能适合使用小程序开发？](#whatCanWeDo)
- #### [注册流程](#registration)
- #### [开发流程](#develop)
- #### [发布流程](#release)
- #### [运营](#operation)
- #### [数据统计和分析](#dataStatisticsAndAnalysis)
- #### [时间管理](#timeManagement)
- #### [风险规避！](#riskAversion)
- #### [小程序列表](#liteAppLists)
- #### [相关文档](#documentation)

##<a name="whatIsWeChatLiteApp"></a>什么是微信小程序

- 官方：
微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

- 张小龙
小程序是一种不需要下载安装即可使用的应用，它实现了应用**触手可及**的梦想，用户扫一扫或者搜一下即可打开应用。也体现了**用完即走**的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载。
	<img src="https://i.imgur.com/qb7AIRO.png">
	- 触手可及：通过手机获得周边信息，以二维码作为入口启动应用程序。
	- 用完即走：访问完服务，无需卸载程序。

- 通俗理解
运行在微信内的小应用。
<img src="https://i.imgur.com/esaIaa7.png">
<blockquote>PC互联网的入口在搜索，移动互联网的入口在二维码。</blockquote>

##<a name="entrance"></a>小程序入口
#####用户路径
- 微信搜索->小程序
<img src="https://i.imgur.com/SlNY24A.png">
- 线下扫码->小程序
<img src="https://media.ifanrusercontent.com/media/user_files/trochili/e6/5d/e65ddfc9a3b4c1a098021b5220f7b5d982cc6a2d-4118d8a8cdb2f0b45e713d0d252d871f987ac7dd.png" width="200px">

- 已安装用户->发现->小程序->历史记录
<img src="http://i.imgur.com/IBpT3vn.jpg" width="400px">

- 好友推荐->小程序
<img src="https://i.imgur.com/kwIIvQC.png">
- 公众号关联->小程序
<img src="https://i.imgur.com/ec27CT4.png">
- 小程序发送到桌面(Android)->桌面图标->小程序
<img src="http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deKORY0mbNLQ9cwHsX3ObjEUUbgkbVaLGw1GverGwfgGZW8mnvVfNHmh40oFJzsUI2wYYYbOspeeQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1" >

##小程序与订阅号和服务号的不同
<img src="https://i.imgur.com/oJRuEKF.png">
<img src="https://i.imgur.com/ovXHv8E.png">
微信会严格界限小程序与现有公众号服务功能交集。

##<a name="advantagesAndDisadvantages"></a>小程序的特点,优势和不足
#####小程序的特点
无须安装、触手可及、用完即走、无须卸载。
<img src="http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4deKORY0mbNLQ9cwHsX3ObjEd3fAuUBibiclEnib2HT47zds31ZHUTG5Oxuo1l8sI5icD85CLiaKn2FyZ4A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1">

#####小程序的优势
- 无需安装，即用即走
- 拥有离线能力
- 直接调用微信的API
- 相比HTML5应用操作更流畅，用户体验好
- 自动更新
- 整套完整的开发框架,前端组件化开发。
- 借助微信在移动端的跨平台能力实现了小程序的移动端跨平台
- 使用Virtual DOM，进行局部更新。
- 全部使用https，确保传输中安全。

#####小程序的不足
- 无应用商店(没有APP Store中心进行引流)
- 不做订阅(没有Fans订阅关系)
- 不能主动推送消息(不打扰用户)
- 不能分享到朋友圈(可以分享给好友和群)
- 不能做游戏(与现有业务冲突)
- 引流效果差
- 和公众号相互独立账号，弱关联
- 可以调用的API有限
- 需要微信官方审核才能发布

**小结：微信对小程序的产品定位决定了其优势和不足**

#####小程序与其他类型应用对比
|应用类型|开发成本|维护更新|用户体验|安装方式|跨平台|功能|综合评分|
|--------|--------|---------|---------|---------|---------|---------|---------|
|[Native App](https://en.wikipedia.org/w/index.php?title=Native_app&redirect=no)(原生应用)|高|复杂|优|App Store|差|优|C|
|[Web App](https://en.wikipedia.org/wiki/Web_application#Definition_and_similar_terms)(HTML5应用)|低|简单|中|无需安装|优|中|A|
|[Hybrid App](http://developer.telerik.com/featured/what-is-a-hybrid-mobile-app/)(混合应用)|中|简单|良|App Store(Web无需安装)|优|中|B+|
|[Wechat Lite App](https://mp.weixin.qq.com/cgi-bin/wx)(微信小程序)|低|简单|良|无需安装|良|差|B|

#####开发平台
<img src="https://i.imgur.com/HBRRckx.png">

##<a name="whatCanWeDo"></a>小程序能为我们带来什么
#####流量？！
发布初期会带来一部分流量红利，仅限于提前拿到内测账号借着小程序发布会推广的小程序。而且没有办法实现流量的转化，由于不能跳转到外部网页，仅有的流量会转化到小程序所属公众号一部分，但是由于层级过深，转化效果一般。

#####用户？！
小程序的产品定位用完即走，由于没有订阅功能无法主动给用户推送消息，所以基于粉丝的营销活动都无法在小程序上进行。

#####与其看小程序能为我们带来什么，不如看看微信团队想做什么？
**微信的目标是做移动互联网的入口。小程序希望做线下“弱连接”的入口。**

<blockquote>
张小龙在揭开小程序神秘面纱时举的例子，是两个线下连接场景：一是公交车站扫码得知到站时间；二是汽车站扫码买票。在连接人与人、人与服务、人与商业方面都已经有成熟的产品和服务，但连接人和物品还进展缓慢。没有被电子化的物品怎么连接？最实惠和便利的入口便是二维码，而小程序就是要做这个连接。
</blockquote>


##<a name="advantagesAndDisadvantages"></a>ACN哪些功能适合使用小程序开发
<img src="http://upload-images.jianshu.io/upload_images/1158202-c2b67d450c01bbb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">
**小程序对一些使用频率低的工具类产品是一个很好的平台。**
#####适合的应用场景
-	工具类应用

#####不适合的应用场景
-	交互复杂的应用
-	功能复杂的应用
-	内容类应用

<blockquote>
目前，包括去哪儿、携程、摩拜单车等App都做了首批小程序，这些小程序功能都有所“缩水”，并不能完全替代App。
</blockquote>

**摩拜单车**
APP
<img src="https://i.imgur.com/5MRobQ6.png">
小程序
<img src="https://i.imgur.com/QEHQ29d.png">

#####ACN适合使用小程序开发的功能
- 价格计算器
- 仪表盘

##<a name="registration"></a>如何注册小程序
[注册流程](https://mp.weixin.qq.com/wxopen/waregister?action=step1)


##<a name="develop"></a>开发小程序
[小程序信息完善及开发前准备](https://mp.weixin.qq.com/debug/wxadoc/introduction/#小程序信息完善及开发前准备)


- 小程序本质是APP并不是Web App, 要在思维上做转换，不能以之前在浏览器开发的思维去开发小程序，因为是完全不同的运行环境。
- 除了Javascript作为基本开发语言不需要学习新语法，需要根据微信官方文档去学习WXML和WXSS的语法。
- 开发出的小程序只能运行在微信里，而且受限于微信的API，能做的事情十分的有限，不建议花时间深入研究小程序开发，小程序是为小企业和创业公司提供基于微信二维码的线下服务的，由于其打包大小限制，对于大型企业的现有的复杂业务不适用。
- 对于有APP开发能力的企业还是更专注于APP开发上，现在已经有很多小程序停止了更新，或者已经关闭了小程序服务接口。

#####小程序架构
微信小程序的框架包含两部分View视图层、App Service逻辑层，View层用来渲染页面结构，AppService层用来逻辑处理、数据请求、接口调用，它们在两个线程里运行。

视图层使用WebView渲染，逻辑层使用JSCore运行。

视图层和逻辑层通过系统层的JSBridage进行通信，逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理。

<img src="https://i.imgur.com/BMEMVB3.png">

小程序启动时会从CDN下载小程序的完整包

<img src="https://i.imgur.com/dkJdoiO.png">

#####View (页面视图)
######开发语言
- WXML（WeiXin Markup Language）
	- 支持数据绑定
	- 支持逻辑算术、运算
	- 支持模板、引用
	- 支持添加事件（bindtap）
	- WXML是XML不是HTML
	<img src="https://i.imgur.com/C004Mad.png">
wxml编译器：wcc 把wxml文件 转为 js
执行方式：wcc index.wxml

- WXSS(WeiXin Style Sheets)

	- 支持大部分CSS特性 WXSS不是完整的CSS
	- 添加尺寸单位rpx，可根据屏幕宽度自适应
	- 使用@import语句可以导入外联样式表
	- 不支持多层选择器-避免被组件内结构破坏

    wxss编译器：wcsc 把wxss文件转化为 js
    执行方式： wcsc index.wxss
	<img src="https://i.imgur.com/VmT3iXA.png">

#####App Service(逻辑层)
逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈

App( ) 小程序的入口；Page( ) 页面的入口
提供丰富的 API，如微信用户数据，扫一扫，支付等微信特有能力。
每个页面有独立的作用域，并提供模块化能力。
数据绑定、事件分发、生命周期管理、路由管理

######小程序运行环境
-	在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中，是由 WKWebView 来渲染的，环境有 iOS8、iOS9、iOS10
-	在 Android 上，小程序的 javascript 代码是通过 X5 JSCore来解析，是由 X5 基于 Mobile Chrome 37 内核来渲染的
-	在 开发工具上， 小程序的 javascript 代码是运行在[nwjs](https://github.com/nwjs) 中，是由 Chrome Webview 来渲染的
- Javascript不是完整的ECMAScript 6

######App Service-Binding
数据绑定使用 Mustache 语法（双大括号）将变量包起来，动态数据均来自对应 Page 的 data，可以通过setData方法修改数据。

事件绑定的写法同组件的属性，以 key、value 的形式，key 以bind或catch开头，然后跟上事件的类型，如bindtap, catchtouchstart，value 是一个字符串，需要在对应的 Page 中定义同名的函数。


######App Service-Life Cylce
<img src="https://i.imgur.com/lgpMEid.png">
######App Service-API
<img src="https://i.imgur.com/Rzsiqte.png">
######App Service-Router
- navigateTo(OBJECT)
	保留当前页面，跳转到应用内的某个页面，使用navigateBack可以返回到原页面。页面路径只能是五层

- redirectTo(OBJECT)
	关闭当前页面，跳转到应用内的某个页面。

- navigateBack(OBJECT)
	关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。

#####Troubleshoot
[爬坑指南](http://www.wxapp-union.com/forum.php?mod=forumdisplay&fid=2&filter=typeid&typeid=3)

##<a name="release"></a>发布流程
微信小程序的发布需要腾讯进行审核，审核通过之后才可以进行发布。

[微信小程序认证指引](https://mp.weixin.qq.com/debug/wxadoc/product/renzheng.html#一、申请微信认证入口)

##<a name="operation"></a>运营


<blockquote>根据张小龙的解释，用户与小程序之间不存在粘度关系，用户只能对其访问，而唯一产生数据也只有访问量一项。此外，小程序还不支持推送通知，仅能在获得用户授权后，发布少量后续通知。</blockquote>

[微信小程序平台运营规范](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=201729)

##<a name="dataStatisticsAndAnalysis"></a>数据统计和分析
小程序数据分析，是面向小程序开发者、运营者的数据分析工具，提供关键指标统计、实时访问监控、自定义分析等，帮助小程序产品迭代优化和运营。

<img src="https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/2_2.png?t=2017117">
[微信小程序数据分析](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017119)

##<a name="timeManagement"></a>时间管理
- 研究开发文档
- 第一个DEMO（服务器仪表盘原生组件版）
- 建立项目
- 正式开发
- 测试
- 发布

##<a name="riskAversion"></a>风险规避
- 内容审核
	[微信运营规范](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=201726)限制了小程序的应用范围，而且被腾讯的审核制度制约着。
    <blockquote>微信小程序的服务范围需与实际填写的类目和标签一致，也需和自身所提供的服务一致，且不应超出小程序平台的类目库范围。如游戏、直播、虚拟物品购买功能等均尚未开放。</blockquote>

- 小程序内部bug
	小程序目前还不够完善，目前还存在很多bug，[更新日志](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/new.html)列出了已经修复的一些bug。开发过程中遇到小程序本身的bug只能等待官方修复，可以在[开发者社区](https://developers.weixin.qq.com)向微信官方提交bug。

- 小程序命名
	- 小程序搜索入口目前是不支持模糊搜索的，所以小程序的命名一定要比较容易记忆，一旦发布之后再修改名字就会带来很多麻烦。
	- 小程序不能和公众号重名，于是小程序的名字就成了：自选股+、滴滴出行DiDi 。

- 支付限制
	支付 === 微信支付
	由于支付接口的限制，涉及到支付的部分只支持微信支付，相当于限制了用户选择支付的方式，小程序并不适合支持多种支付方式的应用场景。

- 大小限制
	源码打包限制1m大小限制了小程序的应用场景。
-	小程序仍然使用WebView渲染，并全部为非原生渲染（`<canvas/> <video/> <map/> <textarea/>`为Native组件）
-	需要独立开发，不能在非微信环境运行。
-	开发者不可以扩展新组件。
-	服务端接口返回的头无法执行，比如：Set-Cookie。
-	依赖浏览器环境的js库不能使用，因为是JSCore执行的，没有window、document对象。
-	WXSS中无法使用本地（图片、字体等）。
-	WXSS转化成js 而不是css，为了兼容rpx。
-	WXSS不支持级联选择器。
-	小程序无法打开页面，无法拉起APP。

##<a name="liteAppLists"></a>小程序列表
<img class="size-full wp-image-780497 aligncenter" src="https://i.imgur.com/K1EQO8B.png" alt="rankvol2-01" width="750" height="1075" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780498 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-02.png" alt="rankvol2-02" width="750" height="1050" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780499 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-03.png" alt="rankvol2-03" width="750" height="1019" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780500 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-04.png" alt="rankvol2-04" width="750" height="1019" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780501 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-05.png" alt="rankvol2-05" width="750" height="1000" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780502 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-06.png" alt="rankvol2-06" width="750" height="1019" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780503 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-07.png" alt="rankvol2-07" width="750" height="1000" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780504 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-08.png" alt="rankvol2-08" width="750" height="1019" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780505 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-09.png" alt="rankvol2-09" width="750" height="1000" sizes="(max-width: 750px) 100vw, 750px">
<img class="size-full wp-image-780506 aligncenter" src="http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/01/rankvol2-10.png" alt="rankvol2-10" width="750" height="1075" sizes="(max-width: 750px) 100vw, 750px">

##<a name="documentation"></a>相关文档
- 	[开发文档](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
- 	[开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
- 	[FAQ](https://mp.weixin.qq.com/debug/wxadoc/api/devtools/qa.html)
-	[第三方小程序商店](https://minapp.com/miniapp/)
-	[小程序“惊艳”亮相，创业者们的狂躁与迷思](http://www.tmtpost.com/2556382.html)
-	[对抗微信，支付宝牌“小程序”也来了](http://www.tmtpost.com/2557765.html)
-	[微信小程序的价值是什么？](https://www.zhihu.com/question/50875544)
-	[微信小程序，不可不知的一二三四](http://guoze.me/2016/10/16/wechat-app/)
-	[我们真的需要“小程序”么？HTML5 老兵如是说](http://cn.technode.com/post/2016-09-23/wechat-html5/)
-	[对于小程序的一些零散思考](https://github.com/newteo/team-blog-repo/issues/37)
-	[Progressive Web Apps: A new way to deliver amazing user experiences on the web](https://developers.google.com/web/progressive-web-apps/)
-	[Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)
-	[张小龙发表公开演讲 让关于小程序的疑问都有了答案](http://www.cbnweek.com/articles/normal/15397+&cd=1&hl=en&ct=clnk&gl=sg)
-	[微信“小程序”来了，短期不可高估，长期不可低估](http://36kr.com/p/5053378.html)
-	[微信小程序在微信APP里如何运行的？](https://segmentfault.com/a/1190000007473513)
-	[微信小程序与H5的区别](https://segmentfault.com/a/1190000007388966)
-	[张小龙2017年微信公开课全文](http://tech.sina.com.cn/i/2016-12-28/doc-ifxyxury8931704.shtml?cre=techpagepc&mod=f&loc=2&r=9&doct=0&rfunc=31)
-	[小程序来了，微信、商家和用户能干什么？](http://tech.sina.com.cn/i/2017-01-10/doc-ifxzkfuh6521708.shtml?cre=techpagepc&mod=f&loc=9&r=9&doct=0&rfunc=31)
-	[2017微信公开课PRO版](http://daxue.qq.com/content/content/id/3073)
-	[张小龙：小程序正式发布，开启移动应用新时代（发布会视频）](http://daxue.qq.com/content/content/id/3109)
-	[Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en-US)
-	[微信的订阅号和服务号如何区分？](https://www.zhihu.com/question/21289814)
-	[小程序 UI 库](https://github.com/youzan/zanui-weapp)
-	[组件化开发框架](https://github.com/wepyjs/wepy)
-	[如何入门微信小程序开发，有哪些学习资料？](https://www.zhihu.com/question/50907897)