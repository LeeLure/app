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
		<view class="cir1">
			<CirItem class="item1" />
			<CirItem class="item2" />
		</view>
		<view class="cir2">
			<CirItem class="item1" />
			<CirItem class="item2" />
		</view>

		<!-- Tab 栏 -->
		<view class="tab">
			<view class="changeTab">
				<view class="begin active">即将开始</view>
				<view class="begin">比赛房间</view>
				<view class="begin">活动房间</view>
			</view>
			<!-- 小三角 -->
			<view class="triangle">
				<view class="triangle2"></view>
				<view class="triangle2"></view>
				<view class="triangle2"></view>
			</view>

			<!-- item -->
			<view class="itemname"><item v-for="item in 4" /></view>
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
			isTriangle2: false
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
.cir1,
.cir2 {
	display: flex;
}

.cir1 {
	margin-top: 40rpx;
}

.cir2 {
	margin-top: 12rpx;
}

.item1 {
	margin-right: 8rpx;
}

.item2 {
	background-color: #feeceb;
}

/* Tab */
.tab {
	margin-top: 40rpx;
	/* border: 1px solid red; */
	background-color: #29253c;
	border-radius: 30rpx 30rpx 0 0;
}

.changeTab {
	display: flex;
	justify-content: space-around;
	font-size: 28rpx;
	color: #fff;
	/* border: 1px solid red; */
	margin-top: 36rpx;
}

.begin {
	margin-top: 36rpx;
	/* border: 1px solid red; */
	width: 164rpx;
	height: 58rpx;
	line-height: 58rpx;
	text-align: center;
	border-radius: 30rpx;
}

.active {
	background: #b043fa;
}

.triangle {
	display: flex;
	justify-content: space-around;
}

.triangle2 {
	width: 0;
	height: 0;
	border: 20rpx solid #999999;
	border-top-color: transparent;
	border-bottom-color: #b043fa;
	border-left-color: transparent;
	border-right-color: transparent;
}

/* item */
.itemname {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>
