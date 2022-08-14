<template>
	<view class="circleHotItem">
		<!-- 标签 -->
		<scroll-view scroll-x class="scroll-view-X" scroll-left="0" @scroll="scroll">
			<view class="tag" v-for="item in tags">
				<view class="tagText">{{ item.name }}</view>
			</view>
		</scroll-view>

		<!-- 热门 -->
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
			<view class="navHotItem" v-if="isActive === 0">
				<!-- 热门组件 -->
				<NavHotItem class="navHotItem"></NavHotItem>
			</view>
			<view class="navNewItem" v-if="isActive === 1">最新</view>
		</view>
		<!-- ========= -->
	</view>
</template>

<script>
import NavHotItem from './NavHotItem.vue';
export default {
	components: {
		NavHotItem
	},

	data() {
		return {
			tags: [
				{ name: '#英雄联盟剪辑', index: 0 },
				{ name: '#英雄联盟剪辑', index: 1 },
				{ name: '#英雄联盟剪辑', index: 2 },
				{ name: '#英雄联盟剪辑', index: 3 }
			],
			tabList: [{ index: 0, title: '热门' }, { index: 1, title: '最新' }],
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
.circleHotItem {
	/* height: 1500rpx; */
	background-color: #2a243d;
	border-radius: 30rpx 30rpx 0 0;
	padding-top: 40rpx;
}

/* 标签 */
.scroll-view-X {
	/* border: 1rpx solid #ff0; */
	white-space: nowrap;
	/* margin: 0 20rpx; */
	width: 100%;
}

.tag {
	display: inline-block;
	width: 214rpx;
	height: 56rpx;
	line-height: 56rpx;
	font-size: 24rpx;
	border-radius: 30rpx;
	margin-left: 20rpx;
	background-color: #403b51;
	/* border: 1rpx solid red; */
}

.tagText {
	text-align: center;
	color: #ffffff;
}

/* Tab 栏 */

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
	margin-right: 60rpx;
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
	width: 100%;
	height: 6rpx;
	left: 0px;
	right: 0px;
	bottom: 0rpx;
	border-radius: 4rpx;
	background: #ffee8c;
	margin: auto;
}

/* 热门组件 */
.navHotItem {
	margin-top: 28rpx;
}
</style>
