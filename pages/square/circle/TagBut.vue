<template>
	<view class="tagButBox">
		<view class="tagBut" @tap="toListActive">
			<view class="partake">
				<image src="../../../static/home/lbt.png" class="partakeimage1"></image>
				<image src="../../../static/home/lbt.png" class="partakeimage2"></image>
				<image src="../../../static/home/lbt.png" class="partakeimage3"></image>
			</view>
			<view class="butTextBox">
				<view class="ButText">活跃榜</view>
				<view class="ButTextImg"><image src="../../../static/square/more-right.png" mode=""></image></view>
			</view>
		</view>
		<!-- 第二个 -->
		<view class="tagBut" @tap="toTopicMain">
			<view class="partake">
				<image src="../../../static/home/lbt.png" class="partakeimage1"></image>
				<!-- <image src="../../../static/home/lbt.png" class="partakeimage2"></image> -->
				<!-- <image src="../../../static/home/lbt.png" class="partakeimage3"></image> -->
			</view>
			<view class="butTextBox">
				<view class="ButText">圈主</view>
				<view class="ButTextImg"><image src="../../../static/square/more-right.png" mode=""></image></view>
			</view>
		</view>
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
			},

			toListActive() {
				uni.navigateTo({
					url: '/pages/square/circle/ListActive'
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
	margin: 30rpx 20rpx 0 20rpx;
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

.tagBut:first-child {
	margin-right: 16rpx;
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
	border: 1rpx solid #fff;
}

.partakeimage2 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 20rpx;
	border: 1rpx solid #fff;
}

.partakeimage3 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 40rpx;
	border: 1rpx solid #fff;
}

.butTextBox {
	display: flex;
	/* border: 1rpx solid #fff; */
}

.ButText {
	color: #fff;
	font-size: 24rpx;
	margin-right: 24rpx;
	/* border: 1rpx solid #fff; */
}

.ButTextImg {
	width: 20rpx;
	height: 20rpx;
	/* border: 1rpx solid #f0f; */
	vertical-align: middle;
}

.ButTextImg image {
	width: 100%;
	height: 100%;
	/* background-color: #fff; */
	margin-bottom: 12rpx;
	/* border: 1rpx solid #ff0; */
}
</style>
