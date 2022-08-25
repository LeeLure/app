<template>
	<!-- 足迹 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		 <view class="content"v-if="(titles.length>0)?true:false">
			        
			<!-- toolbar -->
			<view class="switchs1">			
			        <switchs :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" ></switchs>
			       </view> 
			<!-- 页面-->
			        <swiper class="swiper-content" :style="{height:swiperheight+'rpx'}" :current="tabIndex"
				@change="swiperChange">
				            <swiper-item class="itemswiper" :key="index2" v-for="(newItem ,index2) in tabBars">
					
					<scroll-view scroll-y  class="swiper-scroll">	
							
						
					
					        <view class="viewat">
						              
						<view class="caller">
							<view class="callernumber">
								16546
							</view>
							<view class="callertext">
								总浏览量
							</view>
						</view>
						<view class="caller callers">
							<view class="callernumber">
								165人
							</view>
							<view class="callertext">
								今日访客
							</view>
						</view>
						<view class="caller">
							<view class="callernumber">
								16546
							</view>
							<view class="callertext">
								今日浏览量
							</view>
						</view>

						              
					</view>

					<view class="list">
						<view class="date">
							7月24日
						</view>
						<view class="passenger">
							<view class="passengerleft">
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="passengerimg"></image>
							</view>
							<view class="passengercenter">
								<view class="passenger1">
									不会玩联盟的阿狸
								</view>
								<view class="passenger2">
									10：53访问你的主页
								</view>
							</view>
							<view class="passengerright">
								...
							</view>
						</view>
					</view><view class="list">
						<view class="date">
							7月24日
						</view>
						<view class="passenger">
							<view class="passengerleft">
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="passengerimg"></image>
							</view>
							<view class="passengercenter">
								<view class="passenger1">
									不会玩联盟的阿狸
								</view>
								<view class="passenger2">
									10：53访问你的主页
								</view>
							</view>
							<view class="passengerright">
								...
							</view>
						</view>
					</view><view class="list">
						<view class="date">
							7月24日
						</view>
						<view class="passenger">
							<view class="passengerleft">
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="passengerimg"></image>
							</view>
							<view class="passengercenter">
								<view class="passenger1">
									不会玩联盟的阿狸
								</view>
								<view class="passenger2">
									10：53访问你的主页
								</view>
							</view>
							<view class="passengerright">
								...
							</view>
						</view>
					</view>
				</scroll-view>
				           
				</swiper-item>
				        </swiper>
			    
		</view>


<view v-else>
	<image src="@/static/user/zujis.png" class="footprintimg"></image>
	<view class="footprintvip">
		开通VIP才能查看来访记录
	</view>
	<view class="footprinttext">
		开通后，将可查看谁来看过你~
	</view>
	<view class="footprinttext">
		开通VIP后，去别人主页不会留下痕迹
	</view>
	<view class="footprintopen">
		开通VIP
	</view>
</view>


	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import switchs from "@/components/switchs.vue"
	export default {
		data() {
			return {
				title: "查看访客",
				swiperheight: 0,
				tabIndex: 0, // 选中的
				tabBars: [{
						name: "谁看过我",
						id: "guanzhu"
					},
					{
						name: "我看过谁",
						id: "tuijian"
					},

				],
				titles:[
					{text:"好来玩电竞网咖"},
					{text:"好来玩电竞网咖"},
					{text:"好来玩电竞网咖"}
				]

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
			}


		}
	}
</script>

<style>
	.content {
	
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.switchs1{
		width: 500rpx;
		
		margin: 0 auto;
	}
	.swiper-scroll{
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
		color: white;
		
		display: flex;
		justify-content: space-around;
		margin-bottom: 20rpx;
		/* border: 1px solid red; */
	}

	.caller {
		width: 168rpx;
		height: 168rpx;

		text-align: center;

		border-radius: 100rpx;
	}

	.callers {
		border: 8rpx solid rgba(56, 49, 90, 0.5800);

	}

	.callernumber {
		margin-top: 40rpx;
		font-weight: 500;
		font-size: 40rpx;
	}

	.callertext {

		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}

	.list {
		margin-top: 20rpx;
	}

	.date {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		margin-left: 20rpx;
		color: #FFFFFF;
	}

	.passenger {
		display: flex;
		/* border: 1px solid red; */
		margin-left: 20rpx;
		height: 120rpx;
	}

	.passengerleft {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
		display: block;
		margin: auto 0;
		
	}

	.passengerimg {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
	}

	.passengercenter {
		
		width: 500rpx;
		margin-left: 20rpx;
		margin: auto  20rpx auto 20rpx;
	}

	.passenger1 {
		color: white;

		font-size: 28rpx;
	}

	.passenger2 {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-top: 10rpx;
	}

	.passengerright {
		height: 92rpx;
		margin: auto 0;
		color: white;
		
	}
	.footprintimg{
		width: 120rpx;
		height: 120rpx;
		margin:120rpx  auto 20rpx auto;
		display: block;
	}
	.footprintvip{
		font-size: 32rpx;
		text-align: center;
		color: white;
		margin-bottom: 20rpx;
	}
	.footprinttext{
		font-size: 24rpx;
		margin-left: 148rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-top: 20rpx;
	}
	.footprintopen{
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		font-size: 32rpx;
		background-color: #D53EDA ;
		border-radius: 54rpx;
		color: white;
		margin-left: 162rpx;
		margin-top: 254rpx;
	}
</style>
