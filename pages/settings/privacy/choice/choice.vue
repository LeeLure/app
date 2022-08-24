<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="fit">
			<view class="fitlist  border" @tap="flag1(true)">
				<view class="kind">
					所有人
				</view>
				<view class="goto" v-if="show1">
					<image src="@/static/settings/duigou.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist" @tap="flag2(true)">
				<view class="kind">
					我
				</view>
				<view class="goto" v-if="show2">
					<image src="@/static/settings/duigou.png" class="gotoimage"></image>
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
				title: "隐私",
				show1: true,
				show2: false,
				
			}
		},
		components: {
			navigation
		},
		methods: {
			flag1(e) {
				this.show1=e
				this.show2=false
				this.show3=false
			
			},
			flag2(e) {
				this.show1=false
				this.show2=e
				this.show3=false
			
			},
			
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
	.gotoimage {

		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.border {
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
	}
</style>
