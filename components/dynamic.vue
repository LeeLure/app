<template>
	<view>

		<view class="particulars">
			<view class="batten">
				<view class="sculpture" @tap="homepage">
					<image src="@/static/home/lbt.png" class="sculptureimage"></image>
				</view>
				<view class="nickname">
					<view class="nicknamename">想咋想</view>
					<view class="nicknametime">3分钟前发布</view>
				</view>
				<view class="copywritingright">
					<image src="@/static/user/simi.png" class="copywritingimg" @tap="copywritingimg"></image>
				</view>
			</view>

			<view @tap="tendencies">


				<view class="copywritingtext">
					海浪肯随山俯仰，风帆长共客飘摇

				</view>


				<view class="flash">
					<picturearray :imgUrl="imgUrl"></picturearray>
				</view>
				<view class="crumbs">
					<view class="crumbsview">#治愈系风景</view>
			
			</view>
</view>
			<view class="partake">
				<view class="partake1">
					<image src="@/static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake2">
					<image src="@/static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake3">
					<image src="@/static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="conversation">1539人等参与了此话题</view>
				<view class="praise" @tap="click">
					<image src="@/static/home/dianzan.png" class="fabulous" v-if="!show"></image>
					<image src="@/static/home/dianjishow.png" class="fabulous" v-if="show"></image>
					<text class="praisetext">999</text>
				</view>
				<view class="praise">
					<image src="@/static/home/pinglun.png" class="fabulous"></image>
					<text class="praisetext">999</text>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import picturearray from "@/components/picturearray.vue"
	export default {
		props: {
			imgUrl: {},
			exhibit: ""

		},
		data() {
			return {
				show: false,
			}
		},

		components: {

			picturearray,


		},
		methods: {
			click() {
				const isShow = this.show ? false : true;
				this.show = isShow;
			},
			copywritingimg() {
				console.log("jh");
			},
			tendencies() {

				if (this.exhibit == true) {
					uni.navigateTo({
						url: '/pages/home/moredynamic/tendencies/tendencies'
					})
				}

			},
			homepage() {
				uni.navigateTo({
					url: '/pages/home/homepage/homepage'
				})
			}

		}
	}
</script>

<style>
	.particulars {
		width: 720rpx;
		margin-left: 22rpx;
		margin-top: 28rpx;
		color: white;

	}

	.batten {
		display: flex;

	}

	.sculpture {
		width: 84rpx;
		height: 84rpx;
		border-radius: 41rpx;
		overflow: hidden;
	}

	.sculptureimage {
		width: 84rpx;
		height: 84rpx;
	}

	.nickname {

		margin-top: 10rpx;
		margin-left: 20rpx;
		width: 520rpx;
	}

	.nicknamename {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.nicknametime {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}



	.copywritingtext {
		font-size: 32rpx;
		color: white;
		margin-top: 16rpx;

	}

	.copywritingright {
		margin-left: 50rpx;


	}

	.copywritingimg {
		width: 30rpx;
		height: 30rpx;
	}

	.flashimage {
		width: 706rpx;
		height: 412rpx;
		border-radius: 30rpx;
	}

	.crumbs {
		margin-top: 34rpx;
	}

	.crumbsview {
		display: inline-block;
		padding: 10rpx 25rpx;
		height: 30rpx;
		line-height: 30rpx;
		border-radius: 20rpx;
		background-color: #403b5b;
		font-size: 28rpx;
		margin-right: 20rpx;
		color: white;
	}

	.partake {
		display: flex;
		position: relative;
		margin-top: 20rpx;
	}

	.partake1 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		border: 1rpx solid white;
	}

	.partake2 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		position: absolute;
		left: 25rpx;
		border: 1rpx solid white;
	}

	.partake3 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		position: absolute;
		left: 45rpx;
		border: 1rpx solid white;
	}

	.partakeimage {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
	}

	.conversation {

		font-size: 22rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 60rpx;
		margin-top: 10rpx;
		margin-right: 80rpx;
	}

	.praise {

		margin-left: 30rpx;
		width: 100rpx;
	}

	.fabulous {
		width: 32rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.praisetext {
		font-size: 22rpx;
		vertical-align: middle;
		margin-left: 10rpx;
		color: white;
	}

	.flash {
		/* width:706rpx; */

		margin-top: 22rpx;
		border-radius: 30rpx;
	}
</style>
