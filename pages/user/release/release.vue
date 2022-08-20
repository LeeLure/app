<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"></navigation>
		<view v-if="(titles.length>0)?true:false">
			<view class="list">
				<view class="month">
					28 <text class="monthtext">3月</text>
				</view>
				<view >


					<view class="copywriting">
						<view class="copywritingtext">
							
								海浪肯随山俯仰，风帆长共客飘摇
								海浪肯随山俯仰，风帆长共客飘摇
								海浪肯随山俯仰，风帆长共客飘摇
								海浪肯随山俯仰，风帆长共客飘摇

							
							<template>
								<text class="labeltext">
									#治愈系风景
								</text>

							</template>
						</view>
						<view class="copywritingright">
							<image src="@/static/user/simi.png" class="copywritingimg"></image>
						</view>
					</view>
					<view class="assembly">
						<picturearray :imgUrl="imgUrl" ></picturearray>
					</view>
					<view class="private">
						<image src="@/static/user/private.png" class="privateimg"></image>
						<view class="privatetext">
							私密动态
						</view>
					</view>
					<view class="label">




						<view class="praiseright">
							<view class="praise" @tap="click">
								<image src="@/static/home/dianzan.png" class="fabulous" v-if="!show"></image>
								<image src="@/static/home/dianjishow.png" class="fabulous" v-if="show"></image>
								<text class="praisetext">999</text>
							</view>
							<view class="praise">
								<image src="@/static/home/pinglun.png" class="fabulous"></image>
								<text class="praisetext">999</text>
							</view>
						</view>



					</view>
				</view>
			</view>






		</view>


		<view v-if="(titles.length==0)?true:false">
			<image src="@/static/user/fabukong.png" class="emptyimg"></image>
			<view class="emptytitle">
				还未发布任何动态，去 <text class="emptytext" @tap="home">发布动态</text>吧~
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import picturearray from "@/components/picturearray.vue"
	export default {
		data() {
			return {
				title: "我发布的",
				show: false,
				titles: [
					{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					}
				],
				imgUrl: [{
						img: require("@/static/home/a.pic.jpg")
					},
					{
						img: require("@/static/home/b.pic.jpg")
					},
					{
						img: require("@/static/home/c.pic.jpg")
					},
					{
						img: require("@/static/home/a.pic.jpg")
					},

				],
				
			}
		},
		components: {
			navigation,
			picturearray

		},
		onLoad() {
			// this.imgUrl.forEach((item,index)=>{
			// 	if(index==3){
			// 		console.log("11");
			// 		this.margins=0
			// 	}
			// })
		},
		methods: {
			home() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			click() {
				const isShow = this.show ? false : true;
				this.show = isShow;
			},
		}
	}
</script>

<style>
	.emptyimg {
		width: 200rpx;
		display: block;
		margin-left: 280rpx;
		margin-top: 320rpx;
		height: 200rpx;
	}

	.emptytitle {
		margin-top: 44rpx;
		text-align: center;
		color: white;
		font-size: 32rpx;
	}

	.emptytext {
		color: #D53EDA;
	}

	.list {
		
		width: 720rpx;
		margin-left: 28rpx;

	}

	.month {
	
		font-size: 36rpx;
		font-weight: 500;
		color: white;
		margin-bottom: 30rpx;
	}

	.monthtext {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 10rpx;
	}

	.copywriting {

		display: flex;
		justify-content: space-between;
	}

	

	.copywritingtext {
		font-size: 32rpx;
		color: white;
	}

	.copywritingright {
		width: 30rpx;
		height: 30rpx;
	}

	.copywritingimg {
		width: 30rpx;
		height: 30rpx;
	}

	.assembly {
	
		margin-top: 18rpx;
	}

	.private {
		
		display: flex;
		margin-top: 16rpx;
	}

	.privateimg {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.privatetext {
		margin-left: 10rpx;
		vertical-align: middle;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.label {
		margin-top: 16rpx;
		display: flex;
		justify-content: flex-end;
		
	}

	.labeltext {
		height: 52rpx;
		line-height: 52rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		text-align: center;
		font-size: 28rpx;
		color: white;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 26rpx;
		margin-top: 20rpx;
		display: inline-block;

	}

	.praiseright {
		width: 300rpx;
		align-self: flex-end;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
	
	}

	.praise {
	
		text-align: center;
	}

	.fabulous {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.praisetext {
		font-size: 22rpx;
		color: white;
		vertical-align: middle;
		margin-left: 5rpx;
	}
</style>
