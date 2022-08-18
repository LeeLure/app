<template>
	<!-- 分享组件 -->
	<u-popup :show="isShowShare" closeOnClickOverlay :overlayOpacity="0.5" bgColor="#29253C" :round="20" mode="bottom" @close="close" @open="open">
		<!-- 文字 -->
		<view class="share-text">
			分享给朋友
		</view>
		
		<!-- 朋友信息 -->
		<scroll-view class="scroll-view_H" scroll-x @scroll="scroll" scroll-left="0">
			<view v-for="item in list" class="user">
				<view class="user-img">
					<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
						<view class="status"></view>
				</view>
				<view class="user-name">{{item}}</view>
			</view>
		</scroll-view>
				
		<!-- 第三方信息 -->
		<scroll-view class="scroll-view_H" scroll-x @scroll="scroll" scroll-left="0">
		<!-- <view class="third-party-box"> -->
			<view v-for="item in thirdPartyList" class="third-party">
				<view class="third-party-img">
					<image class="img" src="../../../../static/square/weixin.jpg" alt="">
				</view>
				<view class="third-party-name">{{item}}</view>
			</view>
		<!-- </view> -->
		
		<view class="third-party-buttom">
			
		</view>
		</scroll-view>
	</u-popup>
</template>

<script>
export default {
	name: 'ShowShare',
	
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	},
	

	data() {
		return {
			isShowShare: false,
			list: ['西施0西施0西施0西施0', '西施1', '西施2', '西施3', '西施4','西施5','西施6','西施7','西施8'],
			thirdPartyList:['微信', '微信1', '微信2', '微信3', '微信4']
		};
	},

	methods: {
		open() {
			this.isShowShare = true
		},
		
		close() {
			this.isShowShare = false;
		},
		
		cancelJoin() {
			uni.showToast({ title: '取消加入成功' });
			uni.navigateBack();
			this.close();
		},
		
		confirmJoin() {
			uni.showToast({ title: '确定加入成功' });
			this.close();
		},
		
		scroll(e){
			// console.log(e);
		}
	}
};
</script>

<style>
	
.share-text {
	height: 40rpx;
	line-height: 40rpx;
	font-size: 28rpx;
	color: #fff;
	margin: 28rpx 0 0 50rpx;
}
	
.scroll-view_H {
	margin: 20rpx 20rpx 0 20rpx;
	white-space: nowrap;
	width: 100%;
}

.user {
	display: inline-block;
	width: 98rpx;
	height: auto;
	text-align: center;
	margin: 20rpx 20rpx 0 20rpx;
	position: relative;
}

.user-img {
	width: 100%;
}

.user-img .img {
	width: 98rpx;
	height: 98rpx;
	border-radius: 50%;
}

.user-name {
	width: 98rpx;
	font-size: 28rpx;
	color: #fff;
	margin-top: 18rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* 第三方 */
/* .third-party-box {
	display: flex;
	justify-content: start;
	margin: 20rpx 20rpx 0 20rpx;
} */
.third-party {
	display: inline-block;
	width: 98rpx;
	height: auto;
	text-align: center;
	margin: 20rpx 20rpx 0 20rpx;
	position: relative;
}

.third-party-img {
	width: 100%;
}

.third-party-img .img {
	width: 98rpx;
	height: 98rpx;
	border-radius: 50%;
}

.third-party-name {
	width: 98rpx;
	font-size: 28rpx;
	color: #fff;
	margin-top: 18rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.third-party-buttom {
	height: 64rpx;
}
</style>
