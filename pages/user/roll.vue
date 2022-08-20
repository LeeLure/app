<template>

	<scroll-view scroll-x="true" class="scroll">
		<view class="lists" @tap="release">
			<image src="@/static/user/fabu.png" class="listimgs"></image>
			<view class="rolltext">
				我发布的
			</view>
		</view>
		<view class="lists" @tap="collect">
			<image src="@/static/user/shoucang.png" class="listimgs"></image>
			<view class="rolltext">
				我的收藏
			</view>
		</view>

		<view class="lists" @tap="Interesting">
			<image src="@/static/user/youqu.png" class="listimgs"></image>
			<view class="rolltext">
				有趣的人
			</view>
		</view>
		<view class="lists" @tap="purchase">
			<image src="@/static/user/goumai.png" class="listimgs"></image>
			<view class="rolltext">
				我购买的
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			release(){
				uni.navigateTo({
					url:'/pages/user/release/release'
				})
			},
			Interesting() {
				uni.navigateTo({
					url: '/pages/user/Interesting/Interesting'
				})
			},
			collect(){
				uni.navigateTo({
					url:'/pages/user/collect/collect'
				})
			},
			purchase(){
				uni.navigateTo({
					url:'/pages/user/purchase/purchase'
				})
			}
		}
	}
</script>

<style>
	.scroll {
		width: 750rpx;
		white-space: nowrap;

	}

	.lists {
		margin-left: 20rpx;
		display: inline-block;
		text-align: center;
		width: 186rpx;
		height: 146rpx;
		background-color: #29253C;
		border-radius: 30rpx;
		padding-top: 20rpx;
		margin-top: 32rpx;
	}

	.listimgs {
		width: 60rpx;
		height: 60rpx;

	}

	.rolltext {

		font-size: 24rpx;
	}
</style>
