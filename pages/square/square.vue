<template>
	<!-- 广场页面 -->
	<view>
		<view class="bar"></view>
		<!-- 赛事活动 -->
		<view class="Interesting"><view class="people">赛事活动</view></view>
		<!-- 赛事活动的图片 -->
		<view class="gameImg"><image src="../../static/square/activity.png" alt="" /></view>

		<!-- 发现圈子 -->
		<view class="Interesting2">
			<view class="people">发现圈子</view>
			<view class="more" @tap="toMoreCircles">
				更多圈子 &nbsp;>
				<!-- 小箭头 -->
				<!-- <view class="iconImg"> -->
				<!-- <image class="moreIcon" src="../../../make_friends/static/square/more.png" mode=""></image> -->
				<!-- </view> -->
			</view>
		</view>

		<!-- 圈子 -->
		<view class="circleSwiper">
			<view class="circle">
				<view class="circle-ul">
					<CirItem class="circle-li" v-for="item in newCircleList" :circleList="item"></CirItem>
				</view>
			</view>
		</view>

		<!-- 第二个 -->
		<view class="circleSwiper2">
			<view class="circle">
				<view class="circle-ul-two">
					<CirItem class="circle-li-two" v-for="item in newCircleList" :circleList="item"></CirItem>
				</view>
			</view>
		</view>

		<!-- Tab 栏 -->
		<view class="tab">
			<view class="tab_nav">
				<view class="nav">
					<view class="navTitle" v-for="(item, index) in tabList" :key="index">
						<view :class="{ active: isActive === index }" @tap="checked(index)">{{ item.title }}</view>
					</view>
				</view>

				<!-- 更多房间 -->
				<view class="moreRoom" @tap="toMoreRoom">
					更多房间 &nbsp;>
					<!-- 小箭头 -->
					<!-- <view class="room-iconImg"> -->
					<!-- <image class="room-moreIcon" src="../../../make_friends/static/square/more.png" mode=""></image> -->
					<!-- </view> -->
				</view>
			</view>

			<!-- 即将开始 -->
			<!-- <view class="nav-bgcolor"> -->
			<swiper :style="{ height: windowHeight + 'rpx' }" class="swiper" @change="checkedSwiper" :current="isActive">
				<swiper-item>
					<!-- 房间列表组件 -->
					<scroll-view :style="{ height: windowHeight + 'rpx' }" scroll-y>
						<view class="RoomItem">
							<RoomItem v-for="item in 20">
								<template #img>
									<view class="img"><image class="img-image" src="../../static/square/item-1.jpg" alt="" /></view>
								</template>
								<template #title>
									<view class="title">无剧本杀不狂欢！一起来寻找真相吧！！！</view>
								</template>
							</RoomItem>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 活动房间 -->
				<swiper-item>
					<scroll-view :style="{ height: windowHeight + 'rpx' }" scroll-y>
						<view class="RoomItem">
							<RoomItem v-for="item in 6">
								<template #img>
									<view class="img"><image class="img-image" src="../../static/square/item-1.jpg" alt="" /></view>
								</template>
								<template #title>
									<view class="title">无剧本杀不狂欢！一起来寻找真相吧！！！</view>
								</template>
							</RoomItem>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<!-- </view> -->
		</view>
	</view>
</template>

<script>
// import tab from "@/components/tab.vue"
import CirItem from './circle/CirItem.vue';
import RoomItem from './Components/RoomItem.vue';

export default {
	components: {
		// tab
		CirItem,
		RoomItem
	},

	data() {
		return {
			// 控制小三角的变量
			isTriangle2: false,
			isActive: 0,
			windowHeight: 0,
			windowWidth: 0,
			tabList: [{ index: 0, title: '即将开始' }, { index: 1, title: '活动房间' }],
			// animationData: {},
			circleList: [
				{ id: 1, img: '../../../static/square/circle-1.jpg', title: '1150', info: '给你不一样音乐音乐的音乐' },
				{ id: 2, img: '../../../static/square/circle-1.jpg', title: '1151', info: '给你不一样音乐音乐的音乐' },
				{ id: 3, img: '../../../static/square/circle-1.jpg', title: '1152', info: '给你不一样音乐音乐的音乐' },
				{ id: 4, img: '../../../static/square/circle-1.jpg', title: '1153', info: '给你不一样音乐音乐的音乐' },
				{ id: 5, img: '../../../static/square/circle-1.jpg', title: '1154', info: '给你不一样音乐音乐的音乐' },
				{ id: 6, img: '../../../static/square/circle-1.jpg', title: '1155', info: '给你不一样音乐音乐的音乐' },
				{ id: 7, img: '../../../static/square/circle-1.jpg', title: '1156', info: '给你不一样音乐音乐的音乐' },
				{ id: 8, img: '../../../static/square/circle-1.jpg', title: '1157', info: '给你不一样音乐音乐的音乐' },
				{ id: 9, img: '../../../static/square/circle-1.jpg', title: '1158', info: '给你不一样音乐音乐的音乐' },
				{ id: 10, img: '../../../static/square/circle-1.jpg', title: '1159', info: '给你不一样音乐音乐的音乐' }
			],
			newCircleList: []
		};
	},

	onLoad() {
		this.getWindowHeight();
		// this.initCircleList();
		// console.log(this.animationData);
		// this.animation = uni.createAnimation();
		// 创建动画实例
		// this.running();

		const list = JSON.parse(JSON.stringify(this.circleList));
		this.newCircleList = [...list, ...list];
		// console.log(this.newCircleList);
	},

	methods: {
		// 跳转到更多圈子
		toMoreCircles() {
			uni.navigateTo({
				url: '/pages/square/circle/MoreCircles'
			});
		},

		checkedSwiper(e) {
			this.isActive = e.detail.current;
		},

		checked(index) {
			this.isActive = index;
		},

		toMoreRoom() {
			uni.navigateTo({
				url: '/pages/square/Room/index'
			});
		},

		// 获取屏幕高度
		getWindowHeight() {
			const res = uni.getSystemInfoSync();
			// console.log(res);
			this.windowHeight = res.windowHeight * 2 - 760;
			// console.log(this.windowHeight);

			// 宽度
			// this.windowWidth = res.windowWidth;
		}
	}
};
</script>

<style>
.Interesting {
	display: flex;
	justify-content: space-between;
	margin-left: 22rpx;
	margin-right: 22rpx;
	/* margin-top: 34rpx; */
}

.Interesting2 {
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
	display: flex;
	font-size: 22rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 10rpx;
}

.gameImg {
	width: 710rpx;
	height: 178rpx;
	margin: 18rpx 0 0 20rpx;
	border-radius: 30rpx;
	overflow: hidden;
	/* margin: 18rpx 20rpx 0 20rpx; */
}

.gameImg image {
	width: 100%;
	height: 100%;
}

.iconImg {
	width: 20rpx;
	height: 20rpx;
}

/* 圈子 */
.circleSwiper {
	width: 100%;
	/* height: 100rpx; */
	margin-top: 40rpx;
	/* border: 1rpx solid #ffffff; */
}

.circleSwiper2 {
	width: 100%;
	margin-top: 12rpx;
}

.circle {
	display: flex;
	overflow: hidden;
}

.circle-ul {
	display: flex;
	margin-right: 8rpx;
	animation: scroll-circle 10s linear infinite;
}

.circle-ul-two {
	display: flex;
	margin-right: 8rpx;
	animation: scroll-circle-two 8s linear infinite;
}

.circle-li:nth-child(even) {
	background-color: #fdebeb;
}

.circle-li-two:nth-child(odd) {
	background-color: #fdebeb;
}

@keyframes scroll-circle {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

@keyframes scroll-circle-two {
	0% {
		transform: translateX(-15%);
	}
	100% {
		transform: translateX(-65%);
	}
}

/* Tab */
.tab {
	margin-top: 40rpx;
	/* min-height: 1000rpx; */
	background-color: #29253c;
	border-radius: 30rpx 30rpx 0 0;
	/* border: 1px solid red; */
}

.tab_nav {
	display: flex;
	justify-content: space-between;
}

.nav {
	display: flex;
	justify-content: space-between;
	margin-left: 70rpx;
}

.tab_nav .navTitle {
	line-height: 58rpx;
	text-align: center;
	font-size: 28rpx;
	width: 164rpx;
	height: 58rpx;
	margin: 36rpx 60rpx 35rpx 0;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	color: #ffffff;
}

.active {
	position: relative;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	background: #b043fa;
	transition: translate 2s;
	transform: translate 2s;
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

/* 房间列表组件 */

.swiper {
	height: 470rpx;
	/* margin-bottom: 10rpx; */
}

.RoomItem {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 20rpx;
}

.item {
	display: flex;
	width: 340rpx;
	height: 479rpx;
	/* margin-top: 28rpx; */
	margin-bottom: 28rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	overflow: hidden;
}

.img {
	width: 100%;
	height: 284rpx;
}

.img-image {
	width: 100%;
	height: 100%;
	border-radius: 30rpx 30rpx 0 0;
}

.title {
	height: 94rpx;
	font-size: 28rpx;
}

/* 更多房间 */
.moreRoom {
	display: flex;
	font-size: 22rpx;
	color: #ffffff;
	opacity: 0.5;
	margin: 48rpx 18rpx 0 0;
}

.room-iconImg {
	width: 20rpx;
	height: 20rpx;
}

.room-iconImg .room-moreIcon {
	width: 100%;
	height: 100%;
	color: #ffffff;
}
</style>
