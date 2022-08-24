<template>
	<!-- 动态详情 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title" ></navigation>

		<view >
			<scroll-view scroll-y="true" class="scrollview">
				<view class="" :style="{height:swiperheight+'rpx'}">
					<dynamic :imgUrl="imgUrl" :exhibit="exhibit"></dynamic>
					<view class="comment">

						<view class="commentlist">
							<view class="commentleft">
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="commentimg"></image>
							</view>

							<view class="commentright">
								<view class="commentname">
									胡乎乎
								</view>
								<view class="commenttext">
									真漂亮！真漂亮！真漂亮！
								</view>
								<view class="commenttime">
									昨天20：50
								</view>
							</view>
						</view>
						
						
						
						<view class="commentlists">
							<view class="commentlefts">
								<image src="@/static/home/b.pic.jpg" mode="aspectFill" class="commentimgs"></image>
							</view>
						
							<view class="commentright">
								<view class="commentname">
									胡乎乎
								</view>
								<view class="commenttext">
									真漂亮！真漂亮！真漂亮！
								</view>
								<view class="commenttime">
									昨天20：50
								</view>
							</view>
						</view>
						

					</view>
				</view>


			</scroll-view>
		</view>

		<view class="release">


			<textarea v-model="detail.value" placeholder="来都来了 不评论点什么吗" placeholder-class="releaseplaceholder"
				maxlength="300" class="releaseinput"></textarea>
			<view class="releasetext">
				确认
			</view>

		</view>

	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import dynamic from "@/components/dynamic.vue"
	export default {
		data() {
			return {
				title: "动态详情",
				imgUrl: [{
						img: require("@/static/home/a.pic.jpg")
					},
					{
						img: require("@/static/home/a.pic.jpg")
					},
					{
						img: require("@/static/home/a.pic.jpg")
					}, {
						img: require("@/static/home/a.pic.jpg")
					},
				],
				exhibit: false,
				detail: {
					value: '',

				}

			}
		},
		components: {
			navigation,
			dynamic
		},
		onLoad() {
			var _this = this
			uni.getSystemInfo({
				success(res) {
					console.log("屏幕高度 HH = " + res.windowHeight)
					console.log("屏幕高度 HH222 = " + res.windowHeight * 2)
					_this.swiperheight = res.windowHeight * 2 - 270
				}
			})
		},

		methods: {

		}
	}
</script>

<style>
	/* #navigation {
		position: fixed;
		left: 0;

	} */
	

	.comment {
		margin-top: 20rpx;
		/* border: 1px solid red; */
	}

	.commentlist {
		display: flex;

	}

	.commentleft {
		/* border: 1px solid red; */
		width: 72rpx;
		height: 72rpx;
		border-radius: 40rpx;
		margin-left: 26rpx;

	}

	.commentimg {
		width: 72rpx;
		height: 72rpx;
		border-radius: 40rpx;
	}

	.commentright {
		/* border: 1px solid red; */
		margin-left: 20rpx;
		font-size: 24rpx;
	}

	.commentname {
		color: rgba(255, 255, 255, 0.8);
	}

	.commenttext {
		color: white;
		margin-top: 6rpx;
	}

	.commenttime {
		margin-top: 6rpx;
		color: rgba(255, 255, 255, 0.5);
	}


	.commentlists {
		display: flex;
		margin-left: 100rpx;

	}

	.commentlefts {
		/* border: 1px solid red; */
		width: 42rpx;
		height: 42rpx;
		border-radius: 30rpx;
		margin-left: 26rpx;

	}

	.commentimgs {
		width: 42rpx;
		height: 42rpx;
		border-radius: 40rpx;
	}

	



	.release {
		width: 100%;
		height: 140rpx;

		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		/* border: 1px solid white; */
	}

	.releaseinput {
		margin-top: 35rpx;
		width: 512rpx;
		height: 34rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		font-size: 24rpx;
		margin-left: 20rpx;
		padding-left: 20rpx;
		color: white;
		padding-top: 20rpx;
		padding-bottom: 20rpx;

	}

	.releaseplaceholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.2);
	}

	.releasetext {
		margin-left: 10rpx;
		margin-top: 35rpx;
		width: 168rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		background-color: #FFEE8C;
		border-radius: 20rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #A28F21;
	}
</style>
