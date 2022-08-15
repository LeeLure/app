<template>
	<!-- 房间人数 -->
	<view class="people">
		<view class="left-number">
			<view class="status">组局中</view>
			<view class="number">6/8可加入</view>
		</view>
		<view class="right-image">
			<view class="right-image-item">
				<view class="itemBgcolor"><image src="../../../../static/home/b.pic.jpg" mode=""></image></view>
			</view>
			<view class="right-image-item1">
				<view class="itemBgcolor1"><image src="../../../../static/home/b.pic.jpg" mode=""></image></view>
			</view>
			<view class="right-image-item2">
				<view class="itemBgcolor2"><image src="../../../../static/home/b.pic.jpg" mode=""></image></view>
			</view>
			<view class="right-image-item3">
				<view class="itemBgcolor3"><image src="../../../../static/home/b.pic.jpg" mode=""></image></view>
			</view>
			<view class="right-image-item4">
				<view class="itemBgcolor4"><image src="../../../../static/home/b.pic.jpg" mode=""></image></view>
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
	position: absolute;
	width: 98rpx;
	height: 98rpx;
	left: 0;
	padding: 2rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
}

.right-image-item1 {
	position: absolute;
	width: 98rpx;
	height: 98rpx;
	left: 50rpx;
	padding: 2rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
}

.right-image-item2 {
	position: absolute;
	width: 98rpx;
	height: 98rpx;
	left: 100rpx;
	padding: 2rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
}

.right-image-item3 {
	position: absolute;
	width: 98rpx;
	height: 98rpx;
	left: 150rpx;
	padding: 2rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
}

.right-image-item4 {
	position: absolute;
	width: 98rpx;
	height: 98rpx;
	left: 200rpx;
	padding: 2rpx;
	border-radius: 50%;
	background-color: #fff;
	overflow: hidden;
}

.itemBgcolor {
	width: 90rpx;
	height: 90rpx;
	margin: 5rpx 5rpx;
	border-radius: 50%;
	overflow: hidden;
}

.itemBgcolor1 {
	width: 90rpx;
	height: 90rpx;
	margin: 5rpx 5rpx;
	border-radius: 50%;
	overflow: hidden;
}

.itemBgcolor2 {
	width: 90rpx;
	height: 90rpx;
	margin: 5rpx 5rpx;
	border-radius: 50%;
	overflow: hidden;
}

.itemBgcolor3 {
	width: 90rpx;
	height: 90rpx;
	margin: 5rpx 5rpx;
	border-radius: 50%;
	overflow: hidden;
}

.itemBgcolor4 {
	width: 90rpx;
	height: 90rpx;
	margin: 5rpx 5rpx;
	border-radius: 50%;
	overflow: hidden;
}

.itemBgcolor image {
	width: 100%;
	height: 100%;
}

.itemBgcolor1 image {
	width: 100%;
	height: 100%;
}

.itemBgcolor2 image {
	width: 100%;
	height: 100%;
}

.itemBgcolor3 image {
	width: 100%;
	height: 100%;
}

.itemBgcolor4 image {
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
