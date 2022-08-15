<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		
		<view class="choice">
			<view class="choices">
				<image src="@/static/user/weixiao.png" class="choiceimg"></image>
				{{close}}有趣的人
			</view>
			<view class="open">
				<u-switch v-model="value1" asyncChange @change="asyncChange" size="16" space="2"
					activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
			</view>
		</view>
		<view class="text">
			开启后，你的主页将在首页有趣的人中显示
		</view>
		<view class="text">
			开启后，将会有更多的人发现你
		</view>
		<view class="text">
			你可以随时在我的有趣的人中关闭授权
		</view>
		
		<patterns :picture="picture"></patterns>
		
		<view class="determine">
			确定
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import patterns from "@/components/pattern.vue"
	export default {
		data() {
			return {
				title: "有趣的人",
				picture:{
					img1:"@/static/user/weixiao.png",
					img2:"@/static/user/weixiao.png",
					img3:"@/static/user/weixiao.png",
					text:"珍有趣"
					
				},
				
				close:"开启",
				value1: false,
			}
		},
		components: {
			navigation,
			patterns
		},
		methods: {
			asyncChange(e) {
				console.log(e);
				if(e==true){
					this.close="关闭"
					this.value1 = e
				}else{					
					uni.showModal({
						content: e ? '确定要打开吗' : '确定要关闭吗',
						success: (res) => {
							if (res.confirm) {
								this.value1 = e
					this.close="开启"
							}
						}
					})
					
				
				}
				
				
			},
		}
	}
</script>

<style>
.choice{
	display: flex;
	
	width: 710rpx;
	height: 94rpx;
	line-height: 94rpx;
	border-radius: 30rpx;
	background-color: #29253C ;
	margin-left: 20rpx;
	
}
.choices{
	color: white;
font-size: 28rpx;
vertical-align: middle;
}
.choiceimg{
	vertical-align: middle;
	width: 32rpx;
	height: 32rpx;
	margin-right: 20rpx;
	margin-left: 32rpx;
}
.open{
	margin-top: 28rpx;
	margin-left: 360rpx;
}
.text {
		margin-top: 28rpx;
		margin-left: 52rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: 24rpx;
	}
	.determine{
		background-color: #D53EDA ;
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		border-radius: 54rpx ;
		color: white;
		margin-left: 174rpx;
		margin-top: 54rpx;
		
font-size: 32rpx;
	}
</style>
