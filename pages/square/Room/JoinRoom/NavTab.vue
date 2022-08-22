<template>
	<view class="">
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
		</view>
		<swiper class="swiper" :style="{ height: swiperheight - 800 + 'rpx' }" :current="isActive" @change="checkedSwiper">
			<swiper-item>
				<scroll-view :style="{ height: swiperheight - 940 + 'rpx' }" class="swiper-item" scroll-y>
					<!-- 聊天 -->
					<Chat></Chat>
				</scroll-view>
				<!-- 聊天输入框 -->
				<ChatBottomBar class="ChatBottomBar"></ChatBottomBar>
			</swiper-item>

			<swiper-item>
				<scroll-view class="swiper-item">
					<!-- 活动地点 -->
					<ActivityAdd></ActivityAdd>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import Chat from './Chat.vue';
import ActivityAdd from './ActivityAdd.vue';
import ChatBottomBar from '../../../tidings/chat-details/bottom-bar.vue';
export default {
	props: {
		swiperheight: Number
	},

	components: {
		Chat,
		ActivityAdd,
		ChatBottomBar
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
		},

		checkedSwiper(e) {
			this.isActive = e.detail.current;
		}
	}
};
</script>

<style>
.tab {
	margin: 30rpx 20rpx 0 20rpx;
	/* padding-bottom: 34rpx; */
	display: flex;
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

.swiper {
	width: 100%;
	/* height: 700rpx; */
	margin-top: 30rpx;
	/* border: 1rpx solid aqua; */
}
</style>
