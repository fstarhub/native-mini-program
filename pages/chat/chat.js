// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputMode: 'text', // 'text' for文字输入, 'voice' for语音输入
    userMessage: '', // 存储用户输入的文字
  },
  // 切换到语音输入模式
  switchToVoice() {
    this.setData({
      inputMode: 'voice'
    });
  },

  // 切换到文字输入模式
  switchToText() {
    this.setData({
      inputMode: 'text'
    });
  },

  // 停止语音输入，返回到文字输入模式
  stopVoiceInput() {
    this.switchToText();
  },

  // 处理文字输入
  handleInput(e) {
    this.setData({
      userMessage: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})