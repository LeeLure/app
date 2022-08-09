<template>
	<view>
		<view class="background">
			<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
			<view class="fod">
				<view class="install">
					<image src="" class="installimg"></image>
				</view>
				<view class="install">
					<image src="" class="installimg"></image>
				</view>
			</view>
					
			<view class="information">
				
				
				
				
				
				
				
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
		
		methods: {
			
		}
	}
</script>

<style>
	
	.background{
		width: 750rpx;
		height:316rpx;
		position: relative;
	}
	.backgroundimg{
		width: 100%;
		height: 100%;
	}
	.fod{
		border: 1px  solid  red;
		display: flex;
		width: 168rpx;
		justify-content: space-between;
		position: absolute;
		top: 100rpx;
		right: 18rpx;
	}
	.install{
		width: 64rpx;
		height: 64rpx;
		border-radius: 32rpx;
		background-color: #00000081;
	}
	.installimg{
		width: 28rpx;
		height: 28rpx;
	}
	.information{
		background: #1E1A32;
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		position: absolute;
		width: 100%;
		top: 270rpx;
		color: white;
		border: 1px  solid  red;
		
	}
</style>
