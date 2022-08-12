<template>
	<view class="navHotItem">
		<!-- 用户信息 -->
		<view class="itemUser">
			<view class="userAvata"><image class="userAvataImg" src="../../../static/home/a.pic.jpg" mode=""></image></view>
			<view class="userInfo">
				<view class="user-name">{{ username }}</view>
				<view class="time">{{ time }}前发布</view>
			</view>
			<view class="moreIcon"><image class="iconImg" src="../../../static/square/shudian.jpg" mode=""></image></view>
		</view>

		<!-- 图片位置 -->
		<view class="itemIamge"><image src="../../../static/home/b.pic.jpg" mode=""></image></view>

		<!-- 标签位置 -->
		<view class="itemTag">
			<div class="tags">
				<view class="tagItem">#英雄联盟大师</view>
				<view class="tagItem">英雄联盟</view>
			</div>
		</view>

		<!-- 交互位置 -->
		<view class="itemInteraction">
			<view class="partake">
				<view class="partake1"><image src="../../../static/home/c.pic.jpg" class="partakeimage"></image></view>
				<view class="partake2"><image src="../../../static/home/c.pic.jpg" class="partakeimage"></image></view>
				<view class="partake3"><image src="../../../static/home/c.pic.jpg" class="partakeimage"></image></view>
				<view class="conversation">1539人等参与了此话题</view>
				<view class="praise" @tap="click(show)">
					<image src="../../../static/home/dianzan.png" class="fabulous" v-if="show"></image>
					<image src="../../../static/home/dianjishow.png" class="fabulous" v-else></image>
					<text class="praisetext">999</text>
				</view>
				<view class="praise">
					<image src="../../../static/home/pinglun.png" class="fabulous"></image>
					<text class="praisetext">999</text>
				</view>
			</view>
		</view>
		<!-- 悬浮按钮 -->
		<view class="suspensionBut">
			<image class="butImg" src="../../../static/square/xuanfuanniu.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			username: '不会玩联盟的阿狸',
			time: '五分钟',
			show: false
		};
	},

	methods: {
		click(show) {
			this.show = !show;
		}
	}
};
</script>

<style>
.navHotItem {
	position: relative;
	padding-bottom: 34rpx;
}

.itemUser {
	display: flex;
	position: relative;
	height: 110rpx;
	/* border: 1rpx solid #fff; */
}

.userAvata {
	width: 92rpx;
	height: 92rpx;
	border-radius: 50%;
	margin: 11rpx 8rpx 11rpx 10rpx;
	overflow: hidden;
	/* border: 1rpx solid #ff0; */
}

.userAvataImg {
	width: 100%;
	height: 100%;
}

.userInfo {
	margin-left: 22rpx;
}

.user-name {
	width: 224rpx;
	height: 40rpx;
	font-size: 28rpx;
	color: #fff;
	margin: 18rpx 0 12rpx 0;
	/* border: 1rpx solid firebrick; */
}

.time {
	width: 160rpx;
	height: 34rpx;
	font-size: 24rpx;
	color: #fff;
	opacity: 0.5;
}

.moreIcon {
	position: absolute;
	right: 10rpx;
	top: 0;
	width: 20rpx;
	height: 20rpx;
}

.iconImg {
	width: 100%;
	height: 100%;
}

/* 图片位置 */
.itemIamge {
	width: 710rpx;
	height: 434rpx;
	border-radius: 30rpx;
	margin-top: 28rpx;
	overflow: hidden;
	/* border: 1rpx solid #fff; */
}

.itemIamge image {
	width: 100%;
	height: 100%;
}

/* 标签 */
.itemTag {
	margin-top: 26rpx;
}

.tags {
	display: flex;
	/* border: 1rpx solid #fff; */
}

.tagItem {
	width: 188rpx;
	height: 56rpx;
	line-height: 56rpx;
	text-align: center;
	margin-right: 18rpx;
	color: #fff;
	font-size: 24rpx;
	border-radius: 28rpx;
	background-color: #403b51;
}

/* 交互 */
.itemInteraction {
	margin-top: 38rpx;
}

.partake {
	display: flex;
	position: relative;
}

.partake1 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	border: 1rpx solid white;
}

.partake2 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 25rpx;
	border: 1rpx solid white;
}

.partake3 {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
	position: absolute;
	left: 45rpx;
	border: 1rpx solid white;
}

.partakeimage {
	width: 40rpx;
	height: 40rpx;
	border-radius: 30rpx;
}

.conversation {
	font-size: 22rpx;
	color: rgba(255, 255, 255, 0.5);
	margin-left: 60rpx;
	margin-top: 10rpx;
}

.praise {
	margin-left: 70rpx;
	width: 100rpx;
}

.fabulous {
	width: 32rpx;
	height: 30rpx;
	vertical-align: middle;
}

.praisetext {
	font-size: 22rpx;
	vertical-align: middle;
	margin-left: 10rpx;
}

/* 悬浮按钮 */
.suspensionBut {
	position: absolute;
	bottom: 54rpx;
	right: 20rpx;
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
