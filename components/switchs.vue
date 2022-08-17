<template>
	    <view class="uni-tab-bar">
		        <view class="uni-swiper-tab" >
			<view class="uni-swiper-tabs">
				
			            <block v-for="(tab,index) in tabBars" :style="scrollStyle">
				                <view class="swiper-tab-list" :class="{'active' : tabIndex==index}" @tap="tabtap(index)"
					                    :style="scrollItemStyle">
					                    {{tab.name}} {{tab.num?tab.num:""}}
					                    <view class="swiper-tab-line"></view>
					                </view>
				            </block>
			</view>
			        </view>
		    </view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollStyle: {
				type: String,
				default: ""
			},
			scrollItemStyle: {
				type: String,
				default: ""
			}
		},
		methods: {
			//点击切换导航
			tabtap(index) {
				// this.tabIndex = index;
				this.$emit('tabtap', index)
			}
		}
	}
</script>　

<style>
	scroll-view::-webkit-scrollbar {
		display: none;
	}

	.uni-swiper-tab {
		/* border: 1px solid red; */
		width: 100%;
		height: 68rpx;
		/* 设置scroll-view容器内元素不换行，这样才能实现横向滑动 */
		/* white-space: nowrap; */
	}
.uni-swiper-tabs{
	width: 500rpx;
	/* border: 1px solid red; */
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	}
	.swiper-tab-list {
		/* border: 1px solid red; */
		display: inline-block;
		color: rgba(255, 255, 255, 0.5);
		
       font-size: 28rpx;
		
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 10rpx;
	}

	.uni-tab-bar .active {
		color:white;
		font-size: 32rpx;
		font-weight: 500;
	}

	.active .swiper-tab-line {
		/* border-bottom: 6rpx solid #FFEE8C; */
		background-color: #FFEE8C;
		width: 70rpx;
		height: 6rpx;
		border-radius: 30rpx;
		margin:  10rpx auto 0 auto ;
		
		
	}
</style>
