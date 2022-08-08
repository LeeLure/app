<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		
		<image src="../../static/home/chenggong.png" class="image"></image>
		<view class="tips">
			支付成功
		</view>
		<view class="go">
			去
			<text  class="text">我购买的</text>页面看看吧
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "支付成功",
			}
		},
		components: {
			navigation
		},
		methods: {
			
		}
	}
</script>

<style>
.image{
	width: 160rpx;
	height: 160rpx;
	display: block;
	margin-top: 124rpx;
	margin-left: 294rpx;
}
.tips{
	font-size: 36rpx;
	color: white;
	width: 100%;
	margin-top: 40rpx;
	text-align: center;
}
.go{
	margin-top: 34rpx;
	margin-left: 228rpx;
	color: rgba(255, 255, 255, 0.5);
	font-size: 28rpx;
	
}
.text{
	color: #D53EDA ;
}
</style>
