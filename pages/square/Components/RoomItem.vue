<template>
	<!-- 广场列表组件 -->
	<view class="item">
		<view class="">
			<slot name="img"></slot>
			<view class="info">
				<slot name="title"></slot>
				<view class="time">
					<!-- <u-icon name="clock" color="#B043FA" size="15"></u-icon> -->
					<view class="timeIcon"><image src="../../../static/square/time.png" mode=""></image></view>
					<view class="timeText">11-8 星期六 14：30</view>
				</view>
				<view class="add">
					<!-- <u-icon name="map" color="#B043FA" size="15"></u-icon> -->
					<view class="addIcon"><image src="../../../static/square/add.png" mode=""></image></view>
					<view class="addText">余姚&nbsp;&nbsp;|&nbsp;&nbsp;距你</view>
					<text class="text">568m</text>
					<slot name="footer"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.item {
	display: flex;
	margin: 32rpx 15rpx 0 15rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	overflow: hidden;
}

.info {
	/* height: 194rpx; */
	box-sizing: border-box;
	padding: 10rpx;
	background-color: #fff;
	border-radius: 0 0 30rpx 30rpx;
}

.time {
	display: flex;
}

.timeText {
	margin-left: 4rpx;
	font-size: 24rpx;
	color: #999999;
}

.add {
	display: flex;
	font-size: 24rpx;
	color: #999999;
	margin-top: 12rpx;
}

.addText {
	margin-left: 4rpx;
}

.text {
	color: #b043fa;
}

.timeIcon {
	width: 30rpx;
	height: 30rpx;
}

.timeIcon image {
	width: 100%;
	height: 100%;
	margin-top: -1rpx;
	/* vertical-align: middle; */
}

.addIcon {
	width: 30rpx;
	height: 30rpx;
}

.addIcon image {
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
</style>
