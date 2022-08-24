<template>
	<!-- 话题圈主页 -->
	<view>
		<view class="bar"></view>
		<view class="circleHomePage" :style="{ height: windowHeight + 'rpx' }">
			<!-- 导航栏 -->
			<Navigation class="navigation"></Navigation>

			<!-- 卡片 -->
			<view class="cardBox">
				<view class="card">
					<view class="card-img"><image src="../../../static/home/a.pic.jpg" mode=""></image></view>
					<view class="card-text">
						<!-- 文字标题 -->
						<view class="card-title">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
						<!-- 中间数据 -->
						<view class="card-data">
							<view class="active">2564w条动态</view>
							|
							<view class="wacth">1744w浏览过</view>
						</view>
						<!-- 下方文字 -->
						<view class="card-desc">英雄联盟英雄联盟英雄联盟英雄联英雄联盟英雄联盟英雄联盟</view>
					</view>
					<!-- 按钮 -->
					<!-- <u-button class="card-button" text="+申请加入"></u-button> -->
					<view class="card-button">
						<view class="butText">
							<image class="card-button-img" src="../../../static/square/jiahao.png" mode=""></image>
							申请加入
						</view>
					</view>
					<!-- 小箭头 -->
					<view class="card-desc-img"><image src="../../../static/square/more.png" mode=""></image></view>
				</view>
			</view>

			<!-- 文本 -->
			<view class="text-text">{{ value3 }}</view>

			<!-- 标签按钮 -->
			<TagBut></TagBut>

			<!-- 圈子热门组件 -->
			<CircleHotItem class="CircleHotItemBox"></CircleHotItem>
		</view>
		<!-- ------- -->
		<!-- 悬浮按钮 -->
		<view class="suspensionBut">
			<image class="butImg" src="../../../static/square/xuanfuanniu.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import TagBut from './TagBut.vue';
import CircleHotItem from './CircleHotItem.vue';
export default {
	components: {
		Navigation,
		TagBut,
		CircleHotItem
	},
	data() {
		return {
			// 文本文字
			value3:
				'英雄联盟玩家的聚集地~英英雄联盟玩家的聚集地~英雄联盟玩家的聚集地~英雄联盟玩家的聚集地~英雄联盟玩家的聚集地~雄联盟玩家的聚集地~英雄联盟玩家的聚集地~英雄联盟玩家的聚集地~',
			tagButText: [{ name: '活跃榜', index: 0 }, { name: '圈主', index: 1 }],
			windowHeight: 0
		};
	},

	onLoad() {
		this.getWindowHeight();
	},

	methods: {
		revert() {
			uni.navigateBack({});
		},

		// 获取屏幕高度
		getWindowHeight() {
			const res = uni.getSystemInfoSync();
			// console.log(res);
			this.windowHeight = res.windowHeight * 2;
			// console.log(this.windowHeight);
		}
	}
};
</script>

<style>
.circleHomePage {
	background-image: linear-gradient(180deg, #848098 0%, #1e1a32 100%);
}

/* 卡片 */
.cardBox {
	width: 710rpx;
	margin: 0 20rpx 0 20rpx;
}

.card {
	display: flex;
	position: relative;
	height: 174rpx;
	border: 1rpx solid #fffff;
}

.card-img {
	width: 174rpx;
	height: 174rpx;
	margin-right: 16rpx;
}

.card-img image {
	width: 95%;
	height: 95%;
	border-radius: 20rpx;
}

.card-text {
	width: 500rpx;
	margin-top: 10rpx;
	background-color: transparent;
	/* border: 1rpx solid white; */
}

.card-title {
	/* margin-top: 8rpx; */
	height: 44rpx;
	line-height: 44rpx;
	width: 338rpx;
	color: #fff;
	font-size: 32rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-data {
	display: flex;
	width: 320rpx;
	height: 34rpx;
	margin-top: 14rpx;
	font-size: 24rpx;
	color: #c9c4d5;
	opacity: 0.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.active {
	margin-right: 20rpx;
}

.wacth {
	margin-left: 20rpx;
}

.card-desc {
	width: 470rpx;
	height: 34rpx;
	line-height: 34rpx;
	margin-top: 22rpx;
	color: white;
	font-size: 24rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-button {
	position: absolute;
	width: 174rpx;
	height: 68rpx;
	line-height: 68rpx;
	right: 0;
	border-radius: 20rpx;
	background-color: #848098;
	padding: 0;
}

.card-button-img {
	width: 30rpx;
	height: 30rpx;
	vertical-align: middle;
}

.butText {
	width: 100%;
	height: 100%;
	font-size: 28rpx;
	color: #fff;
}

.card-desc-img {
	width: 34rpx;
	height: 34rpx;
	position: absolute;
	bottom: 25rpx;
	right: 20rpx;
}

.card-desc-img image {
	width: 100%;
	height: 100%;
	background-color: transparent;
}

/* 文本 */
.text-text {
	margin: 20rpx 20rpx 0 20rpx;
	font-size: 24rpx;
	background-color: transparent;
	color: #fff;
	opacity: 0.5;
}

/* 热门圈子 */
.CircleHotItemBox {
	margin-top: 40rpx;
}

/* 悬浮按钮 */
.suspensionBut {
	position: fixed;
	bottom: 154rpx;
	right: 30rpx;
	width: 100rpx;
	height: 100rpx;
	/* border: 1rpx solid #fff; */
	border-radius: 50%;
	background-color: #433c59;
	overflow: hidden;
}

.butImg {
	width: 100%;
	height: 100%;
}
</style>
