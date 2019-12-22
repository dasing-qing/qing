Page({

  data: {
    scale: 3
  },

  onLoad: function (options) {

  },
  bindfind: function () {
    let url = '../../pages/home/index';
    wx.navigateTo({
      url: url
    })
  },
  bindhome: function () {
    let url = '../../pages/thing-index/thing-index';
    wx.navigateTo({
      url: url
    })
  },
  binduser: function () {
    let url = '../../pages/knowwhere/knowwhere';
    wx.navigateTo({
      url: url
    })
  },
  menu: function () {
    var that = this
    that.setData({
      scale: 3
    })
  },


  menu_close: function () {
    var that = this
    that.setData({
      scale: 0
    })
  }

})