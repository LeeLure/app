<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		
		<view class="list">
			<view class="phone">
				已绑定手机号
			</view>
			<view class="phone">
				手机号码：186****0846
			</view>
			<view class="phone">
				该手机号用于登陆您的账号
			</view>
			<view class="phone color" @tap="cellphone">
				修改手机号
			</view>
		</view>
		
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "安全中心",
			}
		},
		components: {
			navigation
		},
		methods: {
			cellphone(){
				uni.navigateTo({
					url:'/pages/settings/security/cellphone'
				})
			}
		}
	}
</script>

<style>
.list{
	font-size: 28rpx;
	margin-top: 60rpx;
}
.phone{
	color: white;
	text-align: center;
	margin-top: 40rpx;
}
.color{
	color: #D53EDA;
}
</style>
