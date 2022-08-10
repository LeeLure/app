<template>
	<view class="">
		<view class="bar"></view>
		<view class="more-circle">
			<!-- 导航栏 -->
			<view class="navigation">
				<view class="navigation1" @tap="revert">
					<image src="../../../static/home/fanhui.png" mode="aspectFill" class="fanhui"></image>
				</view>
				<view class="navigation2">{{ title }}</view>
				<view class="navigation3"><view class="text">创建圈子</view></view>
			</view>
		</view>

		<!-- 搜索框 -->
		<view class="input">
			<image src="../../../static/home/sousuo.png" class="img1"></image>
			<text class="text1">搜索您想搜索的人~</text>
		</view>
	</view>
</template>

<script>
export default {
	// components: {
	// 	navigation
	// },
	data() {
		return {
			title: '发现圈子'
		};
	},

	methods: {
		// 返回按键
		revert() {
			uni.navigateBack();
		},

		// 搜索
		search(res) {
			uni.showToast({
				title: '搜索：' + res.value,
				icon: 'none'
			});
		}
	}
};
</script>

<style>
/* 导航栏 */
.navigation {
	width: 750rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	display: flex;
	justify-content: space-between;
	/* border: 1rpx solid azure; */
}

.navigation1 {
	margin-left: 20rpx;
	margin-top: 8rpx;
	color: #ffffff;
}

.fanhui {
	width: 40rpx;
	height: 40rpx;
}

.navigation2 {
	width: 620rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	font-size: 32rpx;
	margin-left: 110rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
}

.navigation3 {
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	margin-top: 15rpx;
	margin-right: 20rpx;
	color: #ffffff;
	font-size: 24rpx;
	/* border: 1rpx solid white; */
	border-radius: 25rpx;
	background-color: #343147;
}

/* 搜索框 */
.input {
	width: 710rpx;
	height: 68rpx;
	line-height: 68rpx;
	margin-left: 20rpx;
	border-radius: 30rpx;
	background-color: #29253c;
}

.text1 {
	color: rgba(255, 255, 255, 0.5);
	font-size: 22rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	vertical-align: middle;
}

.img1 {
	width: 25rpx;
	height: 25rpx;
	vertical-align: middle;
	margin-right: 15rpx;
	margin-left: 36rpx;
}
</style>
