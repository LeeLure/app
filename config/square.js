const http = uni.$u.http

// 广场房间列表
export const squareRoomList = (params, config = {}) => http.post('/square/ComingSoon', params, config)

// 创建房间
export const createRoom = (params, config = {}) => http.post('/room/create', params, config)

// 加入房间
export const joinRoom = (params, config = {}) => http.post('/room/user', params, config)

// 房间列表
export const roomList = (params, config = {}) => http.get(`/room/room/${params.id}`)
