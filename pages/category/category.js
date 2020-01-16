// pages/category/category.js

// 导入shuju.js
var categoryData = require("shuju.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 1,
    active: 0,
    goods: {
      goodsId: "af117ed90b624318914fd4b42001216c",
      name: "洁面套装产品/套",
      image: "/images/upload/jingxuan16.jpg",
      mallPrice: "199.00",
      price: "99.99"
    },
    categorySub: [
      {
        Id: 1,
        Sub: "洁面类"
      }, {
        Id: 2,
        Sub: "沐浴类"
      }, {
        Id: 3,
        Sub: "日常类"
      }, {
        Id: 4,
        Sub: "其他类"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 选择改变事件
   */
  onChange: function (e) {
    console.log(e.detail)
    this.setData({
      value: e.detail
    })
  },
  /**
   * 选中事件
   */
  selectSub: function (e) {
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      active: e.currentTarget.dataset.index
    })
  },
  /**
   * 跳转
   */
  goToGoods: function () {
    wx.navigateTo({
      url: '../goods/goods?id=01e2f8a88fe44bb8aa6e843ae02105a8',
    })
  }
})