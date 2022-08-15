<template>
	<!-- 活跃榜第四名后的排名 -->
	<view class="">
		<view class="lastRanking">
			<view class="rank" v-for="(item, index) in 6" :key="index">
				<view class="rankLeft">
					<view class="rankNum">{{ index + 4 }}</view>
					<view class="user">
						<view class="userAva"><image src="../../../static/home/b.pic.jpg" mode=""></image></view>
						<view class="usertext">
							<view class="username">啦啦啦啦啦啦啦啦</view>
							<view class="infoText">啦啦啦啦啦啦啦啦啦啦</view>
						</view>
					</view>
				</view>
				<view class="rankRight">
					<view class="user-icon">
						<view class="user-icon-img"><image src="../../../static/square/dianzan.png" mode=""></image></view>
					</view>
					<view class="text"><view class="text-num">36.9W</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
.lastRanking {
	width: 100%;
	border-radius: 30rpx 30rpx 0 0;
	padding: 20rpx 0;
	background-color: #29253c;
}

.rank {
	display: flex;
	justify-content: space-between;
	margin: 38rpx 24rpx 38rpx 40rpx;
}

.rankLeft {
	display: flex;
	align-items: center;
	height: 76rpx;
	/* border: 1rpx solid #0f0; */
}

.rankNum {
	font-size: 32rpx;
	color: #ffffff;
	margin-right: 24rpx;
}

.user {
	display: flex;
	/* width: 320rpx; */
	height: 76rpx;
}

.userAva {
	width: 76rpx;
	height: 76rpx;
	border-radius: 50%;
	margin-right: 16rpx;
	overflow: hidden;
}

.userAva image {
	width: 100%;
	height: 100%;
}

.usertext {
	font-size: 28rpx;
	color: #ffffff;
	overflow: hidden;
}

.infoText {
	width: 280rpx;
	font-size: 24rpx;
	opacity: 0.5;
}

.rankRight {
	display: flex;
	justify-content: space-between;
	width: 148rpx;
	height: 44rpx;
	margin-top: 15rpx;
}

.user-icon {
	display: flex;
	width: 44rpx;
	height: 44rpx;
	border-radius: 50%;
	background-color: #d53eda;
	overflow: hidden;
}

.user-icon-img {
	width: 16rpx;
	height: 16rpx;
}

.user-icon-img image {
	width: 100%;
	height: 100%;
	margin: 0 34rpx 0 15rpx;
}

.rankRight .text {
	width: 80rpx;
	height: 40rpx;
	text-align: center;
}

.text-num {
	color: #ffffff;
	font-size: 28rpx;
	margin-top: -10rpx;
}
</style>
