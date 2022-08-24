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
			<view class="fitlist  border" @tap="flag2(true)">
				<view class="kind">
					我关注的人
				</view>
				<view class="goto" v-if="show2">
					<image src="@/static/settings/duigou.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist" @tap="flag3(true)">
				<view class="kind">
					关闭
				</view>
				<view class="goto" v-if="show3">
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
				title: '',
				show1: true,
				show2: false,
				show3: false,

			}
		},
		components: {
			navigation
		},
		onLoad(options) {
			this.title = options.title
			console.log("this.title", this.title);
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
			flag3(e) {
				this.show1=false
				this.show2=false
				this.show3=e

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
	.gotoimage {

		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.border {
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
	}
</style>
