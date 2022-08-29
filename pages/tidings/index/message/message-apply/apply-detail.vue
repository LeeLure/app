<template>
	<!-- 更多申请详情页面 -->
	<view>
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation title="申请详情"></Navigation>

		<!-- 内容 -->
		<view class="container">
			<!-- 申请信息 -->
			<view class="apply-info">
				<image class="user-avata" src="../../../../../static/home/b.pic.jpg" mode=""></image>
				<view class="info">
					<view class="name">杨玉环申请加入峡谷盛典-网吧冠军赛</view>
					<view class="time">申请时间：2022-8-2 23：44</view>
				</view>
			</view>

			<view class="text">申请人基本信息</view>

			<view class="user-info">
				<view class="user-item" v-for="item in userInfo" :key="item.value">
					<view class="title">{{ item.title }}</view>
					<view class="value">{{ item.value }}</view>
				</view>

				<!-- 空盒子占位 -->
				<view class="border"></view>
			</view>

			<!-- 按钮 -->
			<view class="but-box">
				<view class="but"><view class="refused">拒绝</view></view>
				<view class="but"><view class="agree">同意</view></view>
			</view>
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
		return {
			userInfo: [
				{ title: '真实姓名', value: '杨杨杨' },
				{ title: '身份证号', value: '411421200211082415' },
				{ title: '手机号', value: '18654895266' }
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.container {
	margin: 70rpx 20rpx 0 20rpx;
	// border: 1rpx solid #f0f;

	// 申请信息
	.apply-info {
		background-color: #29253c;
		display: flex;
		justify-content: start;
		height: 222rpx;
		padding: 0 18rpx;
		border-radius: 30rpx;
		// border: 1rpx solid seashell;

		.user-avata {
			width: 124rpx;
			height: 124rpx;
			border-radius: 50%;
			margin: 50rpx 18rpx 0 0;
		}

		.info {
			margin-top: 50rpx;

			.name {
				max-width: 100%;
				font-size: 32rpx;
				color: #ffffff;
				margin: 16rpx 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.time {
				font-size: 24rpx;
				color: #ffffff;
				opacity: 0.5;
			}
		}
	}

	.text {
		font-size: 28rpx;
		color: #ffffff;
		opacity: 0.5;
		margin: 42rpx 0 28rpx 14rpx;
	}

	.user-info {
		background-color: #29253c;
		padding: 0 13rpx;
		border-radius: 30rpx;

		.user-item {
			display: flex;
			justify-content: space-between;
			height: 130rpx;
			line-height: 130rpx;
			border-bottom: 2rpx solid rgba(255, 255, 255, 0.95);
			font-size: 28rpx;
			color: #ffffff;

			.title {
				opacity: 0.5;
			}
		}

		.user-item:nth-child(3) {
			margin-bottom: 16rpx;
			border-bottom: 2rpx solid transparent;
		}

		.border {
			border: 1rpx solid transparent;
		}
	}

	.but-box {
		display: flex;
		justify-content: space-between;
		width: 640rpx;
		margin: 60rpx 34rpx 0 34rpx;
		// border: 1rpx solid #ffffff;

		.but {
			width: 300rpx;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 28rpx;
			background-color: #ffee8c;
			border-radius: 36rpx;
			text-align: center;

			.refused {
				color: #a28f21;
			}

			.agree {
				color: #ffffff;
			}
		}

		.but:nth-child(2) {
			background-color: #d53eda;
		}
	}
}
</style>
