<template>
	<view v-if="personal!==null">
		<view class="box">
			<view class="background banner" :style="{
        height: sheight + 'rpx',
		transition: coverTransition,
		transform: coverTransform,
        
      }">
				<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
				<view class="fod">
					<view class="install" @tap="footprint">
						<image src="@/static/user/zuji.png" class="installimg"></image>
					</view>
					<view class="install" @tap="releases">
						<image src="@/static/user/shhezhih.png" class="installimg"></image>
					</view>
				</view>
			</view>


		</view>
		<view @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">


			<view class="information">
				<personal :personal="personal"></personal>
				<roll></roll>
				<conceal></conceal>
			</view>
		</view>



		<view class="establish1">
			<image src="@/static/tab/chusngjianhoome.png" class="establish" @tap="room"></image>
			<image src="@/static/tab/fabudongtai.png" class="establish" @tap="release"></image>
			<image src="@/static/tab/chuangjianhuati.png" class="establish" @tap="establishcircle"></image>

		</view>
	</view>
</template>

<script>
	import personal from "@/pages/user/personal.vue"
	import conceal from "@/pages/user/conceal.vue"
	import roll from "@/pages/user/roll.vue"
	import {
		LtsMineMyHome,
		
	} from "@/config/user.js"

	let startY = 0, //手指按下时屏幕的位置
		moveY = 0, //手指当前在屏幕中的位置
		pageAtTop = true; //是否到顶
	export default {

		data() {
			return {
				coverTransform: "scale(1)", //放大倍数
				coverTransition: "0", //过度时间
				moving: false,
				form: {},
				sheight: 360, //高
				personal:{},
				
			}
		},
		components: {
			personal,
			conceal,
			roll
		},
		onLoad() {
			this.getlist()
			
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
					this.sheight = 360 + moveDistance;
					this.coverTransform = 'scale(1.08)';
					this.coverTransition = '.1s ease-out';
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.sheight = 360;
				this.coverTransform = 'scale(1)';
				this.coverTransition = '.2s ease-out';
			},
			getlist(){
				LtsMineMyHome().then(res=>{
					this.personal=res
					
				})
			},
			
			releases() {
				uni.navigateTo({
					url: '/pages/settings/settings'
				})
			},
			footprint() {
				uni.navigateTo({
					url: '/pages/user/footprint/footprint'
				})
			},
			release() {
				uni.navigateTo({
					url: '/pages/release/release'
				})
			},
			room() {
				uni.navigateTo({
					url: '/pages/release/room/room'
				})
			},
			establishcircle() {
				uni.navigateTo({
					url: '/pages/release/establishcircle/establishcircle'
				})
			}

		}
	}
</script>

<style>
	.box {
		width: 750rpx;
		overflow: hidden;


	}

	.background {
		width: 750rpx;
		height: 360rpx;
		overflow: hidden;
		background-size: cover;

		position: relative;

	}

	.backgroundimg {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
	}


	.fod {
		/* border: 1px solid red; */
		display: flex;
		width: 168rpx;
		justify-content: space-between;
		position: absolute;
		top: 100rpx;
		right: 18rpx;
	}

	.install {
		width: 64rpx;
		height: 64rpx;

		border-radius: 32rpx;
		background-color: #00000081;
	}

	.installimg {
		width: 40rpx;
		height: 40rpx;
		display: block;
		margin: 12rpx;

	}


	.information {
		background: #1E1A32;
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		color: white;
		width: 100%;
		padding-top: 20rpx;
		position: relative;
		top: -70rpx;



	}

	.establish1 {
		width: 92rpx;

		background: linear-gradient(172deg, #D53EDA 0%, #7E21E2 100%);
	}

	.establish {
		width: 50rpx;
		height: 50rpx;
		margin-top: 30rpx;
	}
</style>
