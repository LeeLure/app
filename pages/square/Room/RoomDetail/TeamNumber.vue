<template>
	<!-- 房间人数 -->
	<view class="people">
		<view class="left-number">
			<view class="status">组局中</view>
			<view class="number">6/8可加入</view>
		</view>
		<view class="right-image">
			<view class="right-image-item">
				<image class="item-img" src="../../../../static/home/b.pic.jpg" mode=""></image>
			</view>
			<view class="right-image-item1">
				<image class="item-img" src="../../../../static/home/b.pic.jpg" mode=""></image>
			</view>
			<view class="right-image-item2">
				<image class="item-img" src="../../../../static/home/b.pic.jpg" mode=""></image>
			</view>
			<view class="right-image-item3">
				<image class="item-img" src="../../../../static/home/b.pic.jpg" mode=""></image>
			</view>
			<view class="right-image-item4">
				<image class="item-img" src="../../../../static/home/b.pic.jpg" mode=""></image>
			</view>

			<view class="more"><image src="../../../../static/square/more.png" mode=""></image></view>
		</view>
	</view>
</template>

<script></script>

<style>
/* 队伍人数 */
.people {
	width: 710rpx;
	height: 162rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 30rpx;
	margin-top: 200rpx;
	background-color: #2a243f;
	border: 1rpx solid transparent;
}

.left-number {
	margin-left: 28rpx;
}

.status {
	font-size: 36rpx;
	color: #d53eda;
	margin-bottom: 8rpx;
}

.number {
	font-size: 28rpx;
	color: #fff;
}

.right-image {
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 350rpx;
	margin-right: 20rpx;
	height: 98rpx;
}

.right-image-item {
	/* position: absolute; */
	width: 92rpx;
	height: 92rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
	border: 2rpx solid white;
}

.right-image-item1 {
	position: absolute;
	width: 92rpx;
	height: 92rpx;
	left: 54rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
	border: 2rpx solid white;
}

.right-image-item2 {
	position: absolute;
	width: 92rpx;
	height: 92rpx;
	left: 108rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
	border: 2rpx solid white;
}

.right-image-item3 {
	position: absolute;
	width: 92rpx;
	height: 92rpx;
	left: 162rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
	border: 2rpx solid white;
}

.right-image-item4 {
	position: absolute;
	width: 92rpx;
	height: 92rpx;
	left: 216rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
	border: 2rpx solid white;
}

.item-img {
	width: 100%;
	height: 100%;
}

.right-image .more {
	position: absolute;
	width: 30rpx;
	height: 30rpx;
	right: 0;
	top: 30rpx;
}

.right-image .more image {
	width: 100%;
	height: 100%;
}
</style>
