// pages/notes/notes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      { name: 'happy', url: '../../sources/images/happy.png' },
      { name: 'hehe', url: '../../sources/images/hehe.png' },
      { name: 'kiss', url: '../../sources/images/kiss.png' },
      { name: 'pride', url: '../../sources/images/pride.png' },
      { name: 'sad', url: '../../sources/images/sad.png' },
      { name: 'shocked', url: '../../sources/images/shocked.png' },
      { name: 'smile', url: '../../sources/images/smile.png' },
    ],
    animationData: {}
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
  emojiShow: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.translateY(0).opacity(1).step()
    this.setData({
      animationData: animation.export()
    })
  },
  chooseEmoji: function () {
    console.log(222);
  }
})