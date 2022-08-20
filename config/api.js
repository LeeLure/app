const http = uni.$u.http

// post请求，获取菜单
export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见s前面解释
export const getMenu = (data) => http.get('/ebapi/public_api/index', data)


export const enrollEssential=(params, config = {}) => http.post('/info/add', params, config)
export const infoTag=(params, config = {}) => http.post('/info/tag', params, config)
