<template>
	<!-- 广场圈子组件 -->
	<view class="circle">
		<view class="img"><image class="img-img" src="../../../static/square/circle-1.jpg" alt="" /></view>
		<view class="text">
			<view class="title">{{ circleList.title }}</view>
			<view class="info">{{ circleList.info }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		circleList: Object
	},

	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.circle {
	display: flex;
	width: 348rpx;
	height: 104rpx;
	background-color: #e8efff;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	opacity: 1;
	/* margin-top: 40rpx; */
	padding: 2rpx 0 2rpx 16rpx;
	margin-right: 8rpx;
}

.img {
	width: 84rpx;
	height: 78rpx;
	padding: 15rpx 10rpx 10rpx 10rpx;
}

.img-img {
	width: 100%;
	height: 100%;
}

.text {
	padding-top: 14rpx;
}

.title {
	width: 178rpx;
	height: 42rpx;
	font-size: 28rpx;
	font-weight: 700;
}

.info {
	width: 214rpx;
	height: 36rpx;
	font-size: 24rpx;
	color: #444444;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
