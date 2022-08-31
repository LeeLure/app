<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"> </navigation>

		<view class="list" :style="{height:swiperheight+'rpx'}">
			<view class="condition">
				创建圈子的条件
			</view>
			<view class="conditionlist">
				<view class="conditionleft">
					发布动态数
					<text class="conditiontext">
						<image src="@/static/release/dayudengyu.png" class="bigimg"></image>5
					</text>
				</view>
				<view class="conditionright" v-if="list.dynamicQuantity">
					<view class="headingright">
						<image src="@/static/release/duigou.png" class="headingrightimg">
						</image>
					</view>
					已满足
				</view>
				<view class="conditionright1" v-else>
					<view class="headingright1">
						<image src="@/static/settings/gantahao.png" class="headingrightimg">
						</image>
					</view>
					未满足
				</view>
			</view>
			<view class="conditionlist">
				<view class="conditionleft">
					发布动态累计获得1000赞
					<text class="conditiontext"> 已获得0/1000 </text>
				</view>
				<view class="conditionright" v-if="list.likes">
					<view class="headingright">
						<image src="@/static/release/duigou.png" class="headingrightimg">
						</image>
					</view>
					已满足
				</view>
				<view class="conditionright1" v-else>
					<view class="headingright1">
						<image src="@/static/settings/gantahao.png" class="headingrightimg">
						</image>
					</view>
					未满足
				</view>
			</view>
			<view class="conditionlist">
				<view class="conditionleft">
					创建圈子数
					<text class="conditiontext">
						<image src="@/static/release/xiaoyudengyu.png" class="bigimg"></image>5
					</text>
				</view>
				<view class="conditionright" v-if="list.circleConditions">
					<view class="headingright">
						<image src="@/static/release/duigou.png" class="headingrightimg">
						</image>
					</view>
					已满足
				</view>
				<view class="conditionright1" v-else>
					<view class="headingright1">
						<image src="@/static/settings/gantahao.png" class="headingrightimg">
						</image>
					</view>
					未满足
				</view>
			</view>
			<view class="apply applys" @tap="establishcircle" v-if="show">
				申请创建
			</view>
			<view class="apply" v-else>
				申请创建
			</view>

		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import {
		CircleTopicCondition
	} from "@/config/home.js"
	export default {
		data() {
			return {
				title: "创建圈子",
				list: {},
				show: false
			}
		},
		components: {
			navigation,


		},
		onLoad() {
			this.getlist()
			var _this = this
			uni.getSystemInfo({
				success(res) {
					console.log("屏幕高度 HH = " + res.windowHeight)
					console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
					_this.swiperheight = res.windowHeight * 2 - 250
				}
			})
		},
		methods: {
			getlist() {
				CircleTopicCondition().then(res => {
					if (res.dynamicQuantity == true && res.circleConditions == true && res.likes == true) {
						this.show = true
					}
					this.list = res
				})

			},
			establishcircle() {
				uni.navigateTo({
					url: '/pages/release/establishcircle/foundcircle/foundcircle'
				})
			}

		}
	}
</script>

<style>
	.list {
		margin-top: 150rpx;
		background-color: #29253C;
		border-radius: 30rpx 30rpx 0 0;
	}

	.condition {
		font-size: 32rpx;
		color: white;
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 32rpx;


	}

	.conditionlist {
		height: 80rpx;
		margin-top: 20rpx;
		margin-left: 32rpx;
		display: flex;
		justify-content: space-between;
	}

	.conditionleft {
		font-size: 28rpx;
		color: white;
	}


	.conditiontext {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
		margin-left: 20rpx;
		vertical-align: middle;
	}

	.bigimg {
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
		
	}

	.conditionright {
		margin-right: 30rpx;
		display: flex;
		color: #D53EDA;
		font-size: 24rpx;
	}

	.conditionright1 {
		margin-right: 30rpx;
		display: flex;
		color: rgba(255, 255, 255, 0.6);
		font-size: 24rpx;
	}

	.headingright1 {
		width: 36rpx;
		height: 36rpx;
		border-radius: 30rpx;
		background-color: rgba(255, 255, 255, 0.6);
		margin-right: 10rpx;


	}

	.headingright {
		width: 36rpx;
		height: 36rpx;
		border-radius: 30rpx;
		background-color: #D53EDA;
		margin-right: 10rpx;


	}

	.headingrightimg {
		width: 20rpx;
		height: 25rpx;
		margin-top: 5rpx;
		margin-left: 10rpx;
	}

	.apply {
		width: 544rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 54rpx;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.2);
		margin-left: 104rpx;
		margin-top: 70%;

	}

	.applys {
		background-color: #D53EDA;
		color: white;

	}
</style>
