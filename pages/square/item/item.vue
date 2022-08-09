<template>
	<!-- item -->
	<view class="item">
		<view class="">
			<view class="img"><img class="img-image" src="../../../static/square/item-1.jpg" alt="" /></view>
			<view class="info">
				<view class="title">无剧本杀不狂欢！一起来寻找真相吧！！！</view>
				<view class="time">11-8 星期六 14:30</view>
				<view class="add">
					余姚 | 距你
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
	margin: 28rpx 10rpx 0 10rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	overflow: hidden;
}

.img {
	width: 100%;
	height: 284rpx;
}

.img-image {
	width: 100%;
	height: 100%;
	/* border-radius: 30rpx 30rpx 0 0; */
}

.info {
	height: 170rpx;
	padding: 10rpx;
	background-color: #fff;
}

.title {
	height: 94rpx;
	font-size: 28rpx;
}

.time {
	font-size: 24rpx;
	color: #999999;
}

.add {
	font-size: 24rpx;
	color: #999999;
	margin-top: 12rpx;
}

.text {
	color: #b043fa;
}
</style>
