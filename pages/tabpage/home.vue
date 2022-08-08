<template>
	<view class="a">
		<view class="bar">
		</view>
		<view class="head">
			<view class="headleft">
				<text class="text">余姚</text>
				<image src="../../static/home/weizhi.png" class="img"></image>
			</view>
			<view class="input">
				<image src="../../static/home/sousuo.png" class="img1"></image>
				<text class="text1">搜索您想搜索的人~</text>
			</view>
		</view>

		
			<swiper class="swiper-box" @change="change" circular :autoplay="true" :interval="3000" indicator-dots >
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">

						<image :src="item.ima" class="swiper-item-image"></image>
					</view>
				</swiper-item>
			</swiper>
		

		<view class="favourable">
			商家优惠福利
		</view>
		<image src="../../static/home/youhui.png" class="favourableimage" @tap="business"></image>
		<view class="Interesting">
			<view class="people">
				有趣的人
			</view>
			<view class="more">
				寻找更多有趣的人 >
			</view>
		</view>

<view class="jurisdiction" v-if="flag">
	<image src="../../static/home/kaiqidingwei.png" class="jurisdictionimg"></image>
	<view class="jurisdiction1">
		您未开启定位权限，部分功能无法正常使用
	</view>
	<view class="jurisdiction1">
		开通定位后，将为您推荐附近有趣的人
	</view>
	<view class="jurisdiction2"  @tap="state">
		开启定位
	</view>
</view>
		
			<swiper class="swiperbox" @change="change"  v-if="!flag">
				<swiper-item v-for="(item ,index) in info" :key="index" class="swiperitem">
					<view class="swiperview">
						<view class="swiperitemtop">

							<view class="synopsis1">
								<image src="../../static/home/a.pic.jpg" class="image1" mode="aspectFill"></image>
							</view>
							<view class="synopsis2">
								<image src="../../static/home/b.pic.jpg" class="image2"></image>
								<image src="../../static/home/c.pic.jpg" class="image2"></image>
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
							<view class="collect">

							</view>


						</view>

					</view>


				</swiper-item>
			</swiper>
		

		<view class="Interesting">
			<view class="people">
				动态
			</view>
			<view class="more">
				更多动态 >
			</view>
		</view>
		<view class="particulars">
			<view class="batten">
				<view class="sculpture">
					<image src="../../static/home/lbt.png" class="sculptureimage"></image>
				</view>
				<view class="nickname">
					<view class="nicknamename">
						想咋想
					</view>
					<view class="nicknametime">
						3分钟前发布
					</view>
				</view>

			</view>
			<view class="copywriting">
				海浪肯随山俯仰，风帆长共客飘摇
			</view>
			<view class="flash">
				<image src="../../static/home/lbt.png" class="flashimage"></image>
			</view>
			<view class="crumbs">
				<view class="crumbsview">
					#治愈系风景
				</view>
			</view>

			<view class="partake">
				<view class="partake1">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake2">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake3">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="conversation">
					1539人等参与了此话题
				</view>
				<view class="praise" @tap="click">
					<image src="../../static/home/dianzan.png" class="fabulous" v-if="!show"></image>
					<image src="../../static/home/dianjishow.png" class="fabulous" v-if="show"></image>
					<text class="praisetext">999</text>
				</view>
				<view class="praise">
					<image src="../../static/home/pinglun.png" class="fabulous"></image>
					<text class="praisetext">999</text>
				</view>
			</view>

		</view>
		<view class="particulars">
			<view class="batten">
				<view class="sculpture">
					<image src="../../static/home/lbt.png" class="sculptureimage"></image>
				</view>
				<view class="nickname">
					<view class="nicknamename">
						想咋想
					</view>
					<view class="nicknametime">
						3分钟前发布
					</view>
				</view>

			</view>
			<view class="copywriting">
				海浪肯随山俯仰，风帆长共客飘摇
			</view>
			<view class="flash">
				<image src="../../static/home/lbt.png" class="flashimage"></image>
			</view>
			<view class="crumbs">
				<view class="crumbsview">
					#治愈系风景
				</view>
			</view>

			<view class="partake">
				<view class="partake1">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake2">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="partake3">
					<image src="../../static/home/lbt.png" class="partakeimage"></image>
				</view>
				<view class="conversation">
					1539人等参与了此话题
				</view>
				<view class="praise">
					<image src="../../static/login/qq.png" class="fabulous"></image>
					<text class="praisetext">999</text>
				</view>
				<view class="praise">
					<image src="../../static/login/qq.png" class="fabulous"></image>
					<text class="praisetext">999</text>
				</view>
			</view>

		</view>

		<view class="kongbai">

		</view>
	</view>
</template>

<script>
	// import tab from "@/components/tab.vue"
	export default {

		data() {
			return {
				info: [{

					ima: "../../static/home/lbt.png"

				}, {

					ima: "../../static/home/lbt.png"
				}, {

					ima: "../../static/home/lbt.png"
				}],
				current: 0,
				mode: 'round',
				show: false,
				flag:true
			}
		},
		// components:{
		// 	tab
		// },
		onLoad() {
			// uni.hideTabBar()

		},
		methods: {
			
			change(e) {
				this.current = e.detail.current;
			},
			click() {
				const isShow = this.show ? false : true
				this.show = isShow

			},
			// 跳转商家优惠页面
			business() {
				uni.navigateTo({
					url: "/pages/business/business"
				})
			},
			// 开启定位
			state(){
				this.flag=false
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
		background-color: #29253C;
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
		background-color: #29253C;
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
	.swiper-box-item{
		width: 706rpx;
	}

 .swiper-box .uni-swiper-dots .uni-swiper-dots-horizontal{
		   margin-bottom: 1rpx;
		   margin-top: 30rpx;
		  
		 }
		 .swiper-box  .uni-swiper-dot{
		
		display: inline-flex;
		height: 6rpx;
		justify-content: space-between;
		
		 }
		 .swiper-box .uni-swiper-dot::before{
		content: '';
		flex-grow: 1;
		width: 22rpx;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8rpx;
		
		 }
		 .swiper-box .uni-swiper-dot-active {
		 			
		 			width: 32upx !important;
		 			height: 8upx !important;
		 			background: rgba(255, 255, 255,1);
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
		color: #FFFFFF;
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
		color: #FFFFFF;
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
		background-color: #29253C;
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
		color: #FFFFFF;
	}

	.detailstext2 {
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFEE70;
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
		background: linear-gradient(180deg, #B043FA 0%, #7222EB 100%);
		border-radius: 65rpx;
		margin-top: 30rpx;
		margin-left: 70rpx;
	}

	.particulars {
		width: 706rpx;
		margin-left: 22rpx;
		margin-top: 28rpx;


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

	}

	.nicknamename {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.nicknametime {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.copywriting {
		margin-top: 22rpx;
		font-size: 32rpx;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.flash {
		/* width:706rpx; */
		height: 412rpx;
		margin-top: 22rpx;
		border-radius: 30rpx;
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
		background-color: #403B5B;
		font-size: 28rpx;
		margin-right: 20rpx;
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
	}

	.praise {
		margin-left: 90rpx;
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
	}

	.kongbai {
		height: 50rpx;
	}
	.jurisdiction{
		width: 706rpx;
		height: 650rpx;
		border: 1px solid  rgba(255, 255, 255, 0);
		margin-left: 22rpx;
		border-radius: 30rpx;
		margin-top: 30rpx;
		background-color: #29253C ;
	}
	.jurisdictionimg{
		width: 160rpx;
		height: 160rpx;
		margin: 78rpx auto 50rpx  auto;
		display: block;
	}
	.jurisdiction1{
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.6);
		
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
	}
	.jurisdiction2{
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		font-size: 28rpx;
		text-align: center;
		background-color: #D53EDA;
		border-radius: 54rpx;
		margin-left: 140rpx;
		margin-top: 64rpx;
	}
</style>
