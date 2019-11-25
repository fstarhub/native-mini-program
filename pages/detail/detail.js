let datas=require('../../datas/list-data.js')

//获取全局APP实例对象
let appDatas=getApp()
console.log(appDatas)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    isCollected:false, //标识文章是否收藏
    isMusicPlay:false //标识音乐是否播放
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let index=options.index;
    this.setData({
      detailObj:datas.list_data[index],
      index //data中没的数据,更新状态数据添加的
    })

    //读取缓存数据
    let storageObj = wx.getStorageSync('isCollected');
    if (storageObj[index]){
      this.setData({
        isCollected:true
      })
    }

    //判断音乐书否播放
    if (appDatas.globalData.isPlay && appDatas.globalData.pageIndex === index){
      this.setData({
        isMusicPlay:true
      })
    }

    //监听播放与暂停
    // wx.onBackgroundAudioPlay(()=>{
    //   console.log('音乐播放');
    //   this.setData({
    //     isMusicPlay:true
    //   })

      // 将当前页面播放的状态存到app的data中
    //   appDatas.globalData.pageIndex = index;
    //   appDatas.globalData.isPlay = true;
    // })

    // wx.onBackgroundAudioPause(() => {
    //   console.log('音乐暂停');
    //   this.setData({
    //     isMusicPlay: false
    //   })

      // 将当前页面播放的状态存到app的data中
    //   appDatas.globalData.pageIndex = index;
    //   appDatas.globalData.isPlay = false;
    // })
    wx.onBackgroundAudioStop(()=>{
      console.log('监听音乐的停止')
      this.setData({
        isMusicPlay:false
      })
      //修改全局APPData中的数据
      appDatas.globalData.isPlay=false;
    })
  },

  

  //处理收藏的方法
  handleCollection(){
    let isCollected=!this.data.isCollected;
    this.setData({
      isCollected
    })
    let title=isCollected?'收藏成功':'取消收藏';
    //消息框
    wx.showToast({
      title
    })
    //缓存收藏的状态
    //数据格式 0 true 1 false
    let obj=wx.getStorageSync('isCollected') || {};
    let index=this.data.index;
    obj[index]=isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: obj,
    })
  },

  //处理音乐播放的方法
  handleMusicPlay(){
    let isMusicPlay=!this.data.isMusicPlay;
    //更新状态
    this.setData({
      isMusicPlay
    })
    //音乐播放
    let {dataUrl,title,coverImgUrl}=this.data.detailObj.music;
    if(isMusicPlay){
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
      //修改全局APPData数据
      appDatas.globalData.isPlay=true;
      //那个页面播放
      appDatas.globalData.pageIndex=this.data.index;
    }else{
      wx.pauseBackgroundAudio()
      appDatas.globalData.isPlay = false;
    }
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

  }
})