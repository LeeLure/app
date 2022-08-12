<template>
	<view>
		<view class="background">
			<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
			<view class="fod">
				<view class="install">
					<image src="@/static/user/zuji.png" class="installimg"></image>
				</view>
				<view class="install" @tap="release">
					<image src="@/static/user/shhezhih.png" class="installimg"></image>
				</view>
			</view>

			<view class="information">
				<personal></personal>
				<roll></roll>
				<conceal></conceal>
			</view>

		</view>

	</view>
</template>

<script>
	import personal from "@/pages/user/personal.vue"
	import conceal from "@/pages/user/conceal.vue"
	import roll from "@/pages/user/roll.vue"
	export default {

		data() {
			return {

			}
		},
		components: {
			personal,
			conceal,
			roll
		},
		methods: {
			release() {
				uni.navigateTo({
					url: '/pages/settings/settings'
				})
			},

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
		/* border: 1px solid red; */
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
		width: 40rpx;
		height: 40rpx;
		display:block;
		margin: 12rpx;
		
	}

	.information {
		background: #1E1A32;
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		position: absolute;
		width: 100%;
		top: 270rpx;
		color: white;
		/* border: 1px solid red; */

	}
</style>
