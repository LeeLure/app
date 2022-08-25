const http = uni.$u.http

// 广场房间列表
export const squareRoomList = (params, config = {}) => http.post('/square/ComingSoon', params, config)
