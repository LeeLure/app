<template>
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
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
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
.list {		width: 670rpx;}

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
