<template>
	<!-- 广场页面 -->
	<view class="square">
		<view class="bar"></view>
		<!-- 赛事活动 -->
		<view class="Interesting"><view class="people">赛事活动</view></view>
		<!-- 赛事活动的图片 -->
		<view class="img"><image src="../../static/square/saishi.jpg" alt="" /></view>

		<!-- 发现圈子 -->
		<view class="Interesting">
			<view class="people">发现圈子</view>
			<view class="more" @tap="toMoreCircles">更多圈子 ></view>
		</view>

		<!-- 圈子 -->
		<view class="cirTop">
			<CirItem class="itemTop" />
			<CirItem class="itemBot" />
		</view>
		<view class="cirBot">
			<CirItem class="itemTop" />
			<CirItem class="itemBot" />
		</view>

		<!-- Tab 栏 -->
		<view class="tab">
			<view class="tab_nav">
				<view class="navTitle" v-for="(item, index) in tabList" :key="index">
					<view :class="{ active: isActive === index }" @click="checked(index)">{{ item.title }}</view>
				</view>
			</view>
			<!-- 即将开始 -->
			<view class="nav_item" v-if="isActive === 0">
				<view class="itemname"><item v-for="item in 4" /></view>
			</view>
			<!-- 比赛房间 -->
			<view class="nav_item" v-if="isActive === 1">比赛房间</view>
			<!-- 活动房间 -->
			<view class="nav_item" v-if="isActive === 2">活动房间</view>

			<!-- 小三角 -->
			<!-- 	<view class="triangle">
				<view class="triangle2"></view>
				<view class="triangle2"></view>
				<view class="triangle2"></view>
			</view> -->
			<!-- item -->
			<!-- <view class="itemname"><item v-for="item in 4" /></view> -->
		</view>
	</view>
</template>

<script>
// import tab from "@/components/tab.vue"
import CirItem from './circle/CirItem.vue';
import item from './item/item.vue';
export default {
	data() {
		return {
			// 控制小三角的变量
			isTriangle2: false,
			isActive: 0,
			tabList: [{ index: 0, title: '即将开始' }, { index: 1, title: '比赛房间' }, { index: 2, title: '活动房间' }]
		};
	},
	components: {
		// tab
		CirItem,
		item
	},
	methods: {
		// 跳转到更多圈子
		toMoreCircles() {
			uni.navigateTo({
				url: '/pages/square/circle/MoreCircles'
			});
		},

		checked(index) {
			this.isActive = index;
		}
	}
};
</script>

<style>
.square {
	padding-bottom: 20rpx;
}

.Interesting {
	display: flex;
	justify-content: space-between;
	margin-left: 22rpx;
	margin-right: 22rpx;
	margin-top: 34rpx;
}

.people {
	font-size: 36rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
}

.more {
	font-size: 22rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 10rpx;
}

.img {
	width: 710rpx;
	height: 178rpx;
	/* margin: 18rpx 20rpx 0 20rpx; */
}

.img image {
	width: 100%;
	height: 100%;
}

/* 圈子 */
.cirTop,
.cirBot {
	display: flex;
}

.cirTop {
	margin-top: 40rpx;
}

.cirBot {
	margin-top: 12rpx;
}

.itemTop {
	margin-right: 8rpx;
}

.itemBot {
	background-color: #feeceb;
}

.cirTop .itemTop {
	background-color: #fceced;
}

.cirBot .itemBot {
	background-color: #fceced;
}

/* Tab */
.tab {
	margin-top: 40rpx;
	background-color: #29253c;
	border-radius: 30rpx 30rpx 0 0;
	/* border: 1px solid red; */
}

.tab_nav {
	display: flex;
	justify-content: space-evenly;
	/* padding: 12rpx 0; */
	/* border: 1rpx solid lawngreen; */
}

.tab_nav .navTitle {
	line-height: 58rpx;
	text-align: center;
	font-size: 28rpx;
	width: 164rpx;
	height: 58rpx;
	margin-bottom: 25rpx;
	margin-top: 36rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	color: #ffffff;
	/* border: 1rpx solid lawngreen; */
}

.active {
	position: relative;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	background: #b043fa;
}

.active::after {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	bottom: -25rpx;
	left: 42%;
	border: 15rpx solid #999999;
	border-top-color: transparent;
	border-bottom-color: #b043fa;
	border-left-color: transparent;
	border-right-color: transparent;
}

/* item */
.itemname {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 28rpx;
}
</style>
