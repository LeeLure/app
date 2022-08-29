<template>
	<!-- 房间组件 -->
	<view class="item" @tap="toRoomDetail(id)">
		<view class="">
			<slot name="img"></slot>
			<view class="info">
				<slot name="title"></slot>
				<view class="time"><slot name="time"></slot></view>
				<view class="add">
					<slot name="add"></slot>
					<slot name="footer"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			roomId: 0
		};
	},
	methods: {
		// 跳转房间详情
		toRoomDetail(id) {
			// console.log(id);
			this.roomId = id;
			// console.log(this.roomId);
			// uni.showToast({});
			uni.navigateTo({
				url: `/pages/square/Room/RoomDetail/index?roomId=${this.roomId}`
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
	min-width: 340rpx;
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
</style>
