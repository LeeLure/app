<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="list" >
			<view class="line" v-for="(item,index)  in info" :key="index" @tap="feedback(item.text,index)">
				{{item.text}}
			</view>
						
		</view>
			
		
		
		<view class="retroaction" @tap="retroaction">
			<image src="@/static/user/yijian.png" class="retroactionimg"></image>
			<text  class="retroactiontext">意见反馈</text>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "反馈与帮助",
				info:[
					{text:"1.如何成为有趣的人？"},
					{text:"2.购买的券到哪里去了？"},
					
					{text:"3.购买的券到哪里去了？"},
					
				],
				text:'',
				index:''
			}
		},
		components: {
			navigation
		},
		methods: {
			feedback(e,index){
				console.log(e,index);
				let  query={
					text:e,
					index:index
				}
				uni.navigateTo({
					url:'/pages/settings/help/feedback/feedback?query='+JSON.stringify(query)
				})

			},
			retroaction(){
				uni.navigateTo({
					url:'/pages/settings/help/feedback/retroaction/retroaction'
				})
			}
			
		}
	}
</script>

<style>
.list{ 
	border-radius: 30rpx;
	background-color: #29253C;
	margin-top: 20rpx;
}
.line{
	height: 120rpx;
	line-height: 120rpx;
	color: white;
	font-size: 28rpx;
	margin-left: 30rpx;
}
.retroaction{
	width: 100%;
	height: 160rpx;
	line-height: 160rpx;
	text-align: center;
	background-color: #29253C;
	position: absolute;
	bottom: 0;
	left: 0;
}
.retroactionimg{
	width: 40rpx;
	height: 40rpx;
	vertical-align: middle;
}
.retroactiontext{
	color: white;
	font-size: 28rpx;
	vertical-align: middle;
	margin-left: 20rpx;
}
</style>
