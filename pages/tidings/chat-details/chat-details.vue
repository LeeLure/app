<template>
	<view class="chat-details">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<navigation :title="title" class="navigation">
			<template v-slot:account>
				<view class="account">111</view>
			</template>
			<template v-slot:action>
				<view class="action" @tap="toCircleDetails">...</view>
			</template>
		</navigation>
		<chat-content-box :type='type' />
		<bottom-bar />
	</view>
</template>

<script>
	import chatContentBox from './chat-box.vue'
	import bottomBar from './bottom-bar.vue'
	export default {
		name: "chat-details",
		data() {
			return {
				title: '',
				type:''
			}
		},
		components: {
			chatContentBox,
			bottomBar
		},
		onLoad: function(option) {
			const {
				title,
				type
			} = option
			this.title = title
			this.type = type
		},
		methods: {
			toCircleDetails() {
				uni.navigateTo({
					url: "/pages/tidings/circle-details/index/index?title=" + this.title + '&type=' + this.type
				})
			}
		}
	}
</script>

<style>
	.chat-details{
		background-color: #29253C;
	}
	.chat-details .navigation{
		/* top: var(--status-bar-height); */
		/* z-index: 10; */
	}
	.account {
		padding: 0 20rpx;
		line-height: 48rpx;
		border-radius: 26rpx;
		font-size: 24rpx;
		background-color: #39344E;
	}

	.action {
		color: #fff;
		letter-spacing: 2rpx;
		font-size: 50rpx;
		line-height: 56rpx;
		margin-right: 10rpx;
	}
</style>
