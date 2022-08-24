<template>
	<view class="RoomDetailItem">
		<!-- 用户信息 -->
		<view class="position">
			<view class="user">
				<view class="userAvata">
					<view class="avataImg">
						<image src="../../../../static/home/b.pic.jpg" mode=""></image>
						<view class="user-icon"><view class="user-icon-text">主办方</view></view>
					</view>
				</view>
				<view class="user-text">
					<view class="user-name">啦啦啦啦啦啦啦啦</view>
					<view class="user-time">2022-8-2 10：16</view>
				</view>
			</view>
		</view>

		<!-- 队伍人数信息 -->
		<TeamNumber></TeamNumber>

		<!-- 地址信息 -->
		<Address></Address>

		<!-- 活动详情 -->
		<Activity></Activity>

		<!-- 按钮 -->
		<!-- <Button></Button> -->
	</view>
</template>

<script>
import Address from './Address.vue';
import Activity from './Activity.vue';
// import Button from './Button.vue';
import TeamNumber from './TeamNumber.vue';
export default {
	components: {
		Address,
		Activity,
		// Button,
		TeamNumber
	},

	data() {
		return {};
	}
};
</script>

<style>
.RoomDetailItem {
	border-radius: 30rpx 30rpx 0 0;
	margin-top: 84rpx;
	padding: 0 20rpx;
	border: 1rpx solid transparent;
	background-color: #1e1a32;
}

/* 用户信息 */
.position {
	position: relative;
}

.RoomDetailItem .user {
	display: flex;
	position: absolute;
	top: -38rpx;
	/* height: 184rpx; */
}

.RoomDetailItem .userAvata {
	position: relative;
}

.avataImg {
	width: 184rpx;
	height: 184rpx;
	border-radius: 50%;
	overflow: hidden;
}

.RoomDetailItem .userAvata image {
	width: 100%;
	height: 100%;
}

.RoomDetailItem .user-icon {
	position: absolute;
	width: 102rpx;
	height: 38rpx;
	bottom: -20rpx;
	left: 42rpx;
	border-radius: 20rpx;
	background-color: #d53eda;
	border: #fff;
}

.user-icon-text {
	font-size: 24rpx;
	text-align: center;
	color: #fff;
}

.RoomDetailItem .user-text {
	/* width: 200rpx; */
	height: 44rpx;
	margin: 64rpx 0 12rpx 24rpx;
	color: #fff;
}

.RoomDetailItem .user-name {
	width: 260rpx;
	font-size: 32rpx;
}

.RoomDetailItem .user-time {
	font-size: 24rpx;
	margin-top: 20rpx;
	opacity: 0.6;
}
</style>
