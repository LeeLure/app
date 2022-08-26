<template>
	<!-- 举报页面 -->
	<view>
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation class="navigation" title="用户举报"></Navigation>

		<view class="message">请选择违规类型，帮助我们准确处理</view>

		<!-- 举报 -->
		<view class="report" v-if="reportList && isSecondary === ''">
			<view class="report-item" @tap="toReportWay(item.title)" v-for="item in reportList" :key="item.index">
				{{ item.title }}
				<u-icon name="arrow-right" color="#FFFFFF" size="16"></u-icon>
			</view>
		</view>

		<!-- 举报的二级分类 -->
		<view class="report" v-if="reportList && isSecondary !== ''">
			<view class="report-item" @tap="toReportDetail(item.index)" v-for="item in reportSecondaryList" :key="item.index">
				{{ item.title }}
				<u-checkbox-group iconPlacement="right" placement="row" shape="circle" @change="checkboxChange(item.index)">
					<u-checkbox activeColor="#d43ed7"></u-checkbox>
				</u-checkbox-group>
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
			isSecondary: '',
			checkboxValue1: [],
			userName: '',
			userAvata: '',
			userId: 0,
			reportList: [
				{ title: '色情暴力', index: 1 },
				{ title: '政治不实信息', index: 2 },
				{ title: '违规广告、垃圾营销', index: 3 },
				{ title: '涉未成年不良信息', index: 4 },
				{ title: '涉嫌诈骗	', index: 5 },
				{ title: '违法犯罪', index: 6 },
				{ title: '侵权、抄袭、冒充	', index: 7 },
				{ title: '侮辱谩骂', index: 8 },
				{ title: '引人不适', index: 9 },
				{ title: '诱导点赞、关注、分享', index: 10 },
				{ title: '其他', index: 11 }
			],

			reportSecondaryList: [
				{ title: '视频', index: 1 },
				{ title: '动态', index: 2 },
				{ title: '头像/昵称/背景图/个人介绍', index: 3 },
				{ title: '私信', index: 4 },
				{ title: '群聊	', index: 5 },
				{ title: '动态评论', index: 6 },
				{ title: '视频评论	', index: 7 },
				{ title: '其他', index: 8 }
			]
		};
	},

	onLoad(option) {
		this.userName = option.userName;
		this.userAvata = option.userAvata;
		this.userId = option.userId;
		console.log(option.isSecondary, option.userName, option.userAvata, option.userId);
	},

	methods: {
		// 二级分类
		toReportWay(index) {
			this.isSecondary = index;
		},

		checkboxChange(n) {
			console.log('change', n);
		},

		// 举报详情页面
		toReportDetail() {
			// console.log(this.isSecondary);
			uni.navigateTo({
				url: `/pages/tidings/circle-details/report/report-detail?isSecondary=${this.isSecondary} + &userName= ${
					this.userName
				} + &userId= ${this.userId}`
			});
		}
	}
};
</script>

<style lang="scss">
.navigation {
	background-color: #29253c;
}
.message {
	width: 100%;
	height: 50rpx;
	color: rgba(255, 255, 255, 0.5);
	font-size: 24rpx;
	background-color: #1e1a32;
	margin: 20rpx 0 0 20rpx;
}

.report {
	width: 100%;
	padding: 14rpx 0;
	border-radius: 20rpx 20rpx 0 0;
	background-color: #29253c;

	.report-item {
		display: flex;
		justify-content: space-between;
		height: 118rpx;
		line-height: 118rpx;
		font-size: 28rpx;
		color: #fff;
		border-bottom: 2px solid rgba(255, 255, 255, 0.2);
		padding-left: 10rpx;
		margin: 0 20rpx 0 24rpx;
	}
}
</style>
