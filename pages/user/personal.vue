<template>
	<view>
		<view class="informa">
			<view class="headportrait">
				<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="headportraitimg"></image>
			</view>
			<view class="spread">
				<view class="spreadline" @tap="follow">
					<view class="spreadtop">
						36
					</view>
					<view class="spreadbottom">
						关注
					</view>
				</view>
				<view class="spreadline">
					<view class="spreadtop">
						36
					</view>
					<view class="spreadbottom">
						粉丝
					</view>
				</view>
				<view class="spreadline">
					<view class="spreadtop">
						36
					</view>
					<view class="spreadbottom">
						受到喜欢
					</view>
				</view>
			</view>
		</view>
		<view class="name">
			胡SIRSIR777 {{' '}}
			<image src="@/static/user/xiugai.png" class="modify" @tap="edit"></image>
		</view>
		<view class="id">
			ID：546546
		</view>
		<view class="id">
			怀揣梦想，心系远方~
		</view>
		<view class="autograph">
			<view class="sex">
				<image src="@/static/user/nan.png" v-if="sex==='男'" class="seximg"></image>
				<image src="@/static/user/nv.png" v-else class="seximg"></image>
				{{sex}}
			</view>
			<view class="sex">
				绘画
			</view>

			<view class="sex">
				绘画
			</view>
			<view class="sex">
				天蝎座
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: "男"
			}
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
		border: 4rpx solid white;
	}

	.headportraitimg {
		width: 168rpx;
		height: 168rpx;
		border-radius: 84rpx;
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
