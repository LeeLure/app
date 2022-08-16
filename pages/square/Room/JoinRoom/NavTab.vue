<template>
	<view class="tab">
		<view class="tabNav">
			<view
				class="navTitle"
				:class="{ tabActive: isActive === item.index }"
				v-for="item in tabList"
				:key="item.index"
				@tap="changeTab(item.index)"
			>
				{{ item.title }}
			</view>
		</view>

		<!-- 聊天 -->
		<Chat v-if="isActive === 0"></Chat>
		<!-- 活动地点 -->
		<ActivityAdd v-else></ActivityAdd>
	</view>
</template>

<script>
import Chat from './Chat.vue';
import ActivityAdd from './ActivityAdd.vue';
export default {
	components: {
		Chat,
		ActivityAdd
	},

	data() {
		return {
			tabList: [{ index: 0, title: '聊天' }, { index: 1, title: '活动地点' }],
			isActive: 0
		};
	},

	methods: {
		changeTab(index) {
			this.isActive = index;
		}
	}
};
</script>

<style>
.tab {
	margin: 30rpx 20rpx 0 20rpx;
	/* padding-bottom: 34rpx; */
}

.tabNav {
	display: flex;
	height: 60rpx;
	line-height: 60rpx;
	/* margin-right: 60rpx; */
	/* border: 1rpx solid #ffffff; */
}

.navTitle {
	margin-right: 50rpx;
	color: #ffffff;
	font-size: 24rpx;
	opacity: 0.5;
}

.tabActive {
	opacity: 1;
	font-size: 32rpx;
	position: relative;
}

.tabActive::after {
	content: '';
	position: absolute;
	width: 60%;
	height: 6rpx;
	left: 0px;
	right: 0px;
	bottom: 0rpx;
	border-radius: 4rpx;
	background: #ffee8c;
	margin: auto;
}
</style>
