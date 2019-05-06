//index.js
//获取应用实例
const app = getApp()
import { apiGetWeekUpdate } from '../../api/index'
Page({
  data: {
    motto: 'Hello clicli',
  },
  onLoad () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow () {
    console.log('执行')
    apiGetWeekUpdate({
      status: "public",
      tag: "推荐",
      page: 1,
      pageSize: 8,
    })
    .then(res => {
      console.log('获取每周更新：ok')
    })
    .catch(err => {
      console.log('获取每周更新：fail')
    })
  }
})
