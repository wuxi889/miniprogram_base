const { issueToken } = require("./utils/callapi")

// app.js
App({
  onLaunch() {
    // TODO: 先判断登录状态


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        issueToken({ code: res.code }).then(res => {
          // 保存
          this.globalData.userInfo = res.user

          // 保存 token
          wx.setStorage({
            key: 'token',
            data: res.token
          })
        })
      }
    })
  },
  onShareAppMessage: function () {
    console.log('share')
  },
  globalData: {
    bearerToken: null,
    userInfo: null
  }
})
