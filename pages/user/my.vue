<template>
	<view>
		<view class="background">
			<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
			<view class="fod">
				<view class="install">
					<image src="" class="installimg"></image>
				</view>
				<view class="install" @tap="release">
					<image src="" class="installimg"></image>
				</view>
			</view>

			<view class="information">







			</view>

		</view>

		<view class="list">
			<view class="line">
				<view class="column">
					<image src="@/static/user/yinsi.png" class="columnimg"></image>
					<text class="columntext">隐私</text>
				</view>
				<view class="row">
					<image src="@/static/settings/jinnru.png" class="rowimg"></image>
				</view>
			</view>
			<view class="line" @tap="help">
				<view class="column">
					<image src="@/static/user/yijian.png" class="columnimg"></image>
					<text class="columntext">意见反馈与帮助</text>
				</view>
				<view class="row">
					<image src="@/static/settings/jinnru.png" class="rowimg"></image>
				</view>
			</view>
			<view class="line">
				<view class="column">
					<image src="@/static/user/kefu.png" class="columnimg"></image>
					<text class="columntext">希艾奇遇客服</text>
				</view>
				<view class="row">
					4000-588-2145
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},

		methods: {
			release() {
				uni.navigateTo({
					url: '/pages/settings/settings'
				})
			},
			// 前往帮助与反馈
			help() {
				uni.navigateTo({
					url: '/pages/settings/help/help'
				})
			}
		}
	}
</script>

<style>
	.background {
		width: 750rpx;
		height: 316rpx;
		position: relative;
	}

	.backgroundimg {
		width: 100%;
		height: 100%;
	}

	.fod {
		border: 1px solid red;
		display: flex;
		width: 168rpx;
		justify-content: space-between;
		position: absolute;
		top: 100rpx;
		right: 18rpx;
	}

	.install {
		width: 64rpx;
		height: 64rpx;
		border-radius: 32rpx;
		background-color: #00000081;
	}

	.installimg {
		width: 28rpx;
		height: 28rpx;
	}

	.information {
		background: #1E1A32;
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		position: absolute;
		width: 100%;
		top: 270rpx;
		color: white;
		border: 1px solid red;

	}




	.list {}

	.line {
		width: 670rpx;
		height: 100rpx;
		line-height: 100rpx;
		/* border: 1px solid   red; */
		display: flex;
		justify-content: space-between;
		margin-left: 20rpx;
	}

	.column {
		color: white;
		font-size: 24rpx;
		vertical-align: middle;
	}

	.columnimg {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.columntext {
		margin-left: 20rpx;
	}

	.row {
		color: #B043FA;
		font-size: 24rpx;
	}

	.rowimg {
		width: 20rpx;
		height: 20rpx;
	}
</style>
