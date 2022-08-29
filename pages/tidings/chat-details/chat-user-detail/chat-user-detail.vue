<template>
	<!-- 聊天用户详情页面 -->
	<view>
		<view class="bar"></view>
		<Navigation title="用户详情"></Navigation>

		<view class="content">
			<view class="user">
				<view class="user-avata"><img :src="userAvata" mode=""></image></view>
				<view class="user-name">{{userName}}</view>
			</view>
			
				<view class="report">
					<view class="report-item"  @tap="toReport">
						举报
						<u-icon name="arrow-right" color="#FFFFFF" size="16"></u-icon>
					</view>
				</view>
				
				<view class="report">
				<view class="report-item" >
					设为置顶
					<u-switch class='switch'
						space="1" v-model="value12" activeColor="#D53EDA" size="20"
						inactiveColor="rgb(230, 230, 230)">
					</u-switch>
				</view>
				</view>
				
				<view class="report"><view class="report-item" >清空聊天记录</view></view>
				
				
				<view class="cancel">
					取消关注
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
			userAvata: '',
			userName: '',
			userId:0,
			value12: true,
		};
	},

	onLoad(option) {
		// console.log(option.userAvata, option.userName);
		this.userAvata = option.userAvata;
		this.userName = option.userName;
		this.userId = option.userId
	},

	methods: {
		// 举报页面
		toReport() {
			// console.log(this.isSecondary);
      // console.log(this.userId);
			uni.navigateTo({
				url: `/pages/tidings/circle-details/report/report?userAvata=${this.userAvata} + &userName= ${
					this.userName
				} + &userId= ${this.userId}`
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	margin: 20rpx 20rpx;
	height: 500rpx;
	// border: 1rpx solid #fff;

	.user {
	width: 112rpx;
	// border: 1rpx solid #f0f;
	margin-bottom: 54rpx;
	
	.user-avata {
	width: 112rpx;
	height: 112rpx;
	border-radius: 50%;
	
	& img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	}
	
	.user-name {
		width: 112rpx;
		font-size: 28rpx;
		color: #fff;
		opacity: 0.8;
		margin-top: 16rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	}
	
	
	.report {
		width: 100%;
		// padding: 14rpx 0;
		border-radius: 20rpx;
		background-color: #29253c;
		// margin-top: 12rpx;
		
	
		.report-item {
			display: flex;
			justify-content: space-between;
			height: 112rpx;
			line-height: 112rpx;
			font-size: 28rpx;
			color: #fff;
			padding-left: 10rpx;
			margin: 20rpx 20rpx 20rpx 24rpx;
		}
		
		.switch {
			margin-top: 35rpx;
		}
	}
	
	.cancel {
		height: 112rpx;
		line-height: 112rpx;
		font-size: 28rpx;
		color: #F64D4D;
		border-radius: 20rpx;
		background-color: #29253c;
		text-align: center;
		margin-top: 40rpx;
	}
}
</style>
