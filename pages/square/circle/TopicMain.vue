<template>
	<!-- 话题主 -->
	<view class="TopicMain">
		<view class="bar"></view>
		<view class="bgColor">
			<!-- 导航栏 -->
			<Navigation title="话题主"></Navigation>

			<!-- 展示用户信息 -->
			<view class="userInfo">
				<!-- 放动画和头像的大盒子 -->
				<view class="ani-ava">
					<!-- 动画盒子 -->
					<view class="ani">
						<view class="bowen">
							<view class="span2"></view>
							<view class="span1"></view>
							<view class="span"></view>
						</view>
					</view>

					<!-- 头像盒子 -->
					<view class="avata"><image class="avataImg" src="../../../static/home/b.pic.jpg" mode=""></image></view>
				</view>

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
		return {};
	},
	methods: {}
};
</script>

<style>
.TopicMain {
	background-image: url(@/static/square/Topicmain.png);
	background-repeat: no-repeat;
	background-size: cover;
	height: 1500rpx;
}

.userInfo {
	position: relative;
}

/* 大盒子 */
.ani-ava {
	position: relative;
	margin: 60rpx 90rpx 0 90rpx;
	width: 568rpx;
	height: 568rpx;
	/* border: 1rpx solid #f0f; */
}

.ani {
	position: absolute;
	top: 50%;
	left: 50%;
}

.avata {
	position: absolute;
	width: 372rpx;
	height: 372rpx;
	background-color: #fff;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	overflow: hidden;
}

.avataImg {
	width: 100%;
	height: 100%;
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
	/* border: 1rpx solid blue; */
}

.tagRight {
	width: 158rpx;
	height: 54rpx;
	line-height: 54rpx;
	margin-left: 362rpx;
	border-radius: 26rpx;
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

.bowen {
	position: relative;
	/* width: 100%; */
	/* height: 100%; */
	/* background-color: lawngreen; */
	display: flex;
	justify-content: center;
	align-items: center;
}
.span {
	position: absolute;
	background-color: #cae2f5;
	width: 372rpx;
	height: 372rpx;
	border: 1px solid #cae2f5;
	box-sizing: border-box;
	border-radius: 50%;
	animation: animate 2s linear infinite;
}

.span1 {
	position: absolute;
	background-color: #b8dbf1;
	width: 446rpx;
	height: 446rpx;
	border: 1px solid #b8dbf1;
	box-sizing: border-box;
	border-radius: 50%;
	animation: animate1 2s linear infinite;
}

.span2 {
	position: absolute;
	background-color: #a3d0ee;
	width: 476rpx;
	height: 476rpx;
	border: 1px solid #a3d0ee;
	box-sizing: border-box;
	border-radius: 50%;
	animation: animate2 2s linear infinite;
}

@keyframes animate {
	0% {
		width: 372rpx;
		height: 372rpx;
		opacity: 1;
	}
	50% {
		opacity: 1;
	}
	100% {
		width: 436rpx;
		height: 436rpx;
		opacity: 0;
	}
}

@keyframes animate1 {
	0% {
		width: 436rpx;
		height: 436rpx;
		opacity: 1;
	}
	50% {
		opacity: 1;
	}
	100% {
		width: 568rpx;
		height: 568rpx;
		opacity: 0;
	}
}

@keyframes animate2 {
	0% {
		width: 568rpx;
		height: 568rpx;
		opacity: 1;
	}
	50% {
		opacity: 1;
	}
	100% {
		width: 614rpx;
		height: 614rpx;
		opacity: 0;
	}
}
</style>
