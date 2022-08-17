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
<view class="synopsis1">
			<view class="synopsis2">
				订单详情
			</view>
		<view class="synopsis2">
			订单编号 654684569
		</view>
		<view class="synopsis2">
			购买时间 654684569
		</view>
		<view class="synopsis2">
			有效至： 654684569
		</view>
		
		</view>

	


	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "订单详情",
				info: [{

					ima: require("@/static/home/lbt.png")

				}, {

					ima: require("@/static/home/lbt.png")
				}, {

					ima: require("@/static/home/lbt.png")
				}],

			}
		},
		components: {
			navigation
		},
		methods: {
			
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

</style>
