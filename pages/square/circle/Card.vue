<template>
	<view>
		<view class="card">
			<view class="card-img"><image src="../../../static/home/a.pic.jpg" mode=""></image></view>
			<view class="card-text">
				<!-- 文字标题 -->
				<view class="card-title">{{ title }}</view>

				<!-- 中间数据的插槽 -->
				<view class="card-data"><slot name="data"></slot></view>

				<!-- 下方文字的插槽 -->
				<view class="card-desc"><slot name="desc"></slot></view>
			</view>

			<!-- 按钮 -->
			<u-button class="card-button" text="+ 申请加入"></u-button>

			<!-- 小箭头 -->
			<view class="card-desc-img"><image src="../../../static/square/youjiaotou.jpg" mode=""></image></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String
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
	color: #fff;
	font-size: 32rpx;
}

.card-data {
	height: 34rpx;
	margin-top: 14rpx;
	font-size: 24rpx;
	color: #c9c4d5;
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
	right: 20rpx;
	border-radius: 20rpx;
	background-color: #848098;
}

.card-desc-img {
	width: 20rpx;
	height: 20rpx;
	position: absolute;
	bottom: 30rpx;
	right: 20rpx;
}

.card-desc-img image {
	width: 100%;
	height: 100%;
}
</style>
