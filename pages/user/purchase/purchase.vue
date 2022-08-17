<template>
	<!-- 我购买的 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		 <view class="content">
			        
			<!-- toolbar -->
			        <switchs :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></switchs>
			        
			<!-- 页面-->
			        <swiper class="swiper-content" :style="{height:swiperheight+'rpx'}" :current="tabIndex"
				@change="swiperChange">
				            <swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll">
						<view v-for="(item ,index) in  prices" :key="index">


							     <view class="viewat">
								<view class="picture" @tap="order">
									<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="pictureimg"></image>
								</view>
								<view class="synopsis">
									<view class="synopsistext">
										[人气爆款]329，价值599元高等配置 无限畅玩
										通宵，饮料零食全提供~[人气爆款]329，价值599元高等配置 无限畅玩
										通宵，饮料零食全提供~
									</view>
									<view class="synopsisunmber">
										<view class="effective">
											<view class="price">
												￥329
											</view>
											<view class="date">
												{{item.text}}
											</view>
										</view>
										<view class="code" @tap="remove">
											<image src="@/static/user/erweima.png" class="codeimg"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>            
				</swiper-item>
				<swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll">
						<view v-for="(item ,index) in  prices" :key="index">


							     <view class="viewat" @tap="order">
								<view class="picture">
									<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="pictureimg"></image>
								</view>
								<view class="synopsis">
									<view class="synopsistext">
										[人气爆款]329，价值599元高等配置 无限畅玩
										通宵，饮料零食全提供~[人气爆款]329，价值599元高等配置 无限畅玩
										通宵，饮料零食全提供~
									</view>
									<view class="synopsisunmber">
										<view class="effective">
											<view class="price">
												￥329
											</view>
											<view class="date">
												{{item.text}}
											</view>
										</view>
										<view class="codes">
											<image src="@/static/user/shhixiao.png" class="codesimg"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>            
				</swiper-item>
				        
			</swiper>
			    
		</view>
		<!-- 弹框 -->
		<view class="remove" v-if="show" @tap="cancel">
			1
		</view>
		<!-- 遮罩层 -->
		<view :class="show==true? 'actives': 'shelter' ">


		</view>


	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import switchs from "@/components/switchs.vue"
	export default {
		data() {
			return {
				title: "我购买的",
				show: false,
				swiperheight: 0,
				tabIndex: 0, // 选中的
				tabBars: [{
						name: "待使用",
						id: "guanzhu"
					},
					{
						name: "已使用",
						id: "tuijian"
					},

				],
				prices: [{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					}, {
						text: "¥546"
					}, {
						text: "¥546"
					}, {
						text: "¥546"
					}, {
						text: "¥546"
					},

				],


			}
		},
		components: {
			navigation,
			switchs
		},
		onLoad() {
			var _this = this
			uni.getSystemInfo({
				success(res) {
					console.log("屏幕高度 HH = " + res.windowHeight)
					console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
					_this.swiperheight = res.windowHeight * 2 - 188
				}
			})
		},

		methods: {
			//接受子组件传过来的值点击切换导航
			tabtap(index) {
				var _this = this
				_this.tabIndex = index;
			},
			// 滑动切换导航
			swiperChange: function(e) {
				var _this = this
				_this.tabIndex = e.detail.current
			},
			order() {
				uni.navigateTo({
					url: '/pages/user/purchase/order'
				})
			},
			remove() {
				this.show = true

			},
			cancel() {
				this.show = false
			},


		}
	}
</script>

<style>
	.swiper-scroll {
		height: 100%;

	}

	.content {

		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.swiper-content {
		margin-top: 20rpx;
		width: 100%;
		/* border: 1px solid red; */
	}

	.itemswiper {

		/* border: 1px solid red; */
	}

	.viewat {
		margin-left: 20rpx;
		margin-bottom: 40rpx;
		width: 710rpx;
		height: 226rpx;
		background-color: #2B273E;
		border-radius: 20rpx;
		display: flex;

	}

	.picture {
		width: 160rpx;
		height: 168rpx;
		border-radius: 20rpx;
		margin-left: 20rpx;
		margin: auto 20rpx auto 20rpx;
	}

	.pictureimg {
		width: 160rpx;
		height: 168rpx;
		border-radius: 20rpx;
	}

	.synopsis {
		margin: auto 0;
	}

	.synopsistext {

		/* height: 68rpx; */
		overflow: hidden;

		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.8);
	}

	.synopsisunmber {
		display: flex;
		justify-content: space-between;
	}

	.effective {}

	.price {
		margin-top: 10rpx;
		color: #FFEE8C;
		font-size: 32rpx;
	}

	.date {
		margin-top: 20rpx;
		font-size: 20rpx;
		color: rgba(255, 255, 255, 0.8);
	}

	.code {
		margin-top: 30rpx;
		width: 80rpx;
	}

	.codeimg {
		width: 60rpx;
		height: 60rpx;
	}

	.codes {
		margin-top: 30rpx;
		width: 120rpx;
	}

	.codesimg {
		width: 112rpx;
		height: 92rpx;
	}

	.actives {
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.shelter {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -2;

	}

	.remove {
		position: absolute;
		left: 126rpx;
		top: 500rpx;
		width: 500rpx;
		height: 500rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		z-index: 4;
	}
</style>
