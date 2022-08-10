<template>
	<view class="box">
		<image src="@/static/home/chenggong.png" class="img"></image>
		<view class="list">
			<view class="phones">
				手机验证码
			</view>
			<view class="text">
				输入您想使用的手机号
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.box {
		width: 704rpx;
		margin-left: 20rpx;
		height: 600rpx;
		border-radius: 30rpx;
		background-color: #29253C;
	}

	.img {}

	.list {
		font-size: 28rpx;
		margin-top: 60rpx;
	}

	.phones {
		color: white;
		text-align: center;
		margin-top: 40rpx;
	}

	.text {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		text-align: center;
		margin-top: 20rpx;
	}
</style>
