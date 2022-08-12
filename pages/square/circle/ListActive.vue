<template>
	<!-- 活跃榜 -->
	<view class="ListActive">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation title="活跃榜"></Navigation>

		<view class="userBox">
			<view class="userInfo"><view class="userAvata"></view></view>
			<view class="userName"></view>
		</view>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
export default {
	components: {
		Navigation
	},

	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.ListActive {
	background-image: url(@/static/square/bg2.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 1500rpx;
}

.userBox {
	border: 1rpx solid #00f;
}

.userAvata {
	width: 212rpx;
	height: 212rpx;
}
</style>
