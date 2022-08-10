<template>
	<view>
		<!-- 导航栏 -->
		<navigation :title="title">
			<template v-slot:account>
				<view class="account">111</view>
			</template>
			<template v-slot:action>
				<view class="action" @tap="action">...</view>
			</template>
		</navigation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			}
		},
		onLoad: function(option) {
			console.log(option)
			const {
				key
			} = option
			this.title = key
		},
		methods: {
			action(){
				console.log('action')
			}
		}
	}
</script>

<style>
.account{
	padding: 0 20rpx;
	line-height: 48rpx;
	border-radius: 26rpx;
	font-size: 24rpx;
	background-color: #39344E;
}
.action{
	color: #fff;
	letter-spacing: 2rpx;
	font-size: 50rpx;
	line-height: 56rpx;
	margin-right: 10rpx;
}
</style>
