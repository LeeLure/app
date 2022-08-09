<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="fit">
			<view class="fitlist  border">
				<view class="kind">
					<image src="@/static/settings/dianhhua.png" class="kindimg"></image>
					<view class="kinds">
						<view class="kind1">
							登录手机
						</view>
						<view class="kind2">
							186****0846
						</view>
					</view>
				</view>
				<view class="goto">
				
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>


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
		height: 148rpx;
		
		width: 708rpx;
		margin-left: 24rpx;


	}

	.kind {
		font-size: 28rpx;
		display: flex;		
		margin-top: 40rpx;
		margin-left: 40rpx;
	
	}
	.kindimg{
		width: 60rpx;
		height: 60rpx;
		vertical-align: middle;
	}
	.kinds{
		margin-left: 20rpx;
		vertical-align: middle;
	}

	.kind2{
		margin-top: 10rpx;
		
	}

.goto{
	margin-top: 50rpx;
}
	.gotoimage {
		
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
	}
</style>
