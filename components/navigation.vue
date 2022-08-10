<template>
	<view class="navigation">
		<view class="navigation1" @tap="revert">
			<image src="../static/home/fanhui.png" mode="aspectFill" class="fanhui"></image>
			<slot name="account"></slot>
		</view>
<<<<<<< HEAD
		<view class="navigation2">{{ title }}</view>
		<view class="navigation3"></view>
=======
		<view class="navigation2">
			{{title}}
		</view>
		<view class="action">
			<slot name="action"></slot>
		</view>
>>>>>>> eb2929fad488af21803c0aacbf42ca22cc91187d
	</view>
</template>

<script>
<<<<<<< HEAD
export default {
	name: 'navigation',
	props: {
		title: String
	},

	data() {
		return {
			// title:"crhfdbfgj"
		};
	},
	methods: {
		revert() {
			uni.navigateBack({});
=======
	export default {
		name: "navigation",
		props: {
			title: String
		},

		data() {
			return {
				// title:"crhfdbfgj"
			};
		},
		methods: {
			revert() {
				uni.navigateBack({})
			}
>>>>>>> eb2929fad488af21803c0aacbf42ca22cc91187d
		}
	}
};
</script>

<style>
<<<<<<< HEAD
.navigation {
	width: 750rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	display: flex;
}
.navigation1 {
	margin-left: 20rpx;
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
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
}
=======
	.navigation {
		width: 750rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		display: flex;
		position: relative;
		justify-content: space-between;
	}

	.navigation1 {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		color: #FFFFFF;
		z-index: 10;
	}

	.fanhui {
		width: 40rpx;
		height: 40rpx;
	}

	.navigation2 {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.action {
		z-index: 10;
	}
>>>>>>> eb2929fad488af21803c0aacbf42ca22cc91187d
</style>
