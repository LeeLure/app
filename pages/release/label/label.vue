<template>
	<!-- 选择标签页 -->
	<view>
		<view class="bar">
		</view>
		<navigation :title="title">
			<view class="release">
				确定
			</view>
		</navigation>
		<input type="text" maxlength="15" placeholder="#请输入标签" placeholder-class="placeholder" class="input">
		
		<view class="list">
			<view class="selected">
				精选标签
			</view>
			<view class="labellist">
				<image src="@/static/release/biaoqian.png" class="labellistimg"></image>
				#希艾官方
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "选择标签",
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.release {
		width: 126rpx;
		height: 58rpx;
		text-align: center;
		line-height: 58rpx;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		font-size: 24rpx;
		margin-top: 30rpx;
		margin-right: 22rpx;

	}
	.placeholder{
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}
	.input{
		color: #2B7FDE;
		background-color:#29253C ;
		padding-left: 20rpx;
		margin-left: 20rpx;
		width: 690rpx;
		border-radius: 20rpx;
		height: 68rpx;
	}
	.list{
		
		margin-top: 50rpx;
		margin-left: 20rpx;
	}
	.selected{
		font-size: 28rpx;
		color: white;
	}
	.labellist{
		margin-top: 40rpx;
		font-size: 28rpx;
		color: #2B7FDE;
		vertical-align: middle;
	}
	.labellistimg{
		vertical-align: middle;
		margin-right: 20rpx;
		width: 30rpx;
		height: 30rpx;
	}
</style>
