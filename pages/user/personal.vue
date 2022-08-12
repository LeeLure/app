<template>
	<view>
		<view class="informa">
			<view class="headportrait">
				<image src="../../static/home/a.pic.jpg" mode="aspectFill" class="headportraitimg"></image>
			</view>
			<view class="spread">
				<view class="spreadline">
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
		<view class="">
			胡SIRSIR777
			<image src="" mode=""></image>
		</view>
		<view class="">
			ID：546546
		</view>
		<view class="">
			怀揣梦想，心系远方~
		</view>
		<view class="">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.informa{
	/* border: 1px solid red; */
	display: flex;
	margin-top: 20rpx;
}
.headportrait{
	margin-left: 20rpx;
	width: 168rpx;
	height: 168rpx;
	border-radius: 84rpx;
}
.headportraitimg{
	width: 168rpx;
	height: 168rpx;
	border-radius: 84rpx;
}
.spread{
	display: flex;
	margin-top: 46rpx;
	
}
.spreadline{
	
	width: 180rpx;
	text-align: center;
}
.spreadtop{
	font-size: 40rpx;
}
.spreadbottom{
	color: rgba(255, 255, 255, 0.5);
font-size: 28rpx;
margin-top: 6rpx;
}

</style>
