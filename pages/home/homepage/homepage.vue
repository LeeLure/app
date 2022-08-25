<template>
	<!-- 他人主页 -->
	<view>



		<view class="box">
			<view class="head">
				<view class="headleft" @tap="revert">
					<image src="@/static/home/myfanhui.png" class="headimg"></image>
				</view>
				<view class="headright">
					<image src="@/static/home/dian.png" class="headimg"></image>
				</view>
			</view>

			<view class="background" :style="{
        height: sheight + 'rpx',
		transition: coverTransition,
		transform: coverTransform,
        
      }">
				<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
			</view>
		</view>
		<view @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">


			<view class="information">
				<information :namelist="namelist"></information>
				<!-- <release></release> -->
				<view class="kongbai">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import information from '@/pages/home/homepage/information.vue'
	import release from "@/pages/home/homepage/release.vue"
	import {
		otherHomepage,
		homeList
	} from "@/config/home.js"
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
				sheight: 588, //高
				uid: 0,
				namelist:{},
				list:[],
				page:1,
				limit:10
			}
		},
		components: {
			information,
			release
		},
		onLoad(options) {
			const uid = JSON.parse(options.uid)

			console.log(uid, "00000");
			this.getlist(uid)
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
					if (this.sheight > 800) return;
					this.sheight = 588 + moveDistance;
					this.coverTransform = 'scale(1.3)';
					this.coverTransition = '.2s ease-out';
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.sheight = 588;
				this.coverTransform = 'scale(1)';
				this.coverTransition = '.2s ease-out';
			},
			revert() {
				uni.navigateBack({});
			},
			getlist(uid) {
				let id = uid
				console.log("wer", id);
				otherHomepage(
					{id}
				).then(res => {
					this.namelist = res

					console.log(this.namelist, "hh");
				}),
				homeList({
					page: this.page,
					limit: this.limit,
					uid:id,
					
				}).then(res => {
					this.list=res.rows
					
					console.log(res, "hh");
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #29253C;
	}

	.head {
		height: 100rpx;

		width: 710rpx;

		display: flex;
		justify-content: space-between;
		position: absolute;
		left: 20rpx;
		top: var(--status-bar-height);
		z-index: 2;


	}

	.headleft {
		margin: auto 0;
	}

	.headright {
		margin: auto 0;
	}

	.headimg {
		width: 54rpx;
		height: 54rpx;

	}

	.box {
		width: 750rpx;
		overflow: hidden;


	}

	.background {
		width: 750rpx;
		height: 588rpx;
	}

	.backgroundimg {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
	}

	.information {
		padding-top: 30rpx;
		width: 750rpx;
		border-radius: 60rpx 60rpx 0 0;
		position: relative;
		top: -120rpx;
		background-color: #29253C;
	}

	.kongbai {
		height: 50rpx;
	}
</style>
