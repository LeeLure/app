
<template>


		<view class="box" >
			<view>			
			<view class="boxtop" >
				<view class="picture">
					
					<slot name="a"></slot>
				</view>
				<view class="photograph">
					<view class="photographtop">
					
						<slot name="b"></slot>
					</view>
					<view class="photographbottom">
					
						<slot name="c"></slot>
					</view>
				</view>
			</view>
			</view>
			<view class="boxbottom">

				<view class="details">
					<view class="detailstop">
						<text class="detailstext1">{{patterns.name}}</text>
						<text class="detailstext2">当前在线</text>
					</view>
					<view class="detailsbottom">
						<view class="detailstext3">14.9km</view>
						<view class="detailstext4"></view>
						<view class="detailstext3">绘画</view>
						<view class="detailstext4"></view>
						<view class="detailstext3">天蝎座</view>
					</view>
				</view>
				<view class="collect" >
					<slot name="d"></slot>

				</view>

			</view>

		</view>
		
</template>

<script>
	export default {
		name:"become",
		data() {
			return {
activeArr: [],
			index: 0,
			};
		},
		props: {
			patterns: {}

		},
		methods: {
			
		}
	}
</script>

<style>
	.a {
		color: white;
	}

	.box {

		height: 650rpx;
		width: 692rpx;
		border-radius: 30rpx;
		color: white;
		overflow: hidden;
		margin-left: 28rpx;
		margin-top: 28rpx;
	}

	.boxtop {
		display: flex;
		justify-content: space-between;
		height: 460rpx;
		width: 692rpx;
	}

	.picture {
		width: 462rpx;
		background-color: #99999934;
	}

	.photograph {
		width: 224rpx;
		/* margin-left: 8rpx; */
	}

	.photographtop {
		height: 226rpx;
		background-color: #99999934;
	}

	.photographbottom {
		background-color: #99999934;
		height: 226rpx;
		margin-top: 10rpx;
	}

	.boxbottom {
		/* border: 1px solid red; */
		height: 190rpx;
		width: 692rpx;
		background-color: #29253C;
		display: flex;
	}

	.details {
		margin-left: 20rpx;

		width: 328rpx;
	}

	.detailstop {
		margin-top: 40rpx;
	}

	.detailstop {
		margin-top: 40rpx;
	}

	.detailstext1 {
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #ffffff;
	}

	.detailstext2 {
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #E4E4E4;
		margin-left: 20rpx;
	}

	.detailsbottom {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		margin-top: 26rpx;
		display: flex;
	}

	.detailstext4 {
		margin-top: 10rpx;
		width: 8rpx;
		height: 8rpx;
		border-radius: 1rpx;
		background-color: rgba(255, 255, 255, 0.5);
		margin-left: 15rpx;
		margin-right: 15rpx;
	}

	.collect {
		width: 126rpx;
		height: 126rpx;
		background: linear-gradient(180deg, #b043fa 0%, #7222eb 100%);
		border-radius: 65rpx;
		margin-top: 30rpx;
		margin-left: 170rpx;
	}

	.collectimg {
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin-top: 35rpx;
		margin-left: 35rpx;

	}

	.aspectFillimg {
		width: 100%;
		height: 100%;
	}
	.likeimg{
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin-top: 33rpx;
		margin-left:33rpx;
	}
</style>
