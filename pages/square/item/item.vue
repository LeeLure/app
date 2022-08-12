<template>
	<!-- 广场列表组件 -->
	<view class="item">
		<view class="">
			<view class="img"><image class="img-image" src="../../../static/square/item-1.jpg" alt="" /></view>
			<view class="info">
				<view class="title">无剧本杀不狂欢！一起来寻找真相吧！！！</view>
				<view class="time">
					<u-icon name="clock" color="#B043FA" size="15"></u-icon>
					<view class="timeText">11-8 星期六 14：30</view>
				</view>
				<view class="add">
					<u-icon name="map" color="#B043FA" size="15"></u-icon>
					<view class="addText">余姚&nbsp;&nbsp;|&nbsp;&nbsp;距你</view>
					<text class="text">568m</text>
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
	width: 340rpx;
	height: 479rpx;
	margin: 32rpx 15rpx 0 15rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	overflow: hidden;
	/* border: 1rpx solid white; */
}

.img {
	width: 100%;
	height: 284rpx;
}

.img-image {
	width: 100%;
	height: 100%;
	border-radius: 30rpx 30rpx 0 0;
}

.info {
	height: 194rpx;
	/* box-sizing: border-box; */
	padding: 10rpx;
	background-color: #fff;
	border-radius: 0 0 30rpx 30rpx;
}

.title {
	height: 94rpx;
	font-size: 28rpx;
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
</style>
