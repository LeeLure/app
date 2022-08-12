<template>
	<view class="main">
		<view class="message-list">
			<uni-swipe-action class="swipe" v-for="(item,index) in list" :key='index'>
				<!-- <uni-swipe-action> -->
				<uni-swipe-action-item :threshold="0" :right-options="options1">
					<view class="message-box">
						<view @tap="toDetails(item)" class="message">
							<view class="left">
								<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
							</view>
							<view class="center">
								<view>
									{{item.title}}
								</view>
								<view class="content">
									{{item.content}}
								</view>
							</view>
							<view class="right">
								<view class="time">22:36</view>
								<view class="account">3</view>
							</view>
						</view>
					</view>
					<template v-slot:right>
						<view class="slot-button" @tap="bindClick({position:'right',content:{text:'删除'}})">
							<view class="slot-button-text">
								<image class="img" src="@/static/tidings/del.png"></image>
							</view>
						</view>
					</template>
				</uni-swipe-action-item>
				<!-- <uni-swipe-action-item :options="options1">
					<view @tap="toDetails(item)" class="message">
						<view class="left">
							<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
						</view>
						<view class="center">
							<view>
								{{item.title}}
							</view>
							<view class="content">
								{{item.content}}
							</view>
						</view>
						<view class="right">
							<view class="time">22:36</view>
							<view class="account">3</view>
						</view>
					</view>
				</uni-swipe-action-item> -->
			</uni-swipe-action>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'message-list',
		data() {
			return {
				list: [],
				options1: [{
					text: '',
					icon: 'trash-fill',
					iconSize: '50rpx',
					style: {

						backgroundColor: 'transparent'
					}
				}]
			}
		},
		mounted() {
			for (var i = 0; i < 10; i++) {
				this.list.push({
					title: '通知' + i,
					content: '内容' + i,
					id: i
				})
			}

		},
		methods: {
			scroll(e) {
				// console.log(e)
			},
			toDetails(item) {
				uni.navigateTo({
					url: "/pages/tidings/chat-details/chat-details?title=" + item.title + '&type=' + item.id
				})
			},
			bindClick(e) {
				console.log(e);
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			},
		}
	}
</script>

<style>
	.main {
		display: flex;
		justify-content: center;
		margin-top: 24rpx;

	}

	.swipe {
		width: 750rpx;
		padding: 20rpx 0;
	}

	.swipe /deep/ .u-swipe-action-item__content {
		background-color: transparent !important;
	}

	.swipe .message-box {
		width: 750rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.message {
		width: 710rpx;
		height: 158rpx;
		border-radius: 30rpx;
		background: #29253C;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.message .left {
		width: 118rpx;
		height: 120rpx;
		margin-left: 24rpx;
	}

	.message .left image {
		width: 108rpx;
		height: 108rpx;
		border-radius: 108rpx;
	}

	.message .center {
		flex: 1;
		margin-left: 20rpx;
		color: #fff;
		font-size: 28rpx;
		line-height: 58rpx;
	}

	.message .center .content {
		color: rgba(255, 255, 255, 0.5);
	}

	.message .right {
		width: 138rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 24rpx;
		line-height: 58rpx;
	}

	.message .right .time {
		color: rgba(255, 255, 255, 0.5);
	}

	. .message .right .account {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		background: #FFEE8C;
		border-radius: 40rpx;
		margin-left: 49rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
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
		border-radius: 108rpx;
	}

	.user-name {
		font-size: 28rpx;
		color: #FFF;
	}

	.message-list .slot-button {
		width: 180rpx;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.message-list .slot-button-text {
		width: 140rpx;
		height: 120rpx;
		margin-left: 10rpx;
		background-color: #12111A;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20rpx;
		position: relative;
	}

	.message-list .slot-button-text .img {
		width: 50rpx;
		height: 50rpx;
	}
</style>
