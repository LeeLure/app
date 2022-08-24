<template>
	<!-- 有趣的人开启 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="portrait">
			<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="portraitimg"></image>
		</view>
		<view class="title">
			开启有趣的人需要你的授权
		</view>
		<view class="text">
			 开启后，你的主页将在首页有趣的人中显示
		</view>
		<view class="text">
		 开启后，将会有更多的人发现你
		</view>
		<view class="text">
		 你可以随时在我的有趣的人中关闭授权
		</view>
		<view class="open" @tap="open">
			开启有趣的人
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "有趣的人",
			}
		},
		components: {
			navigation
		},
		methods: {
			open() {
				uni.navigateTo({
					url: '/pages/user/Interesting/open'
				})
			}
		}
	}
</script>

<style>
	.portrait {
		width: 188rpx;
		height: 188rpx;
		border-radius: 100rpx;
		margin: 0 auto;
		margin-top: 100rpx;

	}

	.portraitimg {
		width: 188rpx;
		height: 188rpx;
		border-radius: 100rpx;
	}

	.title {
		margin-top: 56rpx;
		text-align: center;
		color: white;
		font-size: 32rpx;
		margin-bottom: 42rpx;

	}

	.text {
		margin-top: 28rpx;
		margin-left: 148rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: 24rpx;
	}

	.open {
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		color: white;
		background-color: #D53EDA;
		border-radius: 54rpx;
		margin-left: 162rpx;
		margin-top: 192rpx;

	}
</style>
