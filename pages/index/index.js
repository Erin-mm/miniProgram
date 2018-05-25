//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    iconArr: [
      { name: 'activity', url: '../../sources/images/activity.png', page: 'activity' },
      { name: 'addition', url: '../../sources/images/addition.png', page: 'notes' },
      { name: 'dynamic', url: '../../sources/images/dynamic.png', page: 'statistics' }
    ],
    listArr: [
      { id: 1, content: 'As we all know,the life has no rehearsal', date: '2018-05-22 17:13:11' },
      { id: 2, content: 'As we all know,the life has no rehearsal', date: '2018-05-22 17:13:11' },
      { id: 3, content: 'As we all know,the life has no rehearsal', date: '2018-05-22 17:13:11' },
      { id: 4, content: 'As we all know,the life has no rehearsal', date: '2018-05-22 17:13:11' },
      { id: 5, content: 'As we all know,the life has no rehearsal', date: '2018-05-22 17:13:11' },

    ]
  },
  setImg: function (val) {
    console.log(val)
  },
  onLoad: function () {
  },
  gotoPage: function (e) {
    var page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: '../' + page + '/' + page
    });
  },
  gotoEdit: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../notes/notes'
    });
  }
})
