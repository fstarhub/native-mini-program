//index.js
//获取应用实例

Page({
  data: {
    msg:'初始化数据',
    userinfo:{}
  },
  //事件处理函数
  
  onLoad: function () {
    wx.getUserInfo({
      success:(data)=>{
        this.setData({
          suerInfo:data.userInfo
        })
      },
      fail:()=>{
        console.log('获取用户信息失败')
      }
    })
  },

  handleGetUserInfo(info){
    if(info.detail.rawData){
      this.setData({
        userInfo:JSON.parse(info.detail.rawData)
      })
    }
  },

  handleChild(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  goToTest() {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  }
})
