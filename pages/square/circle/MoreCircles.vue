<template>
	<view class="">
		<view class="bar"></view>
		<view class="more-circle">
			<!-- 导航栏 -->
			<view class="navigation">
				<view class="navigation1" @tap="revert">
					<image src="../../../static/home/fanhui.png" mode="aspectFill" class="fanhui"></image>
				</view>
				<view class="navigation2">{{ title }}</view>
				<view class="navigation3"><view class="text">创建圈子</view></view>
			</view>
		</view>

		<!-- 搜索框 -->
		<view class="input">
			<image src="../../../static/home/sousuo.png" class="img1"></image>
			<text class="text1">搜索您想搜索的人~</text>
		</view>

		<!-- 菜单 -->
		<view class="list">
			<!-- 左侧菜单栏 -->
			<view class="leftCategory">
				<view class="category" v-for="item in categoryList" :key="item.index">
					<!-- 背景色 -->
					<view :class="{ bgColor: isColor === item.index }"></view>
					<view class="text">{{ item.title }}</view>
				</view>
			</view>

			<!-- 右侧卡片 -->
			<view class="rightCategory">
				<view class="card" v-for="item in 10" @tap="toCircleHomePage(item)">
					<view class="card-img"><image src="../../../static/home/a.pic.jpg" mode=""></image></view>
					<view class="card-text">
						<!-- 文字标题 -->
						<view class="card-title">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
						<!-- 中间数据 -->
						<view class="card-data">12345W圈友</view>
						<!-- 下方文字 -->
						<view class="card-desc">英雄联盟英雄联盟英雄联盟英雄联盟雄联盟英雄联盟英雄联盟英</view>
					</view>
					<!-- 按钮 -->
					<button class="card-button" @tap.stop="joinCircle">加入</button>
					<!-- <u-button size="small" class="card-button" text="+申请加入" ></u-button> -->
				</view>
			</view>
		</view>
		<!-- ------- -->
	</view>
</template>

<script>
export default {
	// components: {
	// 	// navigation
	// },
	data() {
		return {
			title: '发现圈子',
			isColor: 0 || 2,
			categoryList: [
				{ title: '推荐圈子', index: 0 },
				{ title: '推荐圈子', index: 1 },
				{ title: '推荐圈子', index: 2 },
				{ title: '推荐圈子', index: 3 },
				{ title: '推荐圈子', index: 4 },
				{ title: '推荐圈子', index: 5 },
				{ title: '推荐圈子', index: 6 },
				{ title: '推荐圈子', index: 7 },
				{ title: '推荐圈子', index: 8 },
				{ title: '推荐圈子', index: 9 },
				{ title: '推荐圈子', index: 10 }
			]
		};
	},

	methods: {
		// 返回按键
		revert() {
			uni.navigateBack();
		},

		// 加入圈子
		joinCircle() {
			uni.showToast({});
		},

		// 圈子主页
		toCircleHomePage() {
			uni.navigateTo({
				url: '/pages/square/circle/CircleHomePage'
			});
		}
	}
};
</script>

<style>
/* 导航栏 */
.navigation {
	width: 750rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	display: flex;
	justify-content: space-between;
	/* border: 1rpx solid azure; */
}

.navigation1 {
	margin-left: 20rpx;
	margin-top: 8rpx;
	color: #ffffff;
}

.fanhui {
	width: 40rpx;
	height: 40rpx;
}

.navigation2 {
	width: 620rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	font-size: 32rpx;
	margin-left: 110rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
}

.navigation3 {
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	margin-top: 15rpx;
	margin-right: 20rpx;
	color: #ffffff;
	font-size: 24rpx;
	/* border: 1rpx solid white; */
	border-radius: 25rpx;
	background-color: #343147;
}

/* 搜索框 */
.input {
	width: 710rpx;
	height: 68rpx;
	line-height: 68rpx;
	margin-left: 20rpx;
	border-radius: 30rpx;
	background-color: #29253c;
}

.text1 {
	color: rgba(255, 255, 255, 0.5);
	font-size: 22rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	vertical-align: middle;
}

.img1 {
	width: 25rpx;
	height: 25rpx;
	vertical-align: middle;
	margin-right: 15rpx;
	margin-left: 36rpx;
}

/* 菜单 */
.list {
	display: flex;
	margin-top: 20rpx;
	/* border: 1rpx solid #ffffff; */
}
/* 左侧菜单 */

.leftCategory {
	width: 176rpx;
	/* border: 1rpx solid #ffffff; */
}

.category {
	display: flex;
	position: relative;
	height: 100rpx;
	/* margin-right: 16rpx; */
	border-radius: 0 20rpx 20rpx 0;
	/* border: 1rpx solid #ffffff; */
}

.bgColor {
	width: 58rpx;
	height: 100rpx;
	background-image: linear-gradient(90deg, #7221ea 0%, #221c40 100%);
}

.category .text {
	width: 96rpx;
	height: 34rpx;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #ffffff;
	font-size: 24rpx;
}

/* 右侧菜单 */
.rightCategory {
	width: 554rpx;
	margin-left: 20rpx;
}

.card {
	display: flex;
	width: 100%;
	position: relative;
	margin-top: 30rpx;
	height: 136rpx;
	/* border: 1rpx solid #fffff; */
}

.card-img {
	width: 136rpx;
	height: 136rpx;
	margin-right: 16rpx;
}

.card-img image {
	width: 95%;
	height: 95%;
	border-radius: 20rpx;
}

.card-text {
	width: 396rpx;
	background-color: transparent;
	/* border: 1rpx solid white; */
}

.card-title {
	/* margin-top: 8rpx; */
	width: 262rpx;
	color: #fff;
	font-size: 28rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-data {
	width: 272rpx;
	height: 32rpx;
	margin-top: 8rpx;
	font-size: 22rpx;
	color: #c9c4d5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-desc {
	width: 396rpx;
	/* height: 34rpx; */
	/* line-height: 34rpx; */
	margin-top: 12rpx;
	color: white;
	font-size: 20rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-button {
	position: absolute;
	width: 108rpx;
	height: 46rpx;
	line-height: 46rpx;
	right: 20rpx;
	font-size: 22rpx;
	text-align: center;
	border-radius: 30rpx;
	background-color: #ffee8c;
}
</style>
