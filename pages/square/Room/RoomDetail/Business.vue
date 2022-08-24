<template>
	<!-- 商家信息 -->
	<view class="Business">
		<view class="Business-img"><image src="../../../../static/square/Business-img.jpg" mode=""></image></view>
		<view class="Business-info">
			<view class="Business-name">好来玩电竞网咖</view>
			<view class="Business-time">时间：2022-11-26</view>
			<view class="Business-add">地点：余姚市余姚市余姚市余姚市余姚市...</view>
		</view>
	</view>
</template>

<script></script>

<style>
.Business {
	display: flex;
	justify-content: space-between;
	margin: 40rpx 40rpx 0 20rpx;
	/* border: 1rpx solid #fff; */
}

.Business-img {
	width: 212rpx;
	height: 290rpx;
	margin-right: 36rpx;
}

.Business-img image {
	width: 100%;
	height: 100%;
}

.Business-info {
	width: 442rpx;
	color: #fff;
}

.Business-name {
	width: 400rpx;
	font-size: 32rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.Business-time {
	font-size: 28rpx;
	margin: 34rpx 0 28rpx 0;
}

.Business-add {
	width: 442rpx;
	font-size: 28rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
