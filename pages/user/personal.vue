<template>
	<view>
		<view class="informa">
			<view class="headportrait">
				<image :src="personal.avatarUrl" mode="aspectFill" class="headportraitimg"></image>
				
			</view>
			<view class="spread">
				<view class="spreadline" @tap="follow">
					<view class="spreadtop">
						{{personal.concern}}
					</view>
					<view class="spreadbottom">
						关注
					</view>
				</view>
				<view class="spreadline">
					<view class="spreadtop">
						{{personal.vermicelli}}
					</view>
					<view class="spreadbottom">
						粉丝
					</view>
				</view>
				<view class="spreadline">
					<view class="spreadtop">
						{{personal.like}}
					</view>
					<view class="spreadbottom">
						受到喜欢
					</view>
				</view>
			</view>
		</view>
		<view class="name">
			{{personal.nickName}} {{' '}}
			<image src="@/static/user/xiugai.png" class="modify" @tap="edit"></image>
		</view>
		<view class="id">
			ID：{{personal.userId}}
		</view>
		<view class="id">
			{{personal.signature}}
		</view>
		<view class="autograph">
			<view class="sex">
				<image src="@/static/user/nan.png" v-if="personal.sex===1" class="seximg"></image>
				<image src="@/static/user/nv.png" v-else class="seximg"></image>
				{{personal.sex==0?"女":"男"}}
			</view>
			<view class="sex" v-for="item  in personal.label">
				{{item}}
			</view>
			
			
			<view class="sex" >
				{{personal.constellation}}
				
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
		personal:{}	
		},
		methods: {
			follow() {
				uni.navigateTo({
					url: '/pages/user/follow/follow'
				})
			},
			edit(){
				uni.navigateTo({
					url:'/pages/user/edit/edit'
				})
			}
		}
	}
</script>

<style>
	.informa {
		/* border: 1px solid red; */
		display: flex;
		margin-top: 20rpx;
	}

	.headportrait {
		margin-left: 20rpx;
		width: 168rpx;
		height: 168rpx;
		border-radius: 84rpx;
		
	}

	.headportraitimg {
		width: 100%;
		height: 100%;
		border-radius: 84rpx;
		border: 4rpx solid white;
		
	}

	.spread {
		display: flex;
		margin-top: 46rpx;

	}

	.spreadline {

		width: 180rpx;
		text-align: center;
	}

	.spreadtop {
		font-size: 40rpx;
		font-weight: 500;
	}

	.spreadbottom {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		margin-top: 6rpx;
	}

	.name {
		margin-left: 20rpx;
		vertical-align: middle;
		font-size: 32rpx;
		margin-top: 22rpx;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.modify {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;

	}

	.id {
		margin-left: 20rpx;
		margin-top: 22rpx;
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: rgba(255, 255, 255, 0.5);
	}

	.autograph {
		display: flex;
		margin-top: 28rpx;
	}

	/* .sexs {
		
		font-size: 24rpx;
		margin-left: 40rpx;
		margin-top: 10rpx;
	} */

	.sex {
		display: flex;
		font-size: 24rpx;
		margin-left: 40rpx;
		padding: 10rpx 30rpx;
		border-radius: 26rpx;
		background-color: #1A1824;
		height: 30rpx;

	}

	.seximg {
		width: 30rpx;
		height: 30rpx;
		/* margin-top: 10rpx; */
		display: block;
		margin-right: 10rpx;
	}
</style>
