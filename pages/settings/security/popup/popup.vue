<template>
	<view class="box">
		<image src="@/static/home/chenggong.png" class="img"></image>
		<view class="list">
			<view class="phones">
				手机号修改成功
			</view>
			<view class="text">
				您修改的手机号为： 186****0846
			</view>
		</view>
		<view class="btn" @tap="complete">
			完成
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
			complete() {
				this.flag=false
				this.$emit("flag",this.flag)
			

			}
		}
	}
</script>

<style>
	.box {
		width: 704rpx;
		margin-left: 22rpx;
		height: 600rpx;
		border-radius: 30rpx;
		background-color: #29253C;
		border: 1rpx solid rgba(255, 255, 255, 0);
		position: absolute;
		top: 400rpx;
		z-index: 5;
		
	}

	.img {
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin-top: 80rpx;
		margin-left: 272rpx;
	}

	.list {
		font-size: 32rpx;
		margin-top: 40rpx;
	}

	.phones {
		color: white;
		text-align: center;
		margin-top: 40rpx;
	}

	.text {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	.btn {
		width: 200rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background-color: #B043FA;
		border-radius: 50rpx;
		color: white;
		margin: 60rpx auto;
	}
</style>
