// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: [],
    weeks: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.dateData(2017, 2019);

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
  dateData: function (minY, maxY) {
    let dataAll = []//总日历数据
    let dataAll2 = []//总日历数据
    let dataMonth = []//月日历数据
    let date = new Date//当前日期
    let year = date.getFullYear()//当前年
    let week = date.getDay();//当天星期几
    let weeks = []
    let month = date.getMonth() + 1//当前月份
    let day = date.getDate()//当天
    let daysCount = 0//一共显示多少天
    let maxYear = maxY//最大显示年份
    let minYear = minY//最小显示年份
    let dayscNow = 0//计数器
    let monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]//月份列表
    let nowMonthList = []//本年剩余年份
    for (let i = month; i < 13; i++) {
      nowMonthList.push(i)
    }
    let yearList = []
    for (let i = 0; i <= maxYear - minYear; i++) {
      let nowYear = minYear
      nowYear += i
      yearList.push(nowYear)
    }


    let leapYear = function (Year) {//判断是否闰年 
      if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
        return (true);
      } else { return (false); }
    }

    for (let i = 0; i <= yearList.length; i++) {
      daysCount += 365 + leapYear(yearList[i])
    }
    for (let i = 0; i < yearList.length; i++) {//遍历年
      let mList = monthList
      for (let j = 0; j < mList.length; j++) {//循环月份
        dataMonth = []
        let t_days = [31, 28 + leapYear(yearList[i]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let k = 0; k < t_days[j]; k++) {//循环每天
          dayscNow++
          let nowData
          if (dayscNow < daysCount) {//如果计数器没满
            let days = k + 1
            if (days < 10) {
              days = "0" + days
            }
            nowData = {//组装自己需要的数据
              year: yearList[i],
              month: mList[j],
              day: k + 1,
              date: yearList[i] + "" + mList[j] + days,
              re: yearList[i] + "-" + mList[j] + "-" + days,
            }
            if (yearList[i] == year && mList[j] == month && k + 1 == day) {
              nowData.selected = 1
            } else {
              nowData.selected = 0
            }
            dataMonth.push(nowData)
            if (k == 0) {
              let date = new Date(yearList[i] + "-" + mList[j] + "-" + k + 1)
              let weekss = date.getDay()//获取每个月第一天是周几
              weeks.push(weekss)
            }
          } else {
            break
          }
        }
        dataAll.push(dataMonth)
      }
    }
    for (let i = 0; i < dataAll.length; i++) {
      if (dataAll[i].length != 0) {
        dataAll2.push(dataAll[i]);
      }
    }
    this.setData({
      date: dataAll2,
      weeks: weeks
    })
    console.log(1111)
  },
  selectDay: function () {

  },
})