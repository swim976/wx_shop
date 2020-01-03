//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img1: "../../images/img/ad-top1.jpg",
    img2: "../../images/img/ad.png",
    swiperimg: {
      tupian: ["../../images/upload/ban1.jpg", "../../images/upload/ban2.jpg", "../../images/upload/ban3.jpg", "../../images/upload/ban4.jpg", ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      newtime:"2020年1月-2"
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {

    var newDateTime = new Date().getTime();

    function formatTime(newDateTime) {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分";
    }

    console.log(formatTime(newDateTime));
    this.setData({
      newtime: formatTime(newDateTime)
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})