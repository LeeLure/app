<template>
	<view>
		<view class="bar"></view>
		<view class="tab_nav">
			<view class="navTitle" v-for="(item, index) in navList" :key="index">
				<view :class="{ active: isActive === index }" @click="checked(index)">{{ item.title }}</view>
			</view>
		</view>
		<view class="nav_item" v-if="isActive == 0"><message /></view>
		<view class="nav_item" v-if="isActive == 1">1</view>
		<view class="nav_item" v-if="isActive == 2">2</view>
	</view>
</template>

<script>
import message from './message/message.vue';
export default {
	components: {
		message
	},
	data() {
		return {
			isActive: 0,
			navList: [
				{
					index: 0,
					title: '消息'
				},
				{
					index: 1,
					title: '好友动态'
				},
				{
					index: 2,
					title: '我加入的房间'
				}
			]
		};
	},
	methods: {
		checked(index) {
			this.isActive = index;
		}
	}
};
</script>

<style>
.tab_nav {
	display: flex;
	justify-content: center;
	padding: 12rpx 0;
}

.tab_nav .navTitle {
	line-height: 40rpx;
	text-align: center;
	font-size: 28rpx;
	margin-right: 80rpx;
	color: rgba(255, 255, 255, 0.5);
}

.active {
	position: relative;
	line-height: 44rpx;
	font-size: 32rpx;
	color: rgba(255, 255, 255, 1);
}

.active::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 8rpx;
	left: 0px;
	right: 0px;
	bottom: -12rpx;
	border-radius: 4rpx;
	background: #ffee8c;
	margin: auto;
}
</style>
