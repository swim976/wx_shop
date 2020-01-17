// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: false,
    cartList: [],
    sum: 0,
    checkAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let cartList = (wx.getStorageSync('CART_LIST') || [])
    cartList.map(item => item.checked = true)
    this.setData({
      cartList,
      isEmpty: cartList.length ? false : true,
      checkAll: true
      // sum: cartList.reduce((sum, item) => { return sum + item.count * item.present_price }, 0) * 100
    })
    this.sumMoney()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onbtnTap: function() {
    wx.switchTab({
      url: '../category/category',
    })
  },
  /**
   * 计算总和
   */
  sumMoney: function() {
    this.setData({
      // sum: this.data.cartList.reduce((sum, item) => { return sum + item.count * item.present_price }, 0) * 100
      sum: this.data.cartList.filter(item => item.checked == true).reduce((sum, item) => {
        return sum + item.count * item.present_price
      }, 0) * 100
    })
  },
  /**
   * 选中所有
   */
  onCheckAll: function() {
    this.data.checkAll = !this.data.checkAll
    this.data.cartList.map(item => item.checked = this.data.checkAll)
    this.setData({
      checkAll: this.data.checkAll,
      cartList: this.data.cartList
    })
    this.sumMoney()
  },
  /**
   * 选中添加
   */
  oncheck: function(e) {
    let currentItem = this.data.cartList.find(item => item.ID == e.currentTarget.dataset.id)
    currentItem.checked = !currentItem.checked
    let checkedList = this.data.cartList.filter(item => item.checked == true)
    // checkedList.length == this.data.cartList.length? this.data.checkAll = true : this.data.checkAll = false
    this.data.checkAll = (checkedList.length == this.data.cartList.length)
    this.setData({
      cartList: this.data.cartList,
      checkAll: this.data.checkAll
    })
    this.sumMoney()
  },
  /**
   * 添加合计
   */
  addChange: function (e) {
    let currentItem = this.data.cartList.find(item => item.ID == e.currentTarget.dataset.id)
    currentItem.count++
    this.setData({
      cartList: this.data.cartList
    })
    this.sumMoney()
    wx.setStorageSync('CART_LIST', this.data.cartList)
  },
  decChange: function (e) {
    let currentItem = this.data.cartList.find(item => item.ID == e.currentTarget.dataset.id)
    currentItem.count--
    // if(currentItem.count){
    //   let index = this.data.cartList.findIndex(item => item.ID === currentItem.ID)
    //   this.data.cartList.splice(index,1)
    // }
    this.setData({
      cartList: this.data.cartList
    })
    this.sumMoney()
    wx.setStorageSync('CART_LIST', this.data.cartList)
  },
  /**
   * 删除选项
   */
  deleteItem: function (e) {
    let currentItem = this.data.cartList.find(item => item.ID == e.currentTarget.dataset.id)
    wx.showModal({
      title: '测试不删除',
      content: '确定从购物车中移除该商品?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (res) => {
        // res.confirm 为 true 时，表示用户点击了确定按钮
        if (res.confirm) {
          let index = this.data.cartList.findIndex(item => item.ID === currentItem.ID)
          // this.data.cartList.splice(index,1)
          // this.setData({
          //   cartList: this.data.cartList
          // })
          // wx.setStorageSync('CART_LIST', this.data.cartList)
        }
      },
    })
    this.sumMoney()
  },
  /**
   * 结算
   */
  onSubmit(e){

    wx.showToast({
      title: '结算成功！',//提示文字
      duration: 2000,//显示时长
      mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
      icon: 'success', //图标，支持"success"、"loading"  
      success: function () { 
        console.log("结算按钮")
       },//接口调用成功
      fail: function () { 
        console.log("结算失败")
       },  //接口调用失败的回调函数  
      complete: function () { 
        console.log("调用回调成功")
      } //接口调用结束的回调函数  
    }) 

    // wx.showModal({
    //   title: '删除图片',
    //   content: '确定要删除该图片？',
    //   showCancel: true,//是否显示取消按钮
    //   cancelText: "否",//默认是“取消”
    //   cancelColor: 'skyblue',//取消文字的颜色
    //   confirmText: "是",//默认是“确定”
    //   confirmColor: 'skyblue',//确定文字的颜色
    //   success: function (res) {
    //     if (res.cancel) {
    //       //点击取消,默认隐藏弹框
    //     } else {
    //       //点击确定
    //       temp.splice(index, 1),
    //         that.setData({
    //           tempFilePaths: temp,
    //         })
    //     }
    //   },
    //   fail: function (res) { },//接口调用失败的回调函数
    //   complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    // }) 
  }
})