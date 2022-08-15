<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="empty">
			<image src="@/static/user/shoucangkong.png" class="emptyimg"></image>
			<view class="emptytitle">
				你还没有收藏任何店铺，去 <text class="emptytext" @tap="home">首页</text>看看吧~
			</view>
		</view>
		
		<view class="">
			
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "我的收藏",
			}
		},
		components: {
			navigation
		},
		methods: {
			home(){
				uni.switchTab({
					url:'/pages/home/home'
				})
			}
		}
	}
</script>

<style>
.empty{
	
}
.emptyimg{
	width: 200rpx;
	display: block;
	margin-left: 280rpx;
	margin-top: 320rpx;
	height: 200rpx;
}
.emptytitle{
	margin-top: 44rpx;
	text-align: center;
	color: white;
font-size: 32rpx;
}
.emptytext{
	color: #D53EDA ;
}
</style>
