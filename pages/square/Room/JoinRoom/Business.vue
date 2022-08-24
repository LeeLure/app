<template>
	<view class="card">
		<view class="card-img"><image src="../../../../static/square/item-1.jpg" mode=""></image></view>
		<view class="card-text">
			<!-- 文字标题 -->
			<view class="card-title">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
			<!-- 中间数据 -->
			<view class="card-data">12345W圈友</view>
			<!-- 下方文字 -->
			<view class="card-desc">联盟英雄联盟英</view>
		</view>
		<!-- 位置信息 -->
		<view class="card-add"><view class="card-add-text">滨江路 1.04km</view></view>
	</view>
</template>

<script></script>

<style>
.card {
	display: flex;
	position: relative;
	width: 100%rpx;
	height: 244rpx;
	margin-top: 30rpx;
	padding: 0 20rpx;
	border-radius: 20rpx;
	background-color: #29253c;
	/* border: 1rpx solid #fffff; */
}

.card-img {
	width: 160rpx;
	height: 160rpx;
	margin: 38rpx 18rpx 0 16rpx;
}

.card-img image {
	width: 100%;
	height: 100%;
	border-radius: 20rpx;
}

.card-text {
	max-width: 324rpx;
	max-height: 160rpx;
	background-color: transparent;
	margin-top: 40rpx;
	/* border: 1rpx solid white; */
}

.card-title {
	/* margin-top: 8rpx; */
	max-width: 100%;
	color: #fff;
	font-size: 28rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/* border: 1rpx solid deeppink; */
}

.card-data {
	max-width: 100%;
	/* height: 32rpx; */
	margin: 24rpx 0 26rpx 0;
	font-size: 24rpx;
	color: #ffffff;
	opacity: 0.8;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-desc {
	max-width: 70%;
	margin-top: 12rpx;
	color: white;
	font-size: 24rpx;
	opacity: 0.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/* border: 1rpx solid #fff; */
}

.card-add {
	position: absolute;
	max-width: 212rpx;
	height: 34rpx;
	bottom: 50rpx;
	right: 20rpx;
	text-align: center;
	font-size: 24rpx;
	color: #ffffff;
	opacity: 0.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/* border: 1rpx solid #fff; */
}
</style>
