<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<view class="head">
			<view class="headleft" @tap="revert">
				<image src="@/static/home/fanhui.png" mode="aspectFill" class="fanhui"></image>
			</view>
			<view class="headright">
				<image src="@/static/home/sousuo.png" mode="" class="headimg"></image>
				<input type="text" class="input" placeholder="搜索您想搜索的人~" placeholder-class="placeholder">
				<view class="btn">
					搜索
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
		components: {
			navigation,


		},
		methods: {
			revert() {
				uni.navigateBack({});
			}
		}
	}
</script>

<style>
	.head {
		height: 100rpx;
		width: 100%;
	}

	.headleft {}

	.fanhui {
		width: 40rpx;
		height: 40rpx;
	}

	.headright {}

	.headimg {
		width: 40rpx;
		height: 40rpx;
	}

	.input {
		border: 1px solid red;
	}

	.placeholder {}

	.btn {}
</style>
