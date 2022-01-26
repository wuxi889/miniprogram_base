const { api } = require("./api");
const { endpoint } = require("./endpoint");

// 请求 token
export async function issueToken(params) {
    return await api('GET', endpoint('user'), params)
}

// 登录
export async function login(params) {
    return await api('POST', endpoint('bind'), params)
}