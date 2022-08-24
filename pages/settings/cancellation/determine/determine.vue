<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="satisfy">
			注销186****0846绑定的账号
		</view>
		<view class="tips">
			注销账号后，以下信息将被清空且无法找回：
		</view>
		<view class="presentation">
			1.您将无法登录、使用希艾奇遇账号。你的朋友将无法通过本希艾奇
			遇账号联系你。
			
		</view>
		<view class="presentation">
			
			2.希艾奇遇账号的个人资料和历史信息（包括但不限于用户名、昵
			称、头像）都将无法找回。
			
		</view>
		<view class="presentation">
			
			3.您在该希艾奇遇账号内生产的全部内容和维护的关注关系都将清
			空并无法找回。
		</view>
		<view class="next" @tap="determine">
			确认注销
		</view>
<view class="text">
	点击“确认注销”即代表你已经同意《用户注销协议》
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
				console.log(11);
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
	.text{
		
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: rgba(255, 255, 255, 0.5);
		margin-top: 40rpx;
	}
</style>
