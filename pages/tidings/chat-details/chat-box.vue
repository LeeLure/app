<template>
	<view class="main">
		<view class="scroll-view-box">
			<scroll-view class="scroll-view_H" scroll-y="true">
				<view class="chat-box" v-for="item in list" :key='item.id'>
					<view class="time">{{item.time}}</view>
					<view :class="['chat-content',item.id ===5?'me':'']">
						<view class="img-box">
							<image class="img" :src="item.avatar" />
						</view>
						<view class="content">
							{{item.content}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="bottom-bar">
			1111111
		</view>
	</view>
</template>

<script>
	export default {
		name: "chat-content-box",
		data() {
			return {
				list: []
			}
		},
		mounted() {
			for (var i = 0; i < 10; i++) {
				this.list.push({
					time: '周五 12：0' + i,
					avatar: '../../../static/home/a.pic.jpg',
					id: i,
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' + i
				})
			}

		},
		methods: {

		}
	}
</script>

<style>
	.main {
		height: 100%;
		display: flex;
		flex-direction: column
	}

	.scroll-view-box {
		flex: 1;
	}
	.scroll-view_H{
		height: 100%;
	}

	.chat-box {
		padding: 0 28rpx;
	}

	.time {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		width: 100%;
		text-align: center;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.chat-content {
		width: 100%;
		display: flex;
		margin-top: 22rpx;
		margin-bottom: 60rpx;
	}

	.img-box {
		width: 120rpx;
		height: 120rpx;
	}

	.img-box .img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}

	.content {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
		font-size: 28rpx;
		border-radius: 20rpx;
		min-height: 88rpx;
		align-items: center;
		padding: 10rpx 20rpx;
		line-height: 40rpx;
		margin-left: 28rpx;
	}

	.me {
		flex-direction: row-reverse;
	}

	.me .content {
		margin-left: 0;
		margin-right: 28rpx;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.bottom-bar {
		height: 16rpx;
	}
</style>
