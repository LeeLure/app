<template>
	<view class="a">
		<view class="bar"></view>
		<view class="head">
			<view class="headleft">
				<text class="text">余姚</text>
				<image src="@/static/home/weizhi.png" class="img"></image>
			</view>
			<view class="input">
				<image src="@/static/home/sousuo.png" class="img1"></image>
				<text class="text1">搜索您想搜索的人~</text>
			</view>
		</view>

		<swiper class="swiper-box" @change="change" circular :autoplay="true" :interval="3000" indicator-dots>
			<swiper-item v-for="(item, index) in info" :key="item.id">
				<view class="swiper-item">
					<image :src="item.pic" class="swiper-item-image"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="favourable">商家优惠福利</view>
		<image src="@/static/home/youhui.png" class="favourableimage" @tap="business"></image>
		<view class="Interesting">
			<view class="people">有趣的人</view>
			<view class="more" @tap="moreinteresting">寻找更多有趣的人 ></view>
		</view>

		<view class="jurisdiction" v-if="flag">
			<image src="@/static/home/kaiqidingwei.png" class="jurisdictionimg"></image>
			<view class="jurisdiction1">您未开启定位权限，部分功能无法正常使用</view>
			<view class="jurisdiction1">开通定位后，将为您推荐附近有趣的人</view>
			<view class="jurisdiction2" @tap="state">开启定位</view>
		</view>

		<swiper class="swiperbox" @change="change" v-if="!flag">
			<swiper-item v-for="(item, index) in info" :key="index" class="swiperitem">
				<view class="swiperview">
					<view class="swiperitemtop">
						<view class="synopsis1">
							<image src="@/static/home/a.pic.jpg" class="image1" mode="aspectFill"></image>
						</view>
						<view class="synopsis2">
							<image src="@/static/home/b.pic.jpg" class="image2"></image>
							<image src="@/static/home/c.pic.jpg" class="image2"></image>
						</view>
					</view>
					<view class="swiperitembottom">
						<view class="details">
							<view class="detailstop">
								<text class="detailstext1">珍有趣</text>
								<text class="detailstext2">当前在线</text>
							</view>
							<view class="detailsbottom">
								<view class="detailstext3">14.9km</view>
								<view class="detailstext4"></view>
								<view class="detailstext3">绘画</view>
								<view class="detailstext4"></view>
								<view class="detailstext3">天蝎座</view>
							</view>
						</view>
						<view class="collect" @tap="collect(index)">
							<image src="@/static/home/xihuan.png" class="likeimg" v-if="activeArr.includes(index)">
							</image>
							<image src="@/static/home/buxihhuan.png" class="likeimg" v-else></image>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="Interesting">
			<view class="people">动态</view>
			<view class="more" @tap="moredynamic">更多动态 ></view>
		</view>
		<dynamic :imgUrl="imgUrl" :exhibit="exhibit"></dynamic>
		<view class="kongbai">

		</view>




	</view>
</template>

<script>
	import dynamic from "@/components/dynamic.vue"
	import {
		homeList
	} from "@/config/home.js"
	export default {
		data() {
			return {

				info: [{
						ima: '../../static/home/lbt.png'
					},
					{
						ima: '../../static/home/lbt.png'
					},
					{
						ima: '../../static/home/lbt.png'
					}
				],
				imgUrl: [{
						img: require("@/static/home/a.pic.jpg")
					},
					{
						img: require("@/static/home/b.pic.jpg")
					},
					{
						img: require("@/static/home/c.pic.jpg")
					},


				],
				page: 1,
				limit: 10,
				exhibit: true,
				current: 0,
				mode: 'round',
				isShow: false,
				flag: true,
				activeArr: [],
				index: 0,

				info: [],
				// 广告id
				adId: 100

			};
		},
		components: {


			dynamic

		},
		// components:{
		// 	tab
		// },
		onLoad() {
			// uni.hideTabBar()
			this.getAdList()
			this.trends()

		},

		methods: {





			change(e) {
				this.current = e.detail.current;
			},

			remove(arr, val) {
				var index = arr.indexOf(val);
				if (index > -1) {
					arr.splice(index, 1);
				}
			},
			collect(index) {
				console.log(index);

				const activeArr = this.activeArr
				if (activeArr.includes(index)) {
					this.remove(activeArr, index)
				} else {
					activeArr.push(index)
				}
				this.activeArr = activeArr

			},
			// 跳转商家优惠页面
			business() {
				uni.navigateTo({
					url: '/pages/business/business'
				});
			},
			// 开启定位
			state() {
				this.flag = false;
			},

			// 跳转更多动态
			moredynamic() {
				uni.navigateTo({
					url: '/pages/home/moredynamic/moredynamic'
				})
			},
			moreinteresting() {
				uni.navigateTo({
					url: '/pages/home/moreinteresting/moreinteresting'
				})
			},
			// 获取广告列表
			async getAdList() {
				const res = await uni.$u.http.get(`/ad/list/${this.adId}`);
				console.log(res);
				this.info = res;

			},
			trends() {
				homeList({
					page: this.page,
					limit: this.limit,
					uid:"",
					lat:0,
					lng:0
					

				}).then(res => {
					console.log(res, "hh");
				})

			}
		}

	}
</script>

<style>
	.a {
		color: white;
	}

	.head {
		display: flex;
		/* margin-top: 10rpx;s */
	}

	.headleft {
		width: 108rpx;
		height: 68rpx;
		line-height: 68rpx;
		border-radius: 30rpx;
		margin-left: 22rpx;
		background-color: #29253c;
		text-align: center;
	}

	.text {
		color: white;
		font-size: 22rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		vertical-align: middle;
	}

	.img {
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
	}

	.input {
		width: 584rpx;
		height: 68rpx;
		line-height: 68rpx;
		margin-left: 14rpx;
		border-radius: 30rpx;
		background-color: #29253c;
	}

	.text1 {
		color: rgba(255, 255, 255, 0.5);
		font-size: 22rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		vertical-align: middle;
	}

	.img1 {
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
		margin-right: 15rpx;
		margin-left: 36rpx;
	}

	.swiper-box {
		height: 400rpx;
		margin-left: 22rpx;
		margin-top: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.swiper-box-item {
		width: 706rpx;
	}

	.swiper-box .uni-swiper-dots .uni-swiper-dots-horizontal {
		margin-bottom: 1rpx;
		margin-top: 30rpx;
	}

	.swiper-box .uni-swiper-dot {
		display: inline-flex;
		height: 6rpx;
		justify-content: space-between;
	}

	.swiper-box .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		width: 22rpx;
		background-color: rgba(255, 255, 255, 0.2) !important;

		border-radius: 8rpx;
	}

	.swiper-box .uni-swiper-dot-active {
		width: 32rpx !important;
		height: 8rpx !important;
		background-color: rgba(255, 255, 255, 1) !important;
		border-radius: 4rpx;
	}

	.swiper-item-image {
		width: 706rpx;
		height: 350rpx;
		border-radius: 20rpx;
	}

	.favourable {
		font-size: 36rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #ffffff;
		margin-left: 22rpx;
		margin-top: 30rpx;
	}

	.favourableimage {
		width: 706rpx;
		height: 176rpx;
		margin-left: 22rpx;
		/* margin-top: 22rpx; */
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

	.swiperbox {
		/* border: 1px  solid red; */

		height: 650rpx !important;

		width: 100%;
		margin-top: 20rpx;
	}

	.swiperitem {
		width: 620rpx !important;
		height: 650rpx !important;
		margin-left: 22rpx;
		/* border: 1px  solid red; */
		border-radius: 30rpx;
	}

	.swiperview {
		width: 582rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}

	.swiperitemtop {
		height: 460rpx;
		display: flex;
	}

	.synopsis1 {
		/* border: 1px solid red; */
		width: 328rpx;
		height: 460rpx;
	}

	.synopsis2 {
		width: 328rpx;
		height: 460rpx;
		margin-left: 8rpx;
	}

	.image1 {
		width: 328rpx;
		height: 460rpx;
	}

	.image2 {
		width: 246rpx;
		height: 226rpx;

		margin-bottom: -2rpx;
	}

	.swiperitembottom {
		height: 190rpx;
		width: 582rpx;
		display: flex;
		background-color: #29253c;
	}

	.details {
		margin-left: 18rpx;

		width: 328rpx;
	}

	.detailstop {
		margin-top: 40rpx;
	}

	.detailstext1 {
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #ffffff;
	}

	.detailstext2 {
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #ffee70;
		margin-left: 20rpx;
	}

	.detailsbottom {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		margin-top: 26rpx;
		display: flex;
	}

	.detailstext4 {
		margin-top: 10rpx;
		width: 8rpx;
		height: 8rpx;
		border-radius: 1rpx;
		background-color: rgba(255, 255, 255, 0.5);
		margin-left: 15rpx;
		margin-right: 15rpx;
	}

	.collect {
		width: 126rpx;
		height: 126rpx;

		background: linear-gradient(180deg, #b043fa 0%, #7222eb 100%);
		border-radius: 65rpx;
		margin-top: 30rpx;
		margin-left: 70rpx;
	}

	.likeimg {
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin-top: 33rpx;
		margin-left: 33rpx;
	}

	.jurisdiction {
		width: 706rpx;
		height: 650rpx;
		border: 1px solid rgba(255, 255, 255, 0);
		margin-left: 22rpx;
		border-radius: 30rpx;
		margin-top: 30rpx;
		background-color: #29253c;
	}

	.jurisdictionimg {
		width: 160rpx;
		height: 160rpx;
		margin: 78rpx auto 50rpx auto;
		display: block;
	}

	.jurisdiction1 {
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.6);

		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
	}

	.jurisdiction2 {
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		font-size: 28rpx;
		text-align: center;
		background-color: #d53eda;
		border-radius: 54rpx;
		margin-left: 140rpx;
		margin-top: 64rpx;
	}

	.kongbai {
		height: 80rpx;
		color: white;
	}
</style>
