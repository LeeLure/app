<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="fit">
			<view class="fitlist  border">
				<view class="kind">
					清理缓存
				</view>
				<view class="goto">
					2423mb  {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist border" @tap="notice">
				<view class="kind">
					推送通知设置
				</view>
				<view class="goto">
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist border" @tap="security">
				<view class="kind">
					安全中心
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist" @tap="cancellation">
				<view class="kind">
					注销账号
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>


		</view>

		<view class="fit">
			<view class="fitlist  border">
				<view class="kind">
					隐私政策
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist border">
				<view class="kind">
					希艾奇遇公约
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist border">
				<view class="kind">
					用户服务协议
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist">
				<view class="kind">
					关于
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>


		</view>


		<view class="secede" @tap="login">
			退出登陆
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "设置",
			}
		},
		components: {
			navigation
		},
		methods: {
			notice() {
				uni.navigateTo({
					url: '/pages/settings/notice/notice'
				})
			},
			security(){
				uni.navigateTo({
					url:'/pages/settings/security/security'
				})
			},
			cancellation(){
				uni.navigateTo({
					url:'/pages/settings/cancellation/cancellation'
				})
			},
			login(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.fit {
		color: white;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-top: 40rpx;
	}

	.fitlist {
		display: flex;
		justify-content: space-between;
		height: 128rpx;
		line-height: 128rpx;
		width: 708rpx;
		margin-left: 24rpx;


	}

	.kind {
		font-size: 28rpx;
	}

	.goto {
		
		
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.gotoimage {
		
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
	}

	.border {
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
	}

	.secede {
		background-color: #29253C;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #F64D4D;
		margin-top: 40rpx;
		font-size: 28rpx;
		border-radius: 30rpx;
	}
</style>
