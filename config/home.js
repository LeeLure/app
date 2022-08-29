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
// 点赞
export const commentsLike=(params, config = {}) => http.get(`/comments/${params.id}/like`
, params, config)
// 取消点赞
export const commentsDislike=(params, config = {}) => http.get(`/comments/${params.id}/dislike`
, params, config)
// 关注
export const otherConcern=(params, config = {}) => http.get(`/other/concern/${params.id}`
, params, config)
// 取消关注
export const otherNoConcern=(params, config = {}) => http.get(`/other/NoConcern/${params.id}`
, params, config)
// 发表评论
export const commentsComment=(params, config = {}) => http.post(`/comments/comment`, params, config)
// 删除评论
export const concernId=(params, config = {}) => http.get(`/comments/comment/${id}`
, params, config)
// 评论列表
export const concernList=(params, config = {}) => http.post(`/comments/list`, params, config)
// 圈子类型
export const CircleTopicSelectCircleType=(params, config = {}) => http.get(`/CircleTopic/SelectCircleType`, params, config)
// 创建圈子
export const CircleTopicAndCircle=(params, config = {}) => http.post(`/CircleTopic/andCircle`, params, config)
// 创建圈子条件
export const CircleTopicCondition=(params, config = {}) => http.get(`/CircleTopic/condition`, params, config)
// 搜索圈子
export const CircleTopicSelectCirclename=(params, config = {}) => http.get(`/CircleTopic/selectCircle/${params.name}
`, params, config)
// 话题列表
export const CircleTopicSelectTopic=(params, config = {}) => http.get(`/CircleTopic/selectTopic`, params, config)
// 搜索话题
export const CircleTopicSelectTopicName=(params, config = {}) => http.get(`/CircleTopic/selectLIkeTopic/${params.name}`, params, config)
// 新建话题
export const CircleTopicCreateTopicName=(params, config = {}) => http.get(`/CircleTopic/createTopic/${params.name}`, params, config)
// 创建房间
export const roomCreate=(params, config = {}) => http.post(`/room/create`, params, config)
