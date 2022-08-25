<template>
	<view>
		<!-- 导航栏 -->
		<view class="boxs">
			<view class="background" :style="{
        height: sheight + 'rpx',
		transition: coverTransition,
		transform: coverTransform,
        
      }">
				<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
				
				
			</view>
		</view>
		
		<view class="boxs1">
					<view class="" :style="{
		  height: sheight + 'rpx',
				transition: coverTransition,
				transform: coverTransform,
		  
		}">
		<view class="bar">
		</view>
					<navigation :title="title" ></navigation>
					
					<view class="main">
						
						<view class="mainphone">
							<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="mainphoneimg"></image>
							
							<image src="@/static/square/huangguan.png" class="king"></image>
							ta占领了封面
						</view>
						
						<view class="mainphonetext">
							#英雄联盟大师集
						</view>
						
						
					</view>
						
					</view>
				</view>
		
		
		
		
		<view class="informa" @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">
			
				<comprehensive :swiperheight="swiperheight"></comprehensive>
		
		  
        </view>



	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import comprehensive from "@/pages/home/conversation/comprehensive.vue"
	let startY = 0, //手指按下时屏幕的位置
		moveY = 0, //手指当前在屏幕中的位置
		pageAtTop = true; //是否到顶
	export default {
		data() {
			return {
				title: "",
				coverTransform: "scale(1)", //放大倍数
				coverTransition: "0", //过度时间
				moving: false,
				form: {},
				sheight: 482, //高
swiperheight: 0,

			}
		},
		components: {
			navigation,
			comprehensive
		},
		onLoad() {
			var _this = this
			uni.getSystemInfo({
				success(res) {
					console.log("屏幕高度 HH = " + res.windowHeight)
					console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
					_this.swiperheight = res.windowHeight * 2 - 515
				}
			})
		},
		methods: {
			coverTouchstart(e) {
				if (pageAtTop === false) {
					return;
				}
				this.coverTransition = '.1s ease-out';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e) {
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if (moveDistance < 0) {
					this.moving = false;
					return;
				}
				this.moving = true;
				if (moveDistance > 0) {
					if (this.sheight > 600) return;
					this.sheight = 482 + moveDistance;
					this.coverTransform = 'scale(1.3)';
					this.coverTransition = '.2s ease-out';
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.sheight =482;
				this.coverTransform = 'scale(1)';
				this.coverTransition = '.2s ease-out';
			},
		}
	}
</script>

<style>
	.boxs {
		width: 750rpx;
		overflow: hidden;


	}
	.boxs1 {
		width: 750rpx;
		overflow: hidden;
	/* border: 1px  solid  yellowgreen; */
	position: absolute;
	top: 0;
	left: 0;
	
	background-color:rgba(0,0, 0, 0.5);
	
	
	}

	.background {
		
		width: 750rpx;
		
	}
	

	.backgroundimg {
		width: 100%;
		height: 100%;
		
	}

	

	.informa {		
		position: relative;		
		/* top: -60rpx; */
		margin-top: -20rpx;
		
		
	
	}
	.main{
	
		color: white;
		
		
	}
	.mainphone{
		color: rgba(255,255, 255, 0.5);
		font-size: 28rpx;
		vertical-align: middle;
		margin-left: 250rpx;
		margin-top: 40rpx;
		position: relative;
	}
	.mainphoneimg{
		width: 68rpx;
		height: 68rpx;
		border-radius: 40rpx;
		vertical-align: middle;
		margin-right: 20rpx;
		
	}
	.king{
		width: 26rpx;
		height: 26rpx;
		position: absolute;
		top: -8rpx;
		left: 50rpx;
		
	}
	.mainphonetext{
		font-size: 36rpx;
		font-weight: 500;
		color: white;
		text-align: center;
		margin-top: 30rpx;
	}
</style>
