<template>
	<!-- 申请通知页面 -->
	<view>
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation title="申请通知"></Navigation>

		<!-- 申请列表 -->
		<view class="apply-list" v-for="item in 3">
			<view class="top">
				<view class="user">
					<view class="avata"><image src="../../../../../static/home/b.pic.jpg" mode=""></image></view>
					<view class="name">杨玉环</view>
				</view>
				<view class="right" @tap="toMoreApplyDetail">
					<view class="more">查看更多申请详情</view>
					<u-icon name="arrow-right" color="#FFFFFF" size="16"></u-icon>
				</view>
			</view>

			<view class="bottom">杨玉环申请加入峡谷盛典-网吧冠军赛</view>
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
	methods: {
		// 跳转更多申请详情页面
		toMoreApplyDetail() {
			uni.navigateTo({
				url: '/pages/tidings/index/message/message-apply/apply-detail'
			});
		}
	}
};
</script>

<style lang="scss">
.apply-list {
	width: 674rpx;
	height: 268rpx;
	border-radius: 30rpx;
	background-color: #29253c;
	margin: 62rpx 38rpx 0 38rpx;

	.top {
		display: flex;
		justify-content: space-between;
		height: 136rpx;
		line-height: 136rpx;
		margin: 0 30rpx;
		border-bottom: 1rpx solid rgba(255, 255, 255, 0.95);

		.user {
			display: flex;
			justify-content: start;
			.avata {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				margin-top: 26rpx;

				& image {
					width: 90rpx;
					height: 90rpx;
					border-radius: 50%;
				}
			}

			.name {
				color: #ffffff;
				font-size: 28rpx;
				margin-left: 22rpx;
			}
		}

		.right {
			display: flex;
			max-width: 300rpx;
			font-size: 28rpx;
			color: #ffffff;
			opacity: 0.5;
		}
	}

	.bottom {
		height: 132rpx;
		line-height: 132rpx;
		font-size: 28rpx;
		color: #ffffff;
		text-align: center;
		padding: 0 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
