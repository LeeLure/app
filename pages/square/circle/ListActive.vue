<template>
	<!-- 活跃榜 -->
	<view class="">
		<view class="ListActive">
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

			<view class="user-box">
				<view class="user-info" v-for="item in list" :key="item.id">
					<view class="user-avata"><image :src="item.src" mode=""></image></view>
					<view class="user-name">{{ item.name }}</view>
				</view>
			</view>

			<!-- 第三名之后的 -->
			<!-- <Ranking></Ranking> -->
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
				{ src: '../../../static/home/c.pic.jpg', name: '不会玩联盟的阿狸', num: 12345678, id: 1 },
				{ src: '../../../static/home/c.pic.jpg', name: '不会玩联盟的阿狸', num: 12345678, id: 2 },
				{ src: '../../../static/home/c.pic.jpg', name: '不会玩联盟的阿狸', num: 12345678, id: 3 }
			]
		};
	},

	onLoad() {
		// var _this = this
		uni.getSystemInfo({
			success(res) {
				// console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
				this.windowHeight = res.windowHeight * 2;
				console.log('屏幕高度 HH = ' + this.windowHeight);
			}
		});
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

.img-box {
	position: relative;
	width: 650rpx;
	height: 410rpx;
	top: 400rpx;
	overflow: hidden;
	margin: 0 auto;
	/* border: 1rpx solid red; */
}

.img-rank {
	position: absolute;
	width: 230rpx;
	height: 330rpx;
	/* border: 1rpx solid pink; */
}

.rank1 {
	bottom: -50rpx;
	left: 0;
	width: 220rpx;
}

.rank2 {
	bottom: 0;
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
.user-box {
	display: flex;
}

.user-info {
	width: 100%;
	height: 250rpx;
	border: 1rpx solid #fff;
}

.user-avata {
	width: 212rpx;
	height: 212rpx;
	border: 1rpx solid salmon;
}

.user-avata image {
	width: 184rpx;
	height: 184rpx;
	border-radius: 50%;
	overflow: hidden;
}
</style>
