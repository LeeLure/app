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
			<input type="text"  v-model="value" maxlength="10"  class="modifyinput" v-if="index==0?true:false" @input="modifyname">
			<view class="modifyinput" v-else>
				546546g
			</view>
			<image src="@/static/settings/jinnru.png" class="getintoimg"></image>		
			</view>			
		</view>			
		</view>
		
		<view class="entering" >
			<view class="number">
				个性签名:
			</view>
			<textarea v-model="detail.value" placeholder="" placeholder-class="placeholder" maxlength="50"
				class="textarea" @input="texts"></textarea>
			
		</view>
		
		<view class="complete" v-if="show">
			完成
		</view>
		<view class="completes"  v-else @tap="complete">
			完成
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
				detail: {
					value: '',
				
				},
				show:true
				
				
			}
		},
		computed: {
			
		},
		components: {
			navigation,
			
		},
		methods: {
			
			texts() {
				
				if (this.detail.value.length == 50||this.detail.value.length >50) {
					console.log(1);
					uni.showToast({
						title: '最多输入50字',
						duration: 1500,
						icon: 'none'
					});
					
				}
				this.show=false
				return this.detail.value.length
				
			},
			modifyname(){
				this.show=false
			},
			complete(){
				console.log("完成");
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

.entering {
	position: relative;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.8);
		/* border: 1px solid red; */
		margin-top: 100rpx;
	}

	.textarea {
		text-indent: 130rpx;
		
	   text-align: left;
		font-size: 28rpx;
		width: 680rpx;
		height: 120rpx;
		
		border-radius: 20rpx;
		margin-left: 20rpx;
		padding-top: 10rpx;
		
		padding-right: 18rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.placeholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);

	}
.number {
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.8);
		position: absolute;
		left: 20rpx;
		top: 10rpx;

	}
	.complete{
		margin-top: 100rpx;
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		background-color:#99999938;
		border-radius: 54rpx;
		margin-left: 162rpx;
		text-align: center;
		color: rgba(255, 255, 255, 0.2);
		font-size: 32rpx;
		font-weight: 500;
	}
	.completes{
		margin-top: 100rpx;
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background-color: #D53EDA;
		border-radius: 54rpx;
		margin-left: 162rpx;
		color: white;
		font-size: 32rpx;
		font-weight: 500;
	}
</style>
