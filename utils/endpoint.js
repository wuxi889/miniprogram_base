// endpoints
var endpoints = []
endpoints['user'] = '/user'
endpoints['bind'] = '/user'


const endpoint = (name) => {
    return endpoints[name] || '/'
}
  
module.exports = {
    endpoint
}