<template>
	<view class="circle-details">
		<navigation :title="title" class="navigation">
		</navigation>
		<brief />
		<user-list class="user-list">
			<template #top>
				<view class="member-top">
					<view class="member-top-title">圈子成员</view>
					<view class="member-all" @tap="toMembersAllList">查看365群成员<u-icon name="arrow-right"
							color='rgba(255,255,255,0.5)' size="26rpx"></u-icon>
					</view>
				</view>
			</template>
		</user-list>
		<notice />
		<info :type="type" />
		<clear />
		<disband />
	</view>
</template>

<script>
	import brief from './brief.vue'
	import userList from '../../index/message/user-list.vue'
	import notice from './notice.vue'
	import info from './info.vue'
	import clear from './clear.vue'
	import disband from './disband.vue'
	export default {
		name: "circle-details",
		components: {
			brief,
			userList,
			notice,
			info,
			clear,
			disband
		},
		data() {
			return {
				title: '',
				type: ''
			}
		},
		onLoad: function(option) {
			const {
				title,
				type
			} = option
			this.title = title,
			this.type = type
		},
		methods: {
			toMembersAllList() {
				uni.navigateTo({
					url: "/pages/tidings/circle-details/member-all-list/index?title=" + this.title + '&type=' + this.type
				})
			}
		}
	}
</script>

<style>
	.circle-details {
		padding-bottom: 40rpx;
	}

	.circle-details .user-list {
		background-color: #29253C;
		margin-top: 38rpx;
		border-radius: 20rpx;
		padding-bottom: 24rpx;
	}

	.circle-details .member-top {
		display: flex;
		font-size: 28rpx;
		color: #fff;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		padding: 0 36rpx 0 20rpx;
		height: 64rpx;
	}

	.circle-details .member-top .member-all {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		display: flex;
	}
</style>
