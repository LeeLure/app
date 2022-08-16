<template>
	<view class="button">
		<button class="share"><view class="share-text">分享</view></button>
		<button class="join" @tap="onClick">
			<view class="join-img"><image src="../../../../static/square/join.png" mode=""></image></view>
			<view class="join-text">我要加入</view>
		</button>
	</view>
</template>

<script>
export default {
	methods: {
		onClick() {
			uni.showToast({});
		}
	}
};
</script>

<style>
.button {
	display: flex;
	justify-content: space-between;
	margin: 30rpx 0 10rpx 0;
}

.share {
	width: 238rpx;
	background-color: #ffee8c;
	border-radius: 54rpx;
}

.share-text {
	height: 106rpx;
	line-height: 106rpx;
	font-size: 32rpx;
	color: #a28f21;
}

.join {
	display: flex;
	width: 428rpx;
	background-color: #d53eda;
	border-radius: 54rpx;
}

.join-img {
	width: 50rpx;
	height: 50rpx;
	line-height: 50rpx;
	margin: 28rpx 0 0 100rpx;
	overflow: hidden;
}

.join-img image {
	width: 100%;
	height: 100%;
}

.join-text {
	height: 106rpx;
	line-height: 106rpx;
	width: 128rpx;
	color: #ffffff;
	font-size: 32rpx;
}
</style>
