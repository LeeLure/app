<template>
	<!-- 关注 -->
	<view>
		<view class="bar">
		</view>
		<view class="navigation">
			<view class="navigation1" @tap="revert">
				<image src="@/static/home/fanhui.png" mode="aspectFill" class="fanhui"></image>
			</view>
			<view class="navigation2">
				        <switchs :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></switchs>
			</view>

		</view>
		<view class="search">
			<image src="@/static/home/sousuo.png" class="searchimg"></image>
			搜索用户昵称或ID
		</view>
		
		
		<view class="content">	   
			<!-- 页面-->
			        <swiper class="swiper-content" :style="{height:swiperheight+'rpx'}" :current="tabIndex"
				@change="swiperChange">
				          
				  <swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll" >
						<view v-for="(item ,index) in  prices" :key="index">												
						   <view class="viewat" >
							<view class="picture" >
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="pictureimg"></image>
							</view>
							<view class="synopsis">
								<view class="name">
									不会玩联盟的阿狸
								</view>
								<view class="brief">
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵vss
								</view>
							</view>
							<view class="block">
								...
							</view>
						</view>
						</view>
					</scroll-view>            
				</swiper-item>
				<swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll" >
						<view v-for="(item ,index) in  prices" :key="index">												
						   <view class="viewat" >
							<view class="picture" >
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="pictureimg"></image>
							</view>
							<view class="synopsis">
								<view class="name">
									不会玩联盟的阿狸
								</view>
								<view class="brief">
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵vss
								</view>
							</view>
							<view class="block">
								...
							</view>
						</view>
						</view>
					</scroll-view>            
				</swiper-item>
				<swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll" >
						<view v-for="(item ,index) in  prices" :key="index">												
						   <view class="viewat" >
							<view class="picture" >
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="pictureimg"></image>
							</view>
							<view class="synopsis">
								<view class="name">
									不会玩联盟的阿狸
								</view>
								<view class="brief">
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵
									时间就像海绵 时间就像海绵vss
								</view>
							</view>
							<view class="block">
								...
							</view>
						</view>
						</view>
					</scroll-view>            
				</swiper-item>
			        
			</swiper>
			    
		</view>

	</view>
</template>

<script>
	import switchs from "@/components/switchs.vue"
	export default {
		data() {
			return {
				swiperheight: 0,
				tabIndex: 0, // 选中的
				tabBars: [{
						name: "关注",
						id: "1"
					},
					{
						name: "粉丝",
						id: "2"
					},
					{
						name: "受到喜欢",
						id: "3"
					},

				],
				prices: [{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					}, {
						text: "¥546"
					},{
						text: "¥546"
					},{
						text: "¥546"
					},{
						text: "¥546"
					},
				
				],
			}
		},
		components: {
		
			switchs
		},
		onLoad() {
			var _this = this
			uni.getSystemInfo({
				success(res) {
					console.log("屏幕高度 HH = " + res.windowHeight)
					console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
					_this.swiperheight = res.windowHeight * 2 - 208
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
			revert() {
				uni.navigateBack({});
			}
		}
	}
</script>

<style>
	.navigation {
		width: 750rpx;
		height: 100rpx;		
		display: flex;
		justify-content: space-between;
		/* border: 1px solid  red; */
	}

	.navigation1 {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		color: #FFFFFF;		
	}

	.fanhui {
		width: 40rpx;
		height: 40rpx;
	}

	.navigation2 {
		width: 100%;
		margin: auto 0;
		font-weight: 500;
		color: #FFFFFF;
	/* border: 1px solid  red; */
	}
	.search{
		width: 708rpx;
		height: 68rpx;
		line-height: 68rpx;
		text-align: center;
		font-size: 22rpx;
		color:rgba(255, 255, 255, 0.5) ;
		background-color: #29253C;
		border-radius: 30rpx ;
		vertical-align: middle;
		margin-left: 22rpx;
		margin-top: 20rpx;
	}
	.searchimg{
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
		margin-right: 30rpx;
		
	}
	.content{
		margin-top: 20rpx;
	
		
	}
	.swiper-scroll {
		height: 100%;
	
	}
	.viewat{
		display: flex;
		height: 132rpx;
		
		
	}
	.picture{
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
		margin: auto  20rpx auto 20rpx;
	}
	.pictureimg{
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
	}
	.synopsis{
		margin: auto 0;
		width: 550rpx;
	
	}
	.name{
		color: white;
		font-size: 28rpx;
		overflow: hidden;		
		text-overflow: ellipsis;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1; 
	}
	.brief{
		margin-top: 10rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}
	.block{
		color: white;
		margin: auto  0;
	}
</style>
