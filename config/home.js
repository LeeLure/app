const http = uni.$u.http
// 动态列表
export const homeList=(params, config = {}) => http.post('/home/list', params, config)
// 动态详情
export const homeDesc=(params, config = {}) => http.get(`/home/desc/${params.id}`, params, config)
// 发布动态
export const  homePush=(params,config={})=>http.post(`/home/push`,params,config)


// 他人主页信息
export const otherHomepage=(params, config = {}) => http.get(`/other/homepage/${params.id}`
, params, config)
