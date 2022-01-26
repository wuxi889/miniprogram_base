// 目标 host
const host = 'https://wxh.frp.codefriend.top/api/miniprogram'

// 请求 api
const api = (method, endpoint, params) => {
    // endpoint += method === 'GET' ? httpBuildQuery(params) : ''
    const token = wx.getStorageSync('token') || ''

    return new Promise((resolve, reject) => {
        wx.request({
            url: host + endpoint,
            method: method,
            data: params,
            header: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' // 默认值
            },
            success: function (res) {
                resolve(res.data)
            },
            fail: function (res) {
                reject(res)
            }
        })
    })
}
  
module.exports = {
    api
}