<template>
	<!-- 话题主 -->
	<view class="TopicMain" :style="{ height: swiperheight + 'rpx' }">
		<view class="bar"></view>
		<view class="bgColor">
			<!-- 导航栏 -->
			<Navigation title="话题主"></Navigation>

			<!-- 展示用户信息 -->
			<view class="userInfo">
				<!-- 动画盒子 -->
				<view class="container ">
					<view class="animationBox">
						<view class="span" style="--i:1"></view>
						<view class="span" style="--i:2"></view>
						<view class="span" style="--i:3"></view>
						<view class="span" style="--i:4"></view>
						<view class="span" style="--i:5"></view>
						<!-- <view class="span" style="--i:6"></view> -->
						<!-- <view class="span" style="--i:7"></view> -->
						<!-- <view class="span" style="--i:8"></view> -->
						<!-- <view class="span" style="--i:9"></view> -->
						<!-- <view class="span" style="--i:10"></view> -->
					</view>
				</view>

				<!-- 头像盒子 -->
				<view class="avata"><image class="avataImg" src="../../../static/home/b.pic.jpg" mode=""></image></view>

				<!-- 标签盒子 -->
				<view class="tags">
					<view class="tagItem">
						<view class="tagLeft">练琴</view>
						<view class="tagRight">绘画</view>
						<view class="tagBot">音乐</view>
					</view>
				</view>
			</view>

			<!-- 用户名 -->
			<view class="user-name"><view class="userNameText">艾瑞莉娅</view></view>
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
			swiperheight: 0
		};
	},

	onLoad() {
		var _this = this;
		uni.getSystemInfo({
			success(res) {
				// console.log('屏幕高度 HH = ' + res.windowHeight);
				// console.log('屏幕高度 HH222 = ' + res.windowHeight * 2);
				_this.swiperheight = res.windowHeight * 2;
			}
		});
	},

	methods: {}
};
</script>

<style>
.TopicMain {
	background-image: url(@/static/square/Topicmain.png);
	background-repeat: no-repeat;
	background-size: cover;
	/* height: 1500rpx; */
}

.userInfo {
	position: relative;
	/* border: 1rpx solid white; */
}

/* 大盒子 */
.container {
	position: relative;
	/* border: 1rpx solid pink; */
}

.animationBox {
	width: 500rpx;
	height: 500rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50rpx auto;
	/* border: 1rpx solid brown; */
}

.container .animationBox .span {
	position: absolute;
	box-sizing: border-box;
	border-radius: 50%;
	background: rgba(198, 227, 242, 0.25);
	animation: animate 5s linear infinite;
	animation-delay: calc(1s * var(--i));
}

@keyframes animate {
	0% {
		width: 370rpx;
		height: 370rpx;
	}

	50% {
		opacity: 1;
	}

	100% {
		width: 650rpx;
		height: 650rpx;
		opacity: 0;
	}
}

.avata {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* border: 1rpx solid seagreen; */
}

.avataImg {
	width: 372rpx;
	height: 372rpx;
	border-radius: 50%;
}

/* 标签 */
.tags {
	position: absolute;
	top: 66rpx;
	left: 30rpx;
	background-color: transparent;
}

.tagItem {
	position: relative;
	line-height: 54rpx;
	text-align: center;
	display: flex;
	color: #fff;
	justify-content: space-evenly;
}

.tagLeft {
	width: 158rpx;
	height: 54rpx;
	line-height: 54rpx;
	border-radius: 26rpx;
	background-color: #94cced;
	/* border: 1rpx solid blue; */
}

.tagRight {
	width: 158rpx;
	height: 54rpx;
	line-height: 54rpx;
	margin-left: 362rpx;
	border-radius: 26rpx;
	background-color: #94cced;
	/* border: 1rpx solid blue; */
}

.tagBot {
	position: absolute;
	width: 158rpx;
	height: 54rpx;
	line-height: 54rpx;
	right: 68rpx;
	bottom: -415rpx;
	/* margin-top: 338rpx; */
	border-radius: 26rpx;
	background-color: #94cced;
	/* border: 1rpx solid blue; */
}

/* 用户名 */
.user-name {
	height: 60rpx;
	margin-top: 60rpx;
	/* border: 1rpx solid #00f; */
}

.userNameText {
	text-align: center;
	color: #fff;
	font-size: 44rpx;
}
</style>
