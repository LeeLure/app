<template>
	<view class="tagButBox">
		<button class="tagBut">
			<view class="partake">
				<image src="../../../static/home/lbt.png" class="partakeimage1"></image>
				<image src="../../../static/home/lbt.png" class="partakeimage2"></image>
				<image src="../../../static/home/lbt.png" class="partakeimage3"></image>
			</view>
			<view class="butTextBox">
				<view class="tagButText">活跃榜</view>
				<view class="tagButTextImg"><image src="../../../static/square/more.png" mode=""></image></view>
			</view>
		</button>
		<!-- 第二个 -->
		<button class="tagBut" @tap="toTopicMain">
			<view class="partake">
				<image src="../../../static/home/lbt.png" class="partakeimage1"></image>
				<!-- <image src="../../../static/home/lbt.png" class="partakeimage2"></image> -->
				<!-- <image src="../../../static/home/lbt.png" class="partakeimage3"></image> -->
			</view>
			<view class="butTextBox">
				<view class="tagButText">圈主</view>
				<view class="tagButTextImg"><image src="../../../static/square/more.png" mode=""></image></view>
			</view>
		</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			toTopicMain() {
				uni.navigateTo({
					url: '/pages/square/circle/TopicMain'
				});
			}
		};
	}
};
</script>

<style>
/* 标签按钮 */

.tagButBox {
	display: flex;
	/* justify-content: space-between; */
	margin: 30rpx 10rpx 0 10rpx;
}

.tagBut {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 334rpx;
	height: 94rpx;
	padding: 0 36rpx;
	border-radius: 20rpx;
	background-color: #706a81;
	/* border: 1rpx solid #fff; */
}

.partake {
	display: flex;
	justify-content: space-between;
	width: 80rpx;
	height: 40rpx;
	position: relative;
	/* border: 1rpx solid #fff; */
}

.partakeimage1 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	/* border: 1rpx solid #fff; */
}

.partakeimage2 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 20rpx;
	/* border: 1rpx solid #fff; */
}

.partakeimage3 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 40rpx;
}

.tagButText {
	width: 72rpx;
	/* height: 34rpx; */
	position: relative;
	padding-right: 8rpx;
	color: white;
	margin-top: 20rpx;
	font-size: 24rpx;
	border-radius: 30rpx;
	overflow: hidden;
	/* border: 1rpx solid #fff; */
}

.tagButTextImg {
	width: 20rpx;
	height: 20rpx;
}

.tagButTextImg image {
	position: absolute;
	width: 20rpx;
	height: 20rpx;
	right: 20rpx;
	bottom: 35rpx;
	/* border: 1rpx solid #fff; */
}
</style>
