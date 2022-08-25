<template>
	<view>
		<view class="weight">
			动态
		</view>
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
	
	
</template>

<script>
		import picturearray from "@/components/picturearray.vue"
		export default {
					name:"release",
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
						show: false,
						
					}
				},
				components: {
					
					picturearray
		
				},
				onLoad() {
					
				},
				methods: {
					click() {
						const isShow = this.show ? false : true;
						this.show = isShow;
					},
				}
			}
		
</script>

<style>
	.weight{
		font-size: 32rpx;
		color: white;
		margin-left: 28rpx;		
		width: 65rpx;
		border-bottom: 6rpx  solid #B043FA ;
		padding-bottom: 10rpx;
	}
	

	.list {
		margin-top: 20rpx;
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
		width: 40rpx;
		height: 40rpx;
		margin-top: 8rpx;
	}

	.copywritingimg {
		width: 30rpx;
		height: 30rpx;
	}

	.assembly {
	
		margin-top: 18rpx;
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
