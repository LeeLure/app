<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="choice">
			<view class="choices">
				<image src="@/static/user/weixiao.png" class="choiceimg"></image>
				{{close}}有趣的人
			</view>
			<view class="open">
				<u-switch v-model="value1" asyncChange @change="asyncChange" size="16" space="2" activeColor="#D53EDA "
					inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
			</view>
		</view>
		<view class="text">
			开启后，你的主页将在首页有趣的人中显示
		</view>
		<view class="text">
			开启后，将会有更多的人发现你
		</view>
		<view class="text">
			你可以随时在我的有趣的人中关闭授权
		</view>

		<become :patterns="patterns">
			<template #a>
				<upload :limit="limit" @getFileUrl="getFileUrl1">
					<view class="plus">
						<image src="@/static/user/paizhao.png" class="plusimg1"></image>
					</view>
				</upload>
			</template>
			<template #b>
				<upload :limit="limit" @getFileUrl="getFileUrl2">
					<view class="plus">
						<image src="@/static/user/paizhao.png" class="plusimg"></image>
					</view>
				</upload>

			</template>
			<template #c>
				<upload :limit="limit" @getFileUrl="getFileUrl3">
					<view class="plus">
						<image src="@/static/user/paizhao.png" class="plusimg"></image>
					</view>
				</upload>
			</template>
			<template #d>
				<image src="@/static/user/xihuan.png" class="likeimg"></image>
			</template>
		</become>

		<view class="determine" @tap="determine">
			确定
			{{a,b}}
		</view>

<view class="a" @tap="bcd">
	nhjm
</view>

	</view>

</template>

<script>
	import navigation from "@/components/navigation.vue"
	import become from "@/components/become.vue"
	import upload from "@/components/upload.vue"
	import {
		infoInterestingPeople
	} from "@/config/user.js"

	export default {
		data() {
			return {
				title: "有趣的人",
				limit: 1,
				close: "开启",
				value1: false,

				patterns: [{
					name: "www",
				}],
				firstImage: "",
				secondImage: "",
				thirdImage: '',
				a:"",
				b:"",
			}
		},
		components: {
			navigation,
			become,
			upload


		},
		onLoad() {
			
		},
		methods: {
			asyncChange(e) {
				console.log(e);
				if (e == true) {
					this.close = "关闭"
					this.value1 = e
				} else {
					uni.showModal({
						content: e ? '确定要打开吗' : '确定要关闭吗',
						success: (res) => {
							if (res.confirm) {
								this.value1 = e
								this.close = "开启"
							}
						}
					})
				}
			},

			getFileUrl1(url) {
				this.firstImage = url
				console.log("琵琶", this.firstImage)
			},
			getFileUrl2(url) {
				this.secondImage = url
				console.log(this.secondImage, "美女吧")
			},
			getFileUrl3(url) {
				this.thirdImage = url
				console.log(this.thirdImage, "美好")

			},
			determine() {

				if (this.value1 == false) {
					uni.showToast({
						title: '请开启有趣的人',
						duration: 1500,
						icon: 'none'
					});
					return
				}
				if (this.firstImage == '' && this.secondImage == '' && this.thirdImage == '') {
					uni.showToast({
						title: '请上传图片1',
						duration: 1500,
						icon: 'none'
					});

					return
				}

				infoInterestingPeople({
					firstImage: this.firstImage,
					isOpen: this.value1,
					secondImage: this.secondImage,
					thirdImage: this.thirdImage
				}).then(res => {
					console.log(res);
				})
			},
			bcd(){
				console.log("098s");
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						this.a=res.longitude
						this.b=res.latitude
					}
				});
			}

		}
	}
</script>

<style>
	.choice {
		display: flex;
		width: 710rpx;
		height: 94rpx;
		line-height: 94rpx;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-left: 20rpx;

	}

	.choices {
		color: white;
		font-size: 28rpx;
		vertical-align: middle;
	}

	.choiceimg {
		vertical-align: middle;
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
		margin-left: 32rpx;
	}

	.open {
		margin-top: 28rpx;
		margin-left: 360rpx;
	}

	.text {
		margin-top: 28rpx;
		margin-left: 52rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: 24rpx;

	}

	.determine {
		background-color: #D53EDA;
		width: 428rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		border-radius: 54rpx;
		color: white;
		margin-left: 174rpx;
		margin-top: 54rpx;

		font-size: 32rpx;
	}

	.aspectFillimg {
		width: 100%;
		height: 100%;
	}

	.likeimg {
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin-top: 33rpx;
		margin-left: 33rpx;
	}

	.plus {
		color: #1E1A32;
		width: 100%;
		height: 100%;
		border: 1px solid red;

	}

	.plusimg {
		width: 60rpx;
		height: 60rpx;
		margin: 50%;
	}

	.plusimg1 {
		width: 60rpx;
		height: 60rpx;
		margin: 50%;

	}
	.a{
		color: white;
	}
</style>

