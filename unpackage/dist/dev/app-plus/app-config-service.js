
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/information/information","pages/label/label","pages/home/home","pages/user/my","pages/square/square","pages/tidings/tidings","pages/tab/tab","pages/business/business","pages/business/details","pages/business/purchase","pages/business/success","pages/settings/settings","pages/release/release","pages/settings/notice/notice","pages/tidings/index/index","pages/tidings/circle-details/index/index","pages/settings/notice/election/election","pages/settings/security/security","pages/settings/security/modify","pages/settings/security/cellphone","pages/settings/security/replace","pages/settings/security/popup/popup","pages/square/circle/MoreCircles","pages/square/circle/CircleHomePage","pages/tidings/chat-details/chat-details","pages/settings/cancellation/cancellation","pages/settings/cancellation/determine/determine","pages/settings/help/help","pages/settings/help/feedback/feedback","pages/settings/help/feedback/retroaction/retroaction","pages/settings/help/feedback/retroaction/price","pages/settings/help/feedback/popup/popup","pages/square/circle/TopicMain","pages/square/circle/ListActive"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","rpxCalcMaxDeviceWidth":2000},"tabBar":{"selectedColor":"#FFFFFF ","color":"rgba(255, 255, 255, 0.2)","backgroundColor":"#343146 ","list":[{"pagePath":"pages/home/home","text":"首页","iconPath":"/static/tab/homes.png","selectedIconPath":"/static/tab/home.png"},{"pagePath":"pages/square/square","text":"广场","iconPath":"/static/tab/squares.png","selectedIconPath":"/static/tab/square.png"},{"pagePath":"pages/tidings/index/index","text":"消息","iconPath":"/static/tab/tidingss.png","selectedIconPath":"/static/tab/tidings.png"},{"pagePath":"pages/user/my","text":"我的","iconPath":"/static/tab/mys.png","selectedIconPath":"/static/tab/my.png"}],"midButton":{"height":"93px","iconPath":"/static/tab/abc.png","iconWidth":"101px"}},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"make-friends","compilerVersion":"3.5.3","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/information/information","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/label/label","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false,"background":"#1E1A32"}},{"path":"/pages/user/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false,"background":"#1E1A32"}},{"path":"/pages/square/square","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false,"background":"#1E1A32"}},{"path":"/pages/tidings/tidings","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false,"background":"#1E1A32"}},{"path":"/pages/tab/tab","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/business/business","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/business/details","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/business/purchase","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/business/success","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/settings","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/release/release","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/notice/notice","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/tidings/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/tidings/circle-details/index/index","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/notice/election/election","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/security/security","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/security/modify","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/security/cellphone","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/security/replace","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/security/popup/popup","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/square/circle/MoreCircles","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/square/circle/CircleHomePage","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/tidings/chat-details/chat-details","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/cancellation/cancellation","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/cancellation/determine/determine","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/help/help","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/help/feedback/feedback","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/help/feedback/retroaction/retroaction","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/settings/help/feedback/retroaction/price","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/settings/help/feedback/popup/popup","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/square/circle/TopicMain","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/square/circle/ListActive","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarTextStyle":"white","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
