<template>
	<view class="bottom-bar">
		<view class="voice-message"><u-icon name="mic" color="rgba(255,255,255,0.7)" size="60rpx"></u-icon></view>
		<view class="text-message"><input class="text-message-input" type="text" v-model="textMessage" /></view>
		<view class="emoji"><u-icon name="photo" color="rgba(255,255,255,0.7)" size="60rpx"></u-icon></view>
		<view class="photo"><u-icon name="photo" color="rgba(255,255,255,0.7)" size="60rpx"></u-icon></view>
	</view>
</template>

<script>
export default {
	name: 'bottom-bar',
	data() {
		return {
			textMessage: '请输入'
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style>
.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 140rpx;
	background-color: #1e1a32;
	width: 100%;
	display: flex;
	align-items: center;
}
.voice-message,
.emoji,
.photo {
	width: 48rpx;
	margin: 36rpx;
}
.bottom-bar .photo {
	margin-left: 0;
}
.text-message {
	flex: 1;
	background-color: #29253c;
	height: 74rpx;
	padding: 10rpx 20rpx;
	box-sizing: border-box;
	border-radius: 20rpx;
}
.text-message-input {
	height: 100%;
	width: 100%;
	color: rgba(255, 255, 255, 0.2);
	font-size: 20rpx;
}
</style>
