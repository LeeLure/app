<template>
	<view>
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view v-for="item in list" class="user">
				<view class="user-img">
					<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
				</view>
				<view class="user-name">{{item}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'user-list',
		data() {
			return {
				list: ['西施0', '西施1', '西施2', '西施3', '西施4', '西施5', '西施6', '西施4', '西施8', '西施9']
			}
		},
		methods: {
			scroll(e) {
				console.log(e)
			},
		}
	}
</script>

<style>
	.scroll-view_H {
		margin-top: 20rpx;
		white-space: nowrap;
		width: 100%;
	}

	.user {
		display: inline-block;
		width: 126rpx;
		height: auto;
		text-align: center;
		margin: 0 20rpx 0 14rpx;
	}

	.user-img {
		width: 100%;
	}

	.user-img .img {
		width: 108rpx;
		height: 108rpx;
		border-radius: 108rpx;
	}
	.user-name{
		font-size: 28rpx;
		color: #FFF;
	}
</style>
