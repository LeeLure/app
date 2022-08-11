<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="satisfy">
			需要满足一下条件，才能注销当前账号：
		</view>
		<view class="tips">
			1.账号财产已结清
		</view>
		<view class="presentation">
			与本账号相关的所有服务、财产性权益等均已进行妥善处理，如有
			问题，您可自行联系希艾奇遇客服（<text class="tagging">@希艾客服</text>或发邮件至客服邮
			箱 <text class="tagging">407425657@qq.com</text>）进行确认
		</view>
		<view class="next" @tap="determine">
			下一步
		</view>

	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "注销账号",
			}
		},
		components: {
			navigation
		},
		methods: {
			determine() {
				uni.navigateTo({
					url: '/pages/settings/cancellation/determine/determine'
				})
			}
		}
	}
</script>

<style>
	.satisfy {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 20rpx;
		margin-top: 30rpx;
	}

	.tips {
		color: white;
		font-size: 28rpx;
		margin-left: 20rpx;
		margin-top: 30rpx;
	}

	.presentation {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 20rpx;
		margin-top: 30rpx;
	}

	.tagging {
		color: #D53EDA;
	}

	.next {
		width: 544rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background: linear-gradient(174deg, #D53EDA 0%, #D53EDA 100%);
		border-radius: 54rpx;
		color: white;
		margin-top: 160rpx;
		margin-left: 104rpx;

	}
</style>
