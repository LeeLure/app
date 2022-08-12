<template>
	<view class="brief">
		<view class="logo">
			<image class="img" src="@/static/home/a.pic.jpg" />
		</view>
		<view class="details">
			<view class="cricle-title">
				<view>英雄联盟超话</view>
				<view><u-icon name="arrow-right" color='rgba(255,255,255,0.5)' size="26rpx"></u-icon></view>
			</view>
			<view class="cricle-brief">英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "category-brief",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.brief{
	background-color: #29253C;
	border-radius: 20rpx;
	padding: 14rpx 30rpx;
	box-sizing: border-box;
	width: 100%;
	display: flex;
}
.brief .logo{
	width: 150rpx;
	height: 150rpx;
	border-radius: 20rpx;
}
.brief .logo .img{
	width: 100%;
	height: 100%;
	border-radius: 20rpx;
}
.brief .details{
	box-sizing: border-box;
	padding: 0 16rpx;
	flex: 1;
}
.brief .cricle-title{
	display: flex;
	font-size: 28rpx;
	color: #fff;
	align-items: center;
	justify-content: space-between;
}
.brief .cricle-brief{
	margin-top: 10rpx;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
	line-height: 36rpx;
}
</style>
