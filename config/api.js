const http = uni.$u.http

export const enrollEssential=(params, config = {}) => http.post('/info/add', params, config)
export const infoTag=(params, config = {}) => http.post('/info/tag', params, config)
export const configInterestList=(params, config = {}) => http.get('/config/interest/list', params, config)


// export const configInterestList= (data) => http.get('/config/interest/list', data)