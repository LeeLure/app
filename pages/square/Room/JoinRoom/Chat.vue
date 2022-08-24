<template>
	<!-- 聊天组件 -->
	<view class="">
		<view class="Chat">
			<view class="message">啦啦啦啦啦啦啦啦加入了房间</view>
			<!-- 聊天区域 -->
			<view class="chat-info" v-for="item in 10">
				<view class="chat-avata"><image class="img" src="../../../../static/home/c.pic.jpg" /></view>
				<view class="chat-text">
					<view class="chat-name">啦啦啦啦啦啦啦啦</view>
					<view class="content"><view class="chat-content-text">内内容内容内容内容内容内内内容</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import ChatBottomBar from '../../../tidings/chat-details/bottom-bar.vue';
export default {
	components: {
		// ChatBottomBar
	}
};
</script>

<style>
.Chat {
	margin: 15rpx 0;
}

.message {
	font-size: 24rpx;
	color: #fff;
	text-align: center;
	opacity: 0.2;
	margin-bottom: 60rpx;
}

/* 聊天区域 */

.chat-info {
	display: flex;
	margin: 20rpx 20rpx 20rpx 20rpx;
}

.chat-avata {
	width: 76rpx;
	height: 76rpx;
	border-radius: 50%;
	overflow: hidden;
}

.img {
	width: 100%;
	height: 100%;
}

.chat-text {
	max-width: 522rpx;
	margin-left: 18rpx;
}

.chat-name {
	font-size: 24rpx;
	color: #fff;
	opacity: 0.8;
}

.content {
	background-color: rgba(0, 0, 0, 0.1);
	color: #fff;
	font-size: 28rpx;
	border-radius: 20rpx;
	margin-top: 10rpx;
	align-items: center;
	padding: 14rpx 20rpx;
	line-height: 40rpx;
	/* border: 1rpx solid #fff; */
}

.chat-content-text {
	/* margin-left: 32rpx; */
}
</style>
