<template>
	<view class="main">
		<view class="message-list">

			<u-swipe-action class="swipe" v-for="(item,index) in list" :key='index'>
				<u-swipe-action-item :options="options1">
					<view @tap="toDetails(item.title)" class="message">
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
				</u-swipe-action-item>
			</u-swipe-action>
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
			console.log(1111111)
			for (var i = 0; i < 10; i++) {
				this.list.push({
					title: '通知' + i,
					content: '内容' + i
				})
			}

		},
		methods: {
			scroll(e) {
				// console.log(e)
			},
			toDetails(key) {
				uni.navigateTo({
					url: "/pages/tidings/chat-details/chat-details?key="+key
				})
			}
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
		margin: 20rpx 0;
	}

	.swipe /deep/ .u-swipe-action-item__content {
		background-color: transparent !important;
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

	.message .right .account {
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
</style>
