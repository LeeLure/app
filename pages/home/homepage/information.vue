<template>
	<view class="list">

		<view class="likeness">
			<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="likenessimg"></image>
		</view>
		<view class="right">
			<view class="reputationtop">
				<view class="reputation">
					<view class="reputationname">
						苏妲己苏妲己苏妲己
					</view>
					<view class="reputationsex">
						<image src="@/static/user/nv.png" class="reputationimg"></image>
						女
					</view>
				</view>
				<view class="followlist">
					<view class="follow">
						<view class="follownumber">
							788
						</view>
						<view class="followtext">
							关注
						</view>
					</view>
					<view class="follow">
						<view class="follownumber">
							787667
						</view>
						<view class="followtext">
							关注
						</view>
					</view>
					<view class="follow">
						<view class="follownumber">
							799000
						</view>
						<view class="followtext">
							关注
						</view>
					</view>



				</view>
			</view>
			<view class="reputationbottom">
				真正内心的强大，才是真正的强大
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "information",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.list {
		margin-top: 48rpx;
		color: white;
		display: flex;
		
	}

	.likeness {
		margin-left: 20rpx;
		width: 168rpx;
		height: 168rpx;
		border-radius: 100rpx;
		overflow: hidden;
	}

	.likenessimg {
		width: 100%;
		height: 100%;
	}

	.right {
		
		margin-left: 22rpx;
	}

	.reputationtop {
		display: flex;
	}

	.reputation {
		
		width: 130rpx;


	}

	.reputationname {
		font-size: 32rpx;
		font-weight: 500;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		margin-bottom: 20rpx;

	}

	.reputationsex {
		vertical-align: middle;
		font-size: 24rpx;
		color: white;
		width: 64rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background: #1A1824;
		border-radius: 26rpx ;
		padding: 0 20rpx ;
		
		
	}

	.reputationimg {
		width: 22rpx;
		height: 22rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}

	.followlist {
		
		width: 380rpx;
		display: flex;
		justify-content: space-between;
	}

	.follow {
		
		text-align: center;
		
		
	}

	.follownumber {
		font-size: 36rpx;
		font-weight: 500;
		color: white;
		text-align: center;
	}

	.followtext {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	.reputationbottom {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		width: 510rpx;
		margin-top: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		
	}
</style>
