<template>
	<view class="box">
		<view class="cut">
			<view class="tab">
				        <switchs :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></switchs>

			</view>
			<view class="cutnumber">
				1657条动态
			</view>
		</view>

		<view class="content">
			<!-- 页面-->
			        <swiper class="swiper-content" :style="{height:swiperheight+'rpx'}" :current="tabIndex"
				@change="swiperChange">
				          
				 <swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll">
						<!-- <dynamic :exhibit="exhibit" :list="list"></dynamic> -->
					</scroll-view>            
				</swiper-item>


				 <swiper-item class="itemswiper">
					<scroll-view scroll-y="true" class="swiper-scroll">
<view class="">
	qq
</view>
<view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view>
<view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view><view class="">
	qq
</view>
					</scroll-view>            
				</swiper-item>

				    
			</swiper>
			    
		</view>


	</view>
</template>

<script>
	import switchs from "@/components/switchs.vue"
	import dynamic from "@/components/dynamic.vue"
	export default {
		data() {
			return {
				list: [],
				exhibit: true,

				tabIndex: 0, // 选中的
				tabBars: [{
						name: "综合",
						id: "1"
					},
					{
						name: "最新",
						id: "2"
					},


				],
			}
		},

		props: {
			swiperheight: 0
		},
		components: {

			switchs
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
	.box {
		background-color: #1E1A32;
		width: 748rpx;
		border-radius: 20rpx 20rpx 0 0;
		color: white;
		border: 1rpx solid rgba(255, 255, 255, 0);
		

	}

	.cut {

		border: 1rpx solid rgba(255, 255, 255, 0);
		display: flex;
		justify-content: space-between;
	}

	.cutnumber {
		padding-right: 20rpx;
		margin: auto 0;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.tab {
		border-radius: 20rpx 20rpx 0 0;
		width: 250rpx !important;
		margin: auto 0;
		font-weight: 500;
		color: #FFFFFF;
		
		margin-top: 20rpx;
	}

	.content {
		margin-top: 20rpx;
		
	}
	.swiper-scroll {
		height: 100%;

	}
	.itemswiper {
		/* border: 1rpx solid red; */
	}
</style>
