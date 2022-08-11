<template>
	<view>
		<view class="card">
			<view class="card-img"><image src="../../../static/home/a.pic.jpg" mode=""></image></view>
			<view class="card-text">
				<!-- 文字标题 -->
				<view class="card-title">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
				<!-- 中间数据 -->
				<
				<view class="card-data">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
				<!-- 下方文字 -->
				<view class="card-desc">英雄联盟英雄联盟英雄联盟英雄联盟</view>
			</view>
			<!-- 按钮 -->
			<u-button class="card-button" text="+申请加入"></u-button>
			<!-- 小箭头 -->
			<view class="card-desc-img"><image src="../../../static/square/youjiaotou.jpg" mode=""></image></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		botText: String
	},

	data() {
		return {
			// title: '英雄联盟'
		};
	},

	methods: {}
};
</script>

<style>
.card {
	display: flex;
	/* width: 330rpx; */
	position: relative;
	height: 160rpx;
	border: 1rpx solid #fffff;
}

.card-small {
	display: flex;
	/* width: 330rpx; */
	position: relative;
	height: 136rpx;
	border: 1rpx solid #ff0;
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
	background-color: transparent;
	border: 1rpx solid white;
}

.card-title {
	/* margin-top: 8rpx; */
	width: 348rpx;
	color: #fff;
	font-size: 32rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-button {
	position: absolute;
	width: 174rpx;
	height: 68rpx;
	right: 20rpx;
	border-radius: 20rpx;
	background-color: #848098;
}

.card-desc-img {
	width: 34rpx;
	height: 34rpx;
	position: absolute;
	bottom: 15rpx;
	right: 20rpx;
}

.card-desc-img image {
	width: 100%;
	height: 100%;
}
</style>
