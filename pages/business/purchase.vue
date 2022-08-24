<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<swiper class="swiper-box" circular :autoplay="true" :interval="3000" indicator-dots>
			<swiper-item v-for="(item ,index) in info" :key="index">
				<view class="swiper-item">

					<image :src="item.ima" class="swiper-item-image"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="synopsis">
			[人气爆款]329，价值599元高等配置 无限畅玩通宵，饮[人气爆款]329，价值599元高等配置 无限畅玩通宵，饮
		</view>
		<view class="synopsis1">
			<view class="synopsis2">
				套餐详情
			</view>
			[人气爆款]329，价值599元高等配置 无限畅玩通宵，饮[人气爆款]329，价值599元高等配置 无限畅玩通宵，饮
		</view>


		<view class="purchase">
			<view class="purchase1">
				¥
			</view>
			<view class="purchase2">
				333
			</view>
			<view class="purchase3">
				行情价：￥258
			</view>
			<view class="purchase4" @tap="success">
				立即购买
			</view>
		</view>



	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "详情",
				info: [{

					ima: "../../static/home/lbt.png"

				}, {

					ima: "../../static/home/lbt.png"
				}, {

					ima: "../../static/home/lbt.png"
				}],

			}
		},
		components: {
			navigation
		},
		methods: {
			success() {
				uni.navigateTo({
					url: "/pages/business/success"
				})
			}
		}
	}
</script>

<style>
	.swiper-box {
		height: 460rpx;
		width: 100%;
	}

	.swiper-item {
		height: 460rpx;
		width: 100%;
		border-radius: 30rpx;
	}

	.swiper-item-image {
		height: 460rpx;
		width: 100%;
		border-radius: 30rpx;

	}

	.swiper-box .uni-swiper-dots .uni-swiper-dots-horizontal {
		margin-bottom: 1rpx;
		margin-top: 30rpx;

	}

	.swiper-box .uni-swiper-dot {

		display: inline-flex;
		height: 15rpx;
		justify-content: space-between;

	}

	.swiper-box .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		width: 15rpx;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 8rpx;

	}

	.swiper-box .uni-swiper-dot-active {
		width: 15rpx;
		height: 15rpx;

		background: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
	}

	.synopsis {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: #FFFFFF;
		padding-left: 40rpx;
		padding-top: 26rpx;
		padding-right: 22rpx;
		padding-bottom: 26rpx;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-top: 34rpx;
	}

	.synopsis1 {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: #FFFFFF;
		padding-left: 40rpx;
		padding-top: 26rpx;
		padding-right: 22rpx;
		padding-bottom: 26rpx;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-top: 34rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.synopsis2 {
		margin-bottom: 20rpx;
	}

	.purchase {
		height: 160rpx;
		width: 100%;
		background-color: #29253C;
		display: flex;
		align-items: baseline;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.purchase1 {
		color: #FFEE8C;
		font-size: 36rpx;
		margin-top: 50rpx;
		margin-left: 40rpx;
	}

	.purchase2 {
		color: #FFEE8C;
		width: 150rpx;
		font-size: 60rpx;
		margin-left: 20rpx;
	}

	.purchase3 {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.8);
		width: 200rpx;
	}

	.purchase4 {
		width: 168rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #A28F21;
		font-size: 24rpx;
		border-radius: 36rpx;
		background-color: #FFEE8C;
		margin-left: 130rpx;
	}
</style>
