<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title" ></navigation>
		<view class="advises">
			动态
		</view>
		<view class="fit">
			<view class="fitlist  border">
				<view class="kind">
					不看Ta的动态
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist" @tap="a">
				<view class="kind">
					看到我全部动态的人
				</view>
				<view class="goto">
					{{text}} {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>

		</view>
		<view class="advises">
			互动
		</view>
		<view class="fit">
			<view class="fitlist  border">
				<view class="kind">
					评论我的动态
				</view>
				<view class="goto">
					{{text}} {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			<view class="fitlist">
				<view class="kind">
					接受@消息
				</view>
				<view class="goto">
					{{text}} {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>

		</view>
		<view class="advises">
			私信
		</view>
		<view class="fit">

			<view class="fitlist">
				<view class="kind">
					我可以收到哪些人的私信
				</view>
				<view class="goto">
					{{text}} {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>

		</view>
		<view class="advises">
			图片
		</view>
		<view class="fit">

			<view class="fitlist">
				<view class="kind">
					谁可以保存我的图片
				</view>
				<view class="goto">
					{{text}} {{''}}
					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>

		</view>
		<view class="fit">

			<view class="fitlist" @tap="blacklist">
				<view class="kind">
					黑名单
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>

		</view>
		
		
		
		<view class="kongbai">

		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "隐私",
				text: '所有人'
			}
		},
		components: {
			navigation
		},
		methods: {
			a() {
				uni.navigateTo({
					url: '/pages/settings/privacy/choice/choice'
				})
			},
			
			blacklist() {
				uni.navigateTo({
					url: '/pages/settings/privacy/blacklist/blacklist'
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
		margin-top: 30rpx;
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

	.advises {
		margin-top: 30rpx;
		margin-left: 34rpx;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.kongbai {
		height: 50rpx;
	}
</style>
