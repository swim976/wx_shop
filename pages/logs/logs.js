//logs.js
const util = require('../../utils/util.js')

var page = undefined;
Page({
  yonghu:function(){
    wx.getUserInfo({
      success:function(res){
        console.log(res.userInfo.nickName) 
      }
    })
  },
  yh:function(e){
    console.log(e.detail.userInfo)
  },
  myopenid:function(){
    wx.login({
      success(res){
        console.log(res.code)

        wx.request({
          url: "",//"https://api.weixin.qq.com/sns/jscode2session",
          data:{
            appid:"wx53ab2cb3a767b813",
            secret:"5fe67c4dcc0701a6ffb2f2a04217b077",
            js_code:res.code,
            grant_type:"authorization_code"
          },
          method:"GET",
          success:function(res){
            console.log(res.data)
          }
        })

      }
    })
  },

  onLoad: function () {
    page = this;
  },
  bindbt: function () {
    doommList.push(new Doomm("测试这里结束，更多功能，还看漫长时光", Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 10), getRandomColor()));
    this.setData({
      doommData: doommList
    })
  },
  data: {
    doommData: []
  }
})
var doommList = [];
var i = 0;
class Doomm {
  constructor(text, top, time, color) {
    this.text = text + i;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    let that = this;
    this.id = i++;
    setTimeout(function () {
      doommList.splice(doommList.indexOf(that), 1);
      page.setData({
        doommData: doommList
      })
    }, this.time * 1000)
  }
}
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}