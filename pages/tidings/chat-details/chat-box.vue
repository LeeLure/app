<template>
	<view class="chat-content-box">
		<view class="scroll-view-box">
			<scroll-view class="scroll-view_H" scroll-y="true">
				<view class="chat-box" v-for="item in list" :key="item.id">
					<view class="time">{{ item.time }}</view>
					<view :class="['chat-content', item.id === 5 ? 'me' : '']">
						<view class="img-box" @tap="toChatDetail(item)"><image class="img" :src="item.avatar" /></view>
						<view>
							<view v-if="type === '2' && item.id !== 5" class="name">{{ item.name }}</view>
							<view class="content">{{ item.content }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'chat-content-box',
	props: {
		type: String
	},
	data() {
		return {
			list: [],
			userAvata: '',
			userName: '',
			userId: 0
		};
	},
	mounted() {
		console.log(this.$props.type);
		for (var i = 0; i < 10; i++) {
			this.list.push({
				time: '周五 12：0' + i,
				avatar: '../../../static/home/a.pic.jpg',
				id: i,
				name: '用户' + i,
				content:
					'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' +
					i
			});
		}
	},
	methods: {
		// 跳转聊天详情
		toChatDetail(item) {
			this.userAvata = item.avatar;
			this.userName = item.name;
			this.userId = item.id;
			// console.log(this.userAvata, this.userName, this.userId);
			uni.navigateTo({
				url: `/pages/tidings/chat-details/chat-user-detail/chat-user-detail?userAvata=${this.userAvata} + &userName= ${
					this.userName
				} + &userId= ${this.userId} `
			});
		}
	}
};
</script>

<style>
.chat-content-box {
	display: flex;
	flex-direction: column;
	background-color: #1e1a32;
}

.scroll-view_H {
	height: calc(100vh - var(--status-bar-height) - 240rpx);
	/* padding: 20rpx 0; */
	box-sizing: border-box;
}

.chat-box {
	margin-top: 20rpx;
	padding: 0 28rpx;
}

.time {
	color: rgba(255, 255, 255, 0.5);
	font-size: 24rpx;
	width: 100%;
	text-align: center;
	font-family: PingFang SC-Regular, PingFang SC;
}

.chat-content {
	width: 100%;
	display: flex;
	margin-top: 22rpx;
	margin-bottom: 60rpx;
	/* align-items: center; */
}

.img-box {
	width: 120rpx;
	height: 120rpx;
	margin-right: 18rpx;
}

.img-box .img {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50rpx;
}

.name {
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.8);
	line-height: 60rpx;
	margin-left: 10rpx;
}

.content {
	background-color: rgba(0, 0, 0, 0.1);
	color: #fff;
	font-size: 28rpx;
	border-radius: 20rpx;
	min-height: 88rpx;
	align-items: center;
	padding: 10rpx 20rpx;
	line-height: 40rpx;
}

.me {
	flex-direction: row-reverse;
}

.me .img-box {
	margin-left: 18rpx;
	margin-right: 0;
}

.me .content {
	background-color: rgba(255, 255, 255, 0.1);
}
</style>
