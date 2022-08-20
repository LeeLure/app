<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="classification">
			<view class="icon" v-for="(item ,index) in  headline" :key="index">
				<view class="iconbox">
				<image :src="item.ima" class="image"></image>
			
					
				</view>
				<view class="icontext">
					{{item.text}}
				</view>
				
			</view>

		</view>

		<view class="shopkeeper" v-for="(item ,index) in  prices" :key="index">
			<view class="introduce" @tap="details">
				<view class="introduceleft">
					<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="introduceimg"></image>

				</view>
				<view class="introduceright">
					<view class="name">
						{{item.text}}
					</view>
					<view class="details">
						搭配I7显卡 高配置主机 畅玩无限
					</view>
					<view class="position">
						<view class="position1">
							游戏/电竞
						</view>
						<view class="position1">
							滨江路 1.4km
						</view>
					</view>
				</view>

			</view>
			<view class="controlled">
				<!-- <view :class="flag==true? 'active': 'control' ">
					<view class="coupon" v-for="(item ,index) in  price" :key="index">
						<view class="couponleft">
							<view class="couponcolor">
								{{item.text}}
							</view>
							<view class="coupontext">
								行情价: ￥599
							</view>


						</view>
						<view class="couponright">
							<view class="price">
								<view class="price1">
									优惠卷
								</view>
								<view class="price2">

									仅售329，价值599元高等配置 无仅售329，价值599元高等配置 无
								</view>
							</view>
							<view class="number">
								销量：3644
							</view>
						</view>

					</view>
				</view> -->
				<view class="active">
					<view v-for="(item ,activeIndex) in  price" :key="activeIndex">
						<view class="coupon" v-if="activeIndex<(activeArr.includes(index)? price.length : 2)? true : false">
							<view class="couponleft">
								<view class="couponcolor">
									{{item.text}}
								</view>
								<view class="coupontext">
									行情价: ￥599
								</view>


							</view>
							<view class="couponright">
								<view class="price">
									<view class="price1">
										优惠卷
									</view>
									<view class="price2">

										仅售329，价值599元高等配置 无仅售329，价值599元高等配置 无
									</view>
								</view>
								<view class="number">
									销量：3644
								</view>
							</view>

						</view>
					</view>
					<view v-if="price.length>2? true : false" class="show" @tap="showTag(index)">
						<view class="triangle">{{activeArr.includes(index)? "收起":"展开其他优惠项目"}}</view>
						<view class="triangle1" v-if="activeArr.indexOf(index)"></view>
						<view class="triangle2" v-else></view>
					</view>
				</view>

				<!-- <view class="show" @tap="showTag(index)">
					<view class="triangle">{{flag?"收起":"展开其他优惠项目"}}</view>
					<view class="triangle1" v-if="!flag"></view>
					<view class="triangle2" v-if="flag"></view>
				</view> -->
			</view>


		</view>



	
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				headline: [{
						ima: require("@/static/business/zuliao.png"),
						text: "按摩/足疗"
					},
					{
						ima: require("@/static/business/ktv.png"),
						text: "KTV"
					}, {
						ima: require("@/static/business/xiyu.png"),
						text: "洗浴/汗蒸"
					},
					{
						ima: require("@/static/business/dianjing.png"),
						text: "电竞/电玩"
					},
					{
						ima: require("@/static/business/jiuba.png"),
						text: "酒吧"
					},
					{
						ima: require("@/static/business/remen.png"),
						text: "热门商家"
					},
					{
						ima: require("@/static/business/youyong.png"),
						text: "游泳"
					},
					{
						ima: require("@/static/business/langrensha.png"),
						text: "狼人杀/剧本杀"
					},
					{
						ima: require("@/static/business/sirenyingyuan.png"),
						text: "私人影院"
					},
					{
						ima: require("@/static/business/qiulei.png"),
						text: "球类运动"
					}
				],
				prices: [{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					}, {
						text: "¥546"
					},

				],
				price: [{
						text: "¥546"
					},
					{
						text: "¥546"
					}, {
						text: "¥546"
					}, {
						text: "¥546"
					},

				],
				index: 0,
				flag: 0,
				activeArr: [],
				title: "商家优惠福利",
				codeTime: 0,
				code: "",
				phone: "15236245675",
				vrifyCode: ""
			}
		},
		components: {
			navigation
		},
		methods: {
			remove(arr, val) {
				var index = arr.indexOf(val);
				if (index > -1) {
					arr.splice(index, 1);
				}
			},
			showTag(index) {
				console.log(index);
				const activeArr = this.activeArr
				if (activeArr.includes(index)) {
					this.remove(activeArr,index)
				} else {
					activeArr.push(index)
				}
				this.activeArr = activeArr

			},
			details() {
				uni.navigateTo({
					url: "/pages/business/details"
				})
			},
		
			
		}
	}
</script>

<style>
	.classification {
	
		display: flex;
		flex-wrap: wrap;
		margin-left: 20rpx;
		width: 730rpx;
	}

	.icon {
		
		width: 140rpx;
		margin-top: 38rpx;
	}
.iconbox{
	width: 82rpx;
	height: 82rpx;
	border-radius: 42rpx;
	background-color: rgba(255, 255, 255, 0.2);
		margin: 0 auto;
}
	.image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 42rpx;
			margin: 0 auto;
	}

	.icontext {
		color: white;
		font-size: 22rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		text-align: center;
		margin-top: 16rpx;
	}

	.all {
		margin: 30rpx;
		border-bottom: 2rpx solid #EEEEEE;
		display: flex;
		flex-wrap: nowrap;
	}

	.left {
		margin-bottom: 30rpx;
		margin-right: 40rpx;
		width: 150rpx;
	}

	.three {
		background-color: white;
		width: 92%;
		border-radius: 10rpx;
		padding: 20rpx 0;
		margin: 20rpx auto;
		position: relative;
	}

	.btn {
		background-color: orange;
		font-size: 28rpx;
		width: 160rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-top: 40rpx;
		color: white;
		font-weight: 600;
	}

	.get {
		position: absolute;
		top: 40rpx;
		right: 30rpx;
		background-color: orange;
		height: 70rpx;
		line-height: 70rpx;
		color: white;
		border-radius: 10rpx;
		padding: 0 20rpx;
	}

	.shopkeeper {
		background-color: #29253C;
		color: white;
		margin-top: 20rpx;
		width: 750rpx;
	}

	.introduce {
		border-bottom: 1rpx solid rgba(255, 255, 255, 0.103);
		margin-left: 20rpx;
		height: 250rpx;
		width: 710rpx;
		display: flex;
	}

	.introduceleft {
		margin: auto 0;
		margin-left: 16rpx;
	}

	.introduceimg {
		width: 160rpx;
		height: 160rpx;
		border-radius: 20rpx;
	}

	.introduceright {
		width: 530rpx;

		margin: auto 0 auto 24rpx;
	}

	.name {
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	.details {
		color: #ffffffcc;
		font-size: 24rpx;
		margin-top: 26rpx;
	}

	.position {
		display: flex;
		justify-content: space-between;

	}

	.position1 {
		color: #ffffff81;
		font-size: 24rpx;
		margin-top: 26rpx;


	}

	.control {
		width: 750rpx;
		height: 306rpx;
		overflow: hidden;
	}

	.active {
		height: auto;
		overflow: visible;
	}

	.coupon {
		width: 100%;
		height: 153rpx;
		display: flex;

	}

	.couponleft {
		margin: auto 0;
		width: 200rpx;

	}

	.couponcolor {

		color: #ffee8cda;
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		float: right;

	}

	.coupontext {
		font-size: 24rpx;
		float: right;

		height: 50rpx;
		line-height: 50rpx;

		color: rgba(255, 255, 255, 0.5);
	}

	.couponright {
		margin: auto 0 auto 22rpx;

	}

	.price {
		display: flex;
		margin-top: 10rpx;

	}

	.price1 {
		width: 78rpx;
		height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		background-color: #EB8E5D;
		border-radius: 4rpx;

		font-size: 20rpx;
	}

	.price2 {
		width: 378rpx;
		height: 34rpx;
		/* overflow: hidden; */
		font-size: 24rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-left: 20rpx;


	}

	.number {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		height: 50rpx;
		line-height: 50rpx;

	}

	.controlled {}

	.show {
		border-top: 2rpx solid rgba(255, 255, 255, 0.1);
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: #999999;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-left: 20rpx;
		width: 710rpx;
	}



	.triangle1 {
		margin-left: 10rpx;
		margin-top: 37rpx;
		width: 0;
		height: 0;
		border: 10rpx solid #999999;
		border-top-color: #999999;
		border-bottom-color: transparent;
		border-left-color: transparent;
		border-right-color: transparent;

	}

	.triangle2 {
		margin-left: 10rpx;
		margin-top: 22rpx;
		width: 0;
		height: 0;
		border: 10rpx solid #999999;
		border-top-color: transparent;
		border-bottom-color: #999999;
		border-left-color: transparent;
		border-right-color: transparent;

	}
</style>
