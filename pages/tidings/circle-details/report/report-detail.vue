<template>
	<!-- 举报页面 -->
	<view>
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation class="navigation" title="用户举报"></Navigation>

		<!-- 举报 -->
		<view class="report">
			<view class="report-item">举报类型：{{ isSecondary }}</view>

			<view class="report-item">
				视频证据
				<view class="item-right">
					添加涉嫌违规的视频
					<u-icon name="arrow-right" color="#FFFFFF" size="16"></u-icon>
				</view>
			</view>

			<view class="report-item">举报描述</view>
		</view>
		<view class="repost-detail">
			<textarea
				v-model="value"
				placeholder="在此输入举报详情~"
				placeholder-class="placeholder"
				maxlength="100"
				class="textarea"
			></textarea>
			<view class="text-count">{{ value.length }}/100</view>
		</view>

		<view class="report"><view class="report-item">上传图片</view></view>
		<!-- 上传图片 -->
		<Upload class="upload" :limit="4">
			<view class="img"><image src="../../../../static/tidings/zhaopian.png" mode=""></image></view>
			<view class="count">0/4</view>
		</Upload>

		<view class="submit">提交</view>

		<view class="border"></view>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import Upload from '@/components/upload.vue';
export default {
	components: {
		Navigation,
		Upload
	},

	data() {
		return {
			isSecondary: '',
			value: '',
			userName: '',
			userId: 0
		};
	},

	onLoad(option) {
		this.isSecondary = option.isSecondary;
		this.userName = option.userName;
		this.userId = option.userId;
		// console.log(option.isSecondary);
		// console.log(option.userName, option.userId);
	},

	methods: {}
};
</script>

<style lang="scss">
.navigation {
	background-color: #29253c;
}

// 举报
.report {
	width: 100%;
	padding: 14rpx 0;
	border-radius: 20rpx 20rpx 0 0;

	.report-item {
		display: flex;
		justify-content: space-between;
		height: 118rpx;
		line-height: 118rpx;
		color: #fff;
		font-size: 28rpx;
		// border-bottom: 2px solid rgba(255, 255, 255, 0.2);
		padding-left: 10rpx;
		margin: 0 20rpx 0 24rpx;

		.item-right {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: #fff;
			opacity: 0.5;
		}

		&:last-child() {
			margin-bottom: 0;
		}
	}
}

// 举报详情
.repost-detail {
	position: relative;
	width: 678rpx;
	height: 360rpx;
	font-size: 24rpx;
	color: #fff;
	opacity: 0.5;
	border-radius: 20rpx;
	background-color: #29253c;
	margin: 0 20rpx;
	padding: 18rpx;

	.textarea {
		width: 660rpx;
		color: #fff;
		font-size: 24rpx;
		opacity: 0.5;
	}

	.text-count {
		position: absolute;
		right: 40rpx;
		bottom: 0;
	}
}

// 上传
.upload {
	position: relative;
	width: 158rpx;
	height: 158rpx;
	background-color: #29253c;
	border-radius: 20rpx;
	margin-left: 20rpx;
}

.img {
	width: 45rpx;
	height: 40rpx;
}

.img image {
	position: absolute;
	top: 38rpx;
	left: 56rpx;
	width: 45rpx;
	height: 40rpx;
}

.count {
	position: absolute;
	top: 86rpx;
	left: 56rpx;
	font-size: 24rpx;
	color: #fff;
	opacity: 0.6;
}

// 提交
.submit {
	width: 544rpx;
	height: 106rpx;
	line-height: 106rpx;
	background-color: rgba(255, 255, 255, 0.2);
	color: rgba(255, 255, 255, 0.6);
	border-radius: 54rpx;
	text-align: center;
	margin-top: 320rpx;
	margin-left: 104rpx;
	margin-bottom: 50rpx;
}

.border {
	border-bottom: 1rpx solid transparent;
}
</style>
