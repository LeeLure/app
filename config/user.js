const http = uni.$u.http
// 个人信息
export const LtsMineMyHome=(params, config = {}) => http.get('/LtsMine/myHome', params, config)
// 删除动态
export const homeDelete=(params, config = {}) => http.get(`/home/delete/${params.id}`, params, config)
//开启有趣的人
export const infoInterestingPeople=(params, config = {}) => http.post(`/info/interestingPeople`, params, config)