<template>
	<!-- 活跃榜 -->
	<view class="ListActive">
		<view class="ListActive-height">
			<view class="bar"></view>
			<!-- 导航栏 -->
			<Navigation title="活跃榜"></Navigation>

			<!-- 图片 -->
			<view class="img-box">
				<view class="img-rank rank1">
					<image class="image" src="@/static/square/rank-2@2x.png" mode="aspectFill"></image>
				</view>
				<view class="img-rank rank2">
					<image class="image" src="@/static/square/rank-1@2x.png" mode="aspectFill"></image>
				</view>
				<view class="img-rank rank3">
					<image class="image" src="@/static/square/rank-3@2x.png" mode="aspectFill"></image>
				</view>
				<!-- <image src="@/static/square/ranks.png" mode="aspectFill" class="avata"></image> -->
			</view>

			<!-- 前三名 -->
			<view class="user-position">
				<view class="user-box">
					<view class="user-info" v-for="item in list" :key="item.id">
						<view class="user-avata"><image :src="item.src" mode="aspectFill"></image></view>
						<view class="user-name">{{ item.name }}</view>
					</view>
				</view>
			</view>

			<!-- 排名信息 -->
			<view class="ranking-box">
				<view class="ranking" v-for="item in list" :key="item.id">
					<view class="icon"><image src="../../../static/square/dianzan.png" mode="aspectFit"></image></view>
					<view class="text">
						<view class="text-cn">累计点赞</view>
						<view class="number">{{ item.num }}</view>
					</view>
				</view>
			</view>

			<!-- 第三名之后的 -->
			<Ranking class="components-ranking"></Ranking>
		</view>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import Ranking from './Ranking.vue';
export default {
	components: {
		Navigation,
		Ranking
	},

	data() {
		return {
			windowHeight: 0,
			list: [
				{ src: '../../../static/home/c.pic.jpg', name: '不会玩阿狸', num: 5678, id: 1 },
				{ src: '../../../static/home/c.pic.jpg', name: '不会玩联盟的阿狸', num: 12345678, id: 2 },
				{ src: '../../../static/home/c.pic.jpg', name: '会玩联盟的阿狸', num: 12345678, id: 3 }
			]
		};
	},

	methods: {}
};
</script>

<style>
.ListActive {
	position: relative;
	background-image: url(@/static/square/TopicBgi.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 1500rpx;
}

.components-ranking {
	margin-top: 400rpx;
}

.img-box {
	position: relative;
	width: 650rpx;
	height: 410rpx;
	top: 400rpx;
	overflow: hidden;
	margin: 0 auto;
	left: 20rpx;
	/* border: 1rpx solid red; */
}

.img-rank {
	position: absolute;
	width: 250rpx;
	height: 330rpx;
	/* border: 1rpx solid pink; */
}

.rank1 {
	bottom: -50rpx;
	left: 0;
	width: 230rpx;
}

.rank2 {
	bottom: -20rpx;
	left: 180rpx;
	width: 250rpx;
	height: 400rpx;
}

.rank3 {
	bottom: -110rpx;
	left: 425rpx;
	width: 220rpx;
	height: 290rpx;
}

.image {
	width: 100%;
	height: 100%;
}

/* 用户信息 */

.user-position {
	position: absolute;
	top: 250rpx;
}

.user-box {
	display: flex;
	position: relative;
}

.user-info {
	width: 230rpx;
	height: 250rpx;
	position: absolute;
	/* border: 1rpx solid #fff; */
}

.user-info:first-child {
	/* margin: 120rpx 0 0 20rpx; */
	top: 130rpx;
	left: 20rpx;
}

.user-info:nth-child(2) {
	top: 0rpx;
	left: 260rpx;
}

.user-info:nth-child(3) {
	left: 495rpx;
	top: 250rpx;
}

.user-avata {
	width: 212rpx;
	height: 212rpx;
	margin-left: 9rpx;
	border-radius: 50%;
}

.user-avata image {
	width: 184rpx;
	height: 184rpx;
	border-radius: 50%;
	border: 14rpx solid #acd6ea;
	overflow: hidden;
}

.user-name {
	width: 230rpx;
	text-align: center;
	font-size: 28rpx;
	color: #fff;
	margin-top: 20rpx;
}

/* 排名 */

.ranking-box {
	position: relative;
}

.ranking {
	position: absolute;
	width: 120rpx;
	height: 140rpx;
	/* border: 1rpx solid #fff; */
}

.icon {
	width: 84rpx;
	height: 84rpx;
	border-radius: 50%;
	background-color: #d53eda;
}

.ranking:first-child {
	top: 130rpx;
	left: 115rpx;
}

.ranking:first-child .icon {
	width: 60rpx;
	height: 60rpx;
	line-height: 80rpx;
	/* text-align: center; */
	margin-left: 20rpx;
	padding: 0 0 15rpx 15rpx;
}

.ranking:first-child .icon image {
	width: 40rpx;
	height: 40rpx;
}

.ranking:first-child .text {
	margin: 10rpx 0 0 25rpx;
	transform: rotate(-10deg);
}

.ranking:first-child .text-cn {
	opacity: 0.5;
}

.ranking:nth-child(2) {
	top: -20rpx;
	left: 300rpx;
}

.ranking:nth-child(2) .icon {
	width: 84rpx;
	height: 84rpx;
	line-height: 84rpx;
	/* text-align: center; */
	margin-left: 20rpx;
	padding: 0 0 15rpx 15rpx;
}

.ranking:nth-child(2) .icon image {
	width: 60rpx;
	height: 60rpx;
	margin: 20rpx 0 0 10rpx;
}

.ranking:nth-child(2) .text {
	margin: 10rpx 0 0 25rpx;
}

.ranking:nth-child(2) .text-cn {
	opacity: 0.5;
}

.ranking:nth-child(3) {
	top: 250rpx;
	right: 70rpx;
}

.ranking:nth-child(3) .icon {
	position: relative;
	width: 50rpx;
	height: 50rpx;
	line-height: 80rpx;
	margin-left: 20rpx;
}

.ranking:nth-child(3) .icon image {
	position: absolute;
	width: 30rpx;
	height: 30rpx;
	margin: 10rpx 12rpx;
	/* border: 1rpx solid #fff; */
}

.ranking:nth-child(3) .text {
	margin: 10rpx 0 0 -40rpx;
	transform: rotate(20deg);
}

.ranking:nth-child(3) .text-cn {
	opacity: 0.5;
}

.icon image {
	width: 100%;
	height: 100%;
}

.text {
	font-size: 24rpx;
	color: #d53eda;
	text-align: center;
}

.number {
	margin-left: -5rpx;
}
</style>
