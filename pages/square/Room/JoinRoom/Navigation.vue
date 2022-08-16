<template>
	<!-- 加入房间页面的导航栏 -->
	<view class="navigation">
		<view class="navigation-back" @tap="revert">
			<image src="../../../../static/home/fanhui.png" mode="aspectFill" class="back"></image>
		</view>
		<view class="navigation-text">{{ title }}</view>
		<view class="navigation-detail"><image src="../../../../static/square/det.png" mode=""></image></view>
	</view>
</template>

<script>
export default {
	props: {
		title: String
	},

	data() {
		return {};
	},

	methods: {
		revert() {
			uni.navigateBack({});
		}
	}
};
</script>

<style>
.navigation {
	width: 750rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	display: flex;
	position: relative;
	justify-content: start;
}

.navigation-back {
	margin: 10rpx 0 0 20rpx;
}

.back {
	width: 40rpx;
	height: 40rpx;
}

.navigation-text {
	/* height: 44rpx; */
	/* line-height: 44rpx; */
	font-size: 32rpx;
	color: #fff;
	margin-left: 32rpx;
}

.navigation-detail {
	width: 30rpx;
	height: 30rpx;
	margin: 5rpx 15rpx 0 100rpx;
}

.navigation-detail image {
	width: 100%;
	height: 100%;
	/* background-color: #fff; */
}
</style>
