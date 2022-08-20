<template>
	<!-- 他人主页 -->
	<view>

		<view class="head">
			<view class="headleft" @tap="revert">
				<image src="@/static/home/myfanhui.png" class="headimg"></image>
			</view>
			<view class="headright">
				<image src="@/static/home/dian.png" class="headimg"></image>
			</view>
		</view>

		<view>


			<view class="background">
				<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
			</view>

			<view class="information">
				<information></information>
				<release></release>
				<view class="kongbai">

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import information from '@/pages/home/homepage/information.vue'
	import release from "@/pages/home/homepage/release.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			information,
			release
		},
		methods: {
			revert() {
				uni.navigateBack({});
			}
		}
	}
</script>

<style>
	page {
		background-color: #29253C;
	}

	.head {
		height: 100rpx;

		width: 710rpx;

		display: flex;
		justify-content: space-between;
		position: fixed;
		left: 20rpx;
		top: var(--status-bar-height);
		z-index: 2;

	}

	.headleft {
		margin: auto 0;
	}

	.headright {
		margin: auto 0;
	}

	.headimg {
		width: 54rpx;
		height: 54rpx;

	}

	.background {
		width: 750rpx;
		height: 588rpx;
	}

	.backgroundimg {
		width: 100%;
		height: 100%;
	}

	.information {

		width: 750rpx;
		border-radius: 60rpx 60rpx 0 0;
		position: absolute;
		top: 530rpx;
		left: 0;
		background-color: #29253C;
	}

	.kongbai {
		height: 50rpx;
	}
</style>
