<template>
	<!-- 房间组件 -->
	<view class="item" @tap="toRoomDetail()">
		<view class="">
			<slot name="img"></slot>
			<view class="info">
				<slot name="title"></slot>
				<view class="time">
					<!-- <u-icon name="clock" color="#B043FA" size="15"></u-icon> -->
					<image class="timeIcon" src="../../../static/square/time.png" mode=""></image>
					11-8 星期六 14：30
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
	methods: {
		// 跳转房间详情
		toRoomDetail() {
			// uni.showToast({});
			uni.navigateTo({
				url: '/pages/square/Room/RoomDetail/index'
			});
		}
	}
};
</script>

<style>
.item {
	display: flex;
	/* margin: 32rpx 15rpx 0 15rpx; */
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
	font-size: 24rpx;
	color: #999999;
	vertical-align: middle;
}

.timeIcon {
	vertical-align: middle;
	width: 30rpx;
	height: 30rpx;
	margin: 4rpx 6rpx 0 0;
	/* margin-top: 4rpx; */
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

.addIcon {
	width: 30rpx;
	height: 30rpx;
	margin-right: 6rpx;
}

.addIcon image {
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
</style>
