<template>
	<!-- 选择圈子 -->
	<view>
		<view class="bar">
		</view>
		<navigation :title="title">
			<view class="release">
				确定
			</view>
		</navigation>
		<view class="head">
			<image src="@/static/home/sousuo.png" class="headimg"></image>
		
		<input type="text" maxlength="15" placeholder="请输入您想要查找的圈子" placeholder-class="placeholder"  v-model="name" class="input"  >
		
		<view class="releasetext" @tap="publish">
						确认
					</view>
		</view>
		
		<view class="list">
			<view class="selected">
				已加入的圈子
			</view>
			<view class="circlelist" v-for="(item,index) in texts"  :key="index">
				<view class="picture">
					<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="pictureimg"></image>
				</view>
				<view class="heading">
					<view class="headingtitle">
						<view class="headingleft">
							搞笑娱乐
						</view>
						<view @tap="collect(index)">
							
						
						<view class="headingright"  v-if="number===index">
							<image src="@/static/release/duigou.png" class="headingrightimg"></image>
						</view>
						<view class="headingright1" v-else>
						
						</view>
						</view>
					</view>
					<view class="headingtext">
						{{item.text}}位圈友
					</view>
					<view class="headingtext">
						入圈发自拍！！发布自拍进行自我介绍或交进行自我介我介绍...
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import { CircleTopicSelectCirclename } from "@/config/home.js"
	export default {
		data() {
			return {
				title: "选择圈子",
				texts:[
					{text:"11"},
					{text:"11"},
					{text:"11"},
				],
				name:'',
				number:-1
			}
		},
		methods: {
			collect(index) {
				this.number=index
			
			},
			publish(){
				CircleTopicSelectCirclename({name:this.name}).then(res=>{
					console.log(res);
									})
			}
		}
	}
</script>

<style>
.release {
		width: 126rpx;
		height: 58rpx;
		text-align: center;
		line-height: 58rpx;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		font-size: 24rpx;
		margin-top: 30rpx;
		margin-right: 22rpx;

	}
	.head{
		padding-left: 20rpx;
		width: 710rpx;		
		position: relative;
		display: flex;
	}
	.headimg{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		top: 20rpx;
		left: 30rpx;
	}
	.placeholder{
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}
	.input{
		font-size: 28rpx;
		color: white;
		background-color:#29253C ;
		padding-left: 50rpx;
		height: 68rpx;
		width: 550rpx;
		border-radius: 20rpx;
	}
	.releasetext {
		margin-left: 10rpx;
		
		width: 100rpx;
		height: 68rpx;
		line-height: 68rpx;
		text-align: center;
		background-color: #FFEE8C;
		border-radius: 20rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #A28F21;
	}
	.list{
		width: 700rpx;
		margin-top: 50rpx;
		margin-left: 20rpx;
	}
	.selected{
		font-size: 28rpx;
		color: white;
	}
	.circlelist{
	
		display: flex;
		height: 174rpx;
		
		
	}
	.picture{
		margin: auto  0;
		
		width: 116rpx;
		height: 114rpx;
		border-radius: 20rpx;
		
	}
	.pictureimg{
		width: 116rpx;
		height: 114rpx;
		border-radius: 20rpx;
	}
	.heading{
		
		margin-left: 24rpx;
		margin: auto  24rpx auto 24rpx;
	}
	.headingtitle{
		display: flex;
		justify-content: space-between;
	}
	.headingleft{
		color: white;
		font-size: 28rpx;
	}
	.headingright{
		width: 36rpx;
		height: 36rpx;
		border-radius: 30rpx;
		background-color:#D53EDA ;
	}
	.headingright1{
		width: 36rpx;
		height: 36rpx;
		border-radius: 30rpx;
		background-color:rgba(255, 255, 255, 0.2) ;
	}
	.headingrightimg{
		width: 20rpx;
		height: 20rpx;
		margin: 8rpx;
	}
	.headingtext{
		font-size: 22rpx;
		color: rgba(255, 255, 255, 0.8);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	
</style>
