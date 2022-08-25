const http = uni.$u.http

// 广场房间列表
export const squareRoomList = (params, config = {}) => http.post('/square/ComingSoon', params, config)

// 创建房间
export const createRoom = (params, config = {}) => http.post('/room/create', params, config)
