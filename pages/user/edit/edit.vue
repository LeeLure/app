<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"></navigation>
		<view class="headportrait">
			<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="headportraitimg"></image>
			更换头像
			
		</view>
		<view v-for="(item,index) in  prices" :key="index">		
		
		<view class="name">
			<view class="nickname">
				{{item.text}}
			</view>
			<view class="modifyname">
			<input type="text"  v-model="value" maxlength="10"  class="modifyinput" v-if="index==0?true:false">
			<view class="modifyinput" v-else>
				546546g
			</view>
			<image src="@/static/settings/jinnru.png" class="getintoimg"></image>		
			</view>			
		</view>
		
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "编辑个人资料",
				value:"胡编辑个ß",
				prices: [{
						text: "昵称"
					},
					{
						text: "ID"
					}, {
						text: "性别"
					}, {
						text: "标签"
					}, {
						text: "星座"
					}, 
				
				],
				
				
			}
		},
		components: {
			navigation,
			
		},
		methods: {
			a(){
				console.log("as",this.text);
			}
		}
	}
</script>

<style>
.a{
	color: white;
}
.headportrait{
	width: 168rpx;
	font-size: 28rpx;
	color: rgba(255, 255, 255, 0.6);
	margin: 40rpx auto;
	text-align: center;
	
}
.headportraitimg{
	width: 168rpx;
	height: 168rpx;
	border-radius: 100rpx;
	margin: 10rpx auto;
	
}
.name{
	margin-top: 60rpx;
	width: 704rpx;
	margin-left: 22rpx;
	display: flex;
	justify-content: space-between;
}
.nickname{
	font-size: 28rpx;
	color: rgba(255, 255, 255, 0.8);
}
.modifyname{
	display: flex;
	
	font-size: 28rpx;
	color: rgba(255, 255, 255, 0.5);
}
.modifyinput{
	
	font-size: 28rpx;
	text-align: right;
	color: rgba(255, 255, 255, 0.5);
}

.getintoimg{
	width: 20rpx;
	height: 20rpx;
	margin-top: 10rpx;
	margin-left: 20rpx;
}
</style>
