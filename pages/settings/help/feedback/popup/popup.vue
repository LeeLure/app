<template>
	<view class="boxs">
		<image src="@/static/home/chenggong.png" class="img"></image>
		<view class="list">
			<view class="phones">
				意见反馈成功
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
	.boxs {
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
		font-size: 36rpx;
		margin-top: 40rpx;
	}

	.phones {
		color: white;
		text-align: center;
		margin-top: 40rpx;
	}

	

	.btn {
		width: 168rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		margin: 80rpx auto;
	}
</style>
