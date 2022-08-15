<template>
	<!-- 活跃榜 -->
	<view class="ListActive">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation title="活跃榜"></Navigation>

		<!-- 前三名 -->
		<view class="userBox">
			<view class="userInfo">
				<!-- 第二名 -->
				<view class="second">
					<view class="userAvata">
						<view class="avataImg"><image src="../../../static/home/b.pic.jpg" mode=""></image></view>
					</view>
					<view class="userName">不会玩联盟的阿狸</view>
					<!-- 排名信息 -->
					<view class="ranking">
						<view class="icon">
							<!-- <view class="iconImg"> -->
							<!-- </view> -->
							<image src="../../../static/square/dianzan.png" mode=""></image>
						</view>
						<view class="text">
							<view class="text-cn">累计点赞</view>
							<view class="number">12345678</view>
						</view>
					</view>
				</view>
				<!-- 第一名 -->
				<view class="first">
					<view class="userAvata">
						<view class="avataImg"><image src="../../../static/home/b.pic.jpg" mode=""></image></view>
					</view>
					<view class="userName">不会玩联盟的阿狸</view>
					<!-- 排名信息 -->
					<view class="ranking">
						<view class="icon"><image src="../../../static/square/dianzan.png" mode=""></image></view>
						<view class="text">
							<view class="text-cn">累计点赞</view>
							<view class="number">12345678</view>
						</view>
					</view>
					<!-- 皇冠 -->
					<view class="crown">
						<image class="crown-img" src="../../../static/square/huangguan.png" mode=""></image>
					</view>
				</view>
				<!-- 第三名 -->
				<view class="third">
					<view class="userAvata">
						<view class="avataImg"><image src="../../../static/home/b.pic.jpg" mode=""></image></view>
					</view>
					<view class="userName">不会玩联盟的阿狸</view>
					<!-- 排名信息 -->
					<view class="ranking">
						<view class="icon">
							<!-- <view class="iconImg"> -->
							<!-- </view> -->
							<image src="../../../static/square/dianzan.png" mode=""></image>
						</view>
						<view class="text">
							<view class="text-cn">累计点赞</view>
							<view class="number">12345678</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 第三名之后的 -->
		<Ranking></Ranking>
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
		return {};
	},
	methods: {}
};
</script>

<style>
.ListActive {
	background-image: url(@/static/square/bg2.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 1500rpx;
}

.userBox {
	/* border: 1rpx solid #00f; */
	margin-top: 80rpx;
}

.userInfo {
	display: flex;
	justify-content: space-between;
	margin: 0 32rpx;
}
.userAvata {
	width: 212rpx;
	height: 212rpx;
	/* padding: 14rpx; */
	border-radius: 50%;
	background-color: #9ed0ef;
	/* border: 1rpx solid darkcyan; */
	overflow: hidden;
}

.avataImg {
	width: 184rpx;
	height: 184rpx;
	margin: 15rpx;
	border-radius: 50%;
	/* border: 1rpx solid darkblue; */
	overflow: hidden;
}

.avataImg image {
	width: 100%;
	height: 100%;
}

.userName {
	width: 224rpx;
	height: 40rpx;
	line-height: 40rpx;
	margin-top: 10rpx;
	color: #fff;
	font-size: 28rpx;
}

.first .userName {
	margin-top: 15rpx;
}

.first {
	position: relative;
}

.crown {
	position: absolute;
	width: 75rpx;
	height: 75rpx;
	top: -20rpx;
	right: -20rpx;
}

.crown .crown-img {
	width: 75rpx;
	height: 75rpx;
}

.second {
	margin-top: 140rpx;
}

.third {
	margin-top: 210rpx;
}

/* 排名 */
.ranking {
	width: 110rpx;
	margin: 35rpx 0 0 50rpx;
}

.icon {
	width: 84rpx;
	height: 84rpx;
	line-height: 84rpx;
	text-align: center;
	border-radius: 50%;
	margin-left: 14rpx;
	background-color: #d53eda;
	overflow: hidden;
}

.icon image {
	width: 40rpx;
	height: 40rpx;
}

.text {
	margin-top: 10rpx;
	font-size: 24rpx;
	width: 110rpx;
	text-align: center;
}

.text-cn {
	color: #d53eda;
	opacity: 0.5;
}

.number {
	height: 34px;
	line-height: 34rpx;
	color: #d53eda;
	margin-top: 10rpx;
	opacity: 1;
}

.second .icon {
	width: 60rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	margin-left: 55rpx;
}

.second .text {
	transform: rotate(-10deg);
	margin-left: 55rpx;
}

.second .icon image {
	width: 30rpx;
	height: 30rpx;
}

.third .icon {
	margin-top: 60rpx;
}

.third .icon {
	width: 48rpx;
	height: 48rpx;
	line-height: 48rpx;
	margin-left: 20rpx;
	/* text-align: center; */
}

.third .icon image {
	width: 20rpx;
	height: 20rpx;
}

.third .text {
	margin-left: -20rpx;
	transform: rotate(10deg);
}
</style>
