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
				<navigation :title="title" id="a"></navigation>
			</view>
		</view>
		<view @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">


			<view class="informa">
				<welfare></welfare>
		
		     </view>
        </view>



	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import welfare from "@/pages/business/detalis/welfare.vue"
	let startY = 0, //手指按下时屏幕的位置
		moveY = 0, //手指当前在屏幕中的位置
		pageAtTop = true; //是否到顶
	export default {
		data() {
			return {
				title: "商家详情",
				coverTransform: "scale(1)", //放大倍数
				coverTransition: "0", //过度时间
				moving: false,
				form: {},
				sheight: 482, //高


			}
		},
		components: {
			navigation,
			welfare
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

	.background {
		height: 482rpx;
		width: 750rpx;
	}

	.backgroundimg {
		width: 100%;
		height: 100%;
	}

	#a {
		position: absolute;
		top: var(--status-bar-height);

	}

	.informa {		
		position: relative;
		top: -60rpx;
		
	
	}
</style>
