const http = uni.$u.http
// 动态列表
export const homeList=(params, config = {}) => http.post('/home/list', params, config)