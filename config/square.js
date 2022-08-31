const http = uni.$u.http

// 广场房间列表
export const squareRoomList = (params, config = {}) => http.post('/square/ComingSoon', params, config)

// 创建房间
export const createRoom = (params, config = {}) => http.post('/room/create', params, config)

// 加入房间
export const joinRoom = (params, config = {}) => http.post('/room/user', params, config)

// 房间列表
export const roomList = (params, config = {}) => http.get(`/room/room/${params.id}`)


// 创建圈子
export const createCirlce = (params, config = {}) => http.post('/CircleTopic/andCircle', params, config)

// 创建圈子条件
export const createCirlceCondition = (params, config = {}) => http.get('/CircleTopic/condition', params, config)

// 查询圈子  
export const selectCircle = (params, config = {}) => http.get(`/CircleTopic/selectCircle/${params.name}`,
	params, config)

// 查询圈子类型
export const SelectCircleType = (params, config = {}) => http.get(`/CircleTopic/SelectCircleType`, params, config)
