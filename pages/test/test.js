// pages/test/test.js

const date = new Date()
const years = []
const months = []
const days = []
const hours = [];
const mins = [];
for (let i = 2019; i <= date.getFullYear() + 1; i++) {
  years.push("" + i)
}
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = '0' + i;
  }
  months.push("" + i)
}

for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = '0' + i;
  }
  days.push("" + i)
}

for (let i = 0; i <= 23; i++) {
  if (i < 10) {
    i = '0' + i;
  }
  hours.push("" + i)
}

for (let i = 0; i <= 59; i++) {
  if (i < 10) {
    i = '0' + i;
  }
  mins.push("" + i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 日期的数据
    years: years,
    year: 2019,
    months: months,
    month: 1,
    days: days,
    day: 1,
    hours: hours,
    hour: 0,
    mins: mins,
    min: 0,
    showPicker: false,
    value: [0,0,0,0,0],
    endTime: ''
  },

  // 改变日期
  bindChange: function (e) {
    const val = e.detail.value
    console.log(val)
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      hour: this.data.hours[val[3]],
      min: this.data.mins[val[4]],
      value: [val[0], val[1], val[2], val[3], val[4]]
    })
    this.setData({
      endTime: this.data.year + '-' + this.data.month + '-' + this.data.day + ' ' + this.data.hour + ':' + this.data.min + ':00'
    })
    console.log(this.data.endTime+'----'+this.data.year)
  },
  showPicker: function () {
    this.setData({ showPicker: true })
  },
  closePickerFloat: function (e) {
    console.log(e)
    if (e.target.dataset.id !== "pickerFloat" && e.target.dataset.id !== "write") {
      this.setData({ showPicker: false })
    }
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

  }
})