<template>
	<view>
		<view class="bar">
		</view>

<view class="number">
	1/2
</view>

		<view class="news">
			请设置你的信息
		</view>
		<view class="choice">
			性别选择后无法更改
		</view>
		<view class="photo">

		</view>

		<view class="name">
			昵称
		</view>
		<input type="text" class="nickname" maxlength="9">
		<view class="name">
			生日
		</view>
		<input type="text" class="nickname">
		<view class="name">
			性别
		</view>
		<view class="sex1">

			<view class="flex1 boy" :class="sexIndex==0?'active':''" data-index="0" @click="checkSex">
				<view class="sex txt">男</view>
			</view>
			<view class="flex1 girls" :class="sexIndex==1?'active':''" data-index="1" @click="checkSex">
				<view class="sex txt">女</view>
			</view>

		</view>
		
		<view class="nextstep" @tap="label">
			下一步
		</view>
	</view>
</template>

<script>
	import { enrollEssential } from "@/config/api.js"
	export default {
		data() {
			return {
				sexIndex: 0,
				
			}
		},
		methods: {
			
			
			
			// 选择性别
			checkSex(e) {
				this.sexIndex = e.currentTarget.dataset.index;
			},
			
			
			label(){
				let query={
					avatarUrl: "11",
					  birthday: "2022-08-17T09:03:47.493Z",
					  created: "2022-08-17T09:03:47.493Z",
					  interest: "string",
					  nickName: "string",
					  phone: "string",
					  sex: 0,
					  updated: "2022-08-17T09:03:47.493Z",
					  userId: 0
				}
				enrollEssential(
					query
				).then(() => {
					
				}).catch(() =>{
					
				})
				
				
				
				
				// uni.navigateTo({
				// 	url:"/pages/label/label"
				// })
			}
		}

	}
</script>

<style>
	page {
		background: linear-gradient(180deg, #1E1A32 0%, #0E0C17 100%);
		margin: 0;
		padding: 0;

	}
	.number{
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 40rpx;
		display: flex;
		float: right;
		margin-right: 30rpx;
	}

	.news {
		color: white;
		font-size: 44rpx;
		text-align: center;
		margin-top: 200rpx;
	}

	.choice {
		margin-top: 32rpx;
		color: #f5f7f99c;
		font-size: 28rpx;
		text-align: center;
	}

	.photo {
		width: 240rpx;
		height: 240rpx;
		border-radius: 140rpx;
		border: 1px solid red;
		margin-top: 60rpx;
		margin-left: 256rpx;
	}

	.name {
		font-size: 36rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}

	.nickname {
		
		background-color: white;
		width: 630rpx;
		height: 108rpx;
		border-radius: 48rpx;
		margin-left: 40rpx;
		margin-top: 22rpx;
		padding-left: 40rpx;
	}

	.sex1 {
	
		color: white;
		display: flex;
		justify-content: center;
		margin-top: 22rpx;
	}

	.flex1 {

		text-align: center;
		font-size: 28rpx;
	
		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		border-radius: 48rpx;
		margin-left: 34rpx;
	}


	.flex1.boy .sex {
		color: rgba(0, 0, 0, 0.548);
		font-size: 32rpx;
		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		border-radius: 48rpx;
		background-color: white;
	}

	.flex1.boy.active .sex {
		background-color: #B043FA;
	}

	.flex1.girls .sex {
		color: rgba(0, 0, 0, 0.548);
		text-align: center;
		font-size: 32rpx;
		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		border-radius: 48rpx;
		background-color: white;
	}

	.flex1.girls.active .sex {
		background-color: #B043FA;
	}

	.flex1.active .txt {
		font-size: 28rpx;
		color: white;
	}
	.nextstep{
		width: 486rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		background: #FFFFFF;
		border-radius:48rpx;
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #B043FA;
		margin-top: 72rpx;
		margin-left: 132rpx;
		
	}
</style>
