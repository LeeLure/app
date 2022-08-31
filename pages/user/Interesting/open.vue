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

		<myopen :patterns="open">
			<template #a>
				<upload :limit="limit" @getFileUrl="getFileUrl1" ref="upload1">
					<view class="plus">						<image :src="open.firstImage" class="plusimgimg" v-if="open.firstImage"></image>
	
						<image src="@/static/user/paizhao.png" v-else class="plusimg1"></image>					
					</view>
				</upload>
			</template>
			<template #b>
				<upload :limit="limit" @getFileUrl="getFileUrl2" ref="upload2">
					<view class="plus">
						<image :src="open.secondImage" class="plusimgimg" v-if="open.secondImage"></image>
							
						<image src="@/static/user/paizhao.png" v-else class="plusimg"></image>
					</view>
				</upload>

			</template>
			<template #c>
				<upload :limit="limit" @getFileUrl="getFileUrl3"  ref="upload3">
					<view class="plus">
							<image :src="open.thirdImage" class="plusimgimg" v-if="open.thirdImage"></image>
						<image src="@/static/user/paizhao.png"  v-else class="plusimg"></image>
					</view>
				</upload>
			</template>
			<template #d>
				<image src="@/static/user/xihuan.png" class="likeimg"></image>
			</template>
		</myopen>

		<view class="determine" @tap="determine">
			确定		
		</view>

		<view class="a" @tap="list">
			nhjm

		</view>
		<view class="a">
			111{{b}}
		</view>
	</view>

</template>

<script>
	import navigation from "@/components/navigation.vue"
	import myopen from "@/pages/user/Interesting/myopen.vue"
	import upload from "@/components/upload.vue"
	import {
		infoInterestingPeople,
		infoEcho
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
				open: "",
				a: "",
				b: "",
			}
		},
		components: {
			navigation,
			myopen,
			upload


		},
		onLoad() {
			this.list()
			this.getlist()
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

				// if (this.value1 == false) {
				// 	uni.showToast({
				// 		title: '请开启有趣的人',
				// 		duration: 1500,
				// 		icon: 'none'
				// 	});
				// 	return
				// }
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
					this.$refs.upload1.eliminate()
					this.$refs.upload2.eliminate()
					this.$refs.upload3.eliminate()
					this.getlist()
				})
			},
			getlist() {
				infoEcho().then(res => {
					this.open = res
					this.firstImage=res.firstImage
					this.secondImage=res.secondImage
					this.thirdImage=res.thirdImage
					this.value1=res.status
				})
			},
			list() {
				console.log("098s");

				uni.getLocation({
					type: 'wgs84',
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: function(res) {
						console.log('获取定位信息', res);

						// 创建地图坐标对象
						var point = new plus.maps.Point(res.longitude, res.latitude);
						//静态方法，反向地理编码
						plus.maps.Map.reverseGeocode(point, {}, (event) => {
								var address = event.address; // 转换后的地理位置
								var point = event.coord; // 转换后的坐标信息
								var coordType = event.coordType; // 转换后的坐标系类型
								var reg = /.+?(省|市|自治区|自治州|县|区)/g;
								var addressList = address.match(reg).toString().split(",");
								//注意 因为存在直辖市， 当所在地区为普通省市时，addressList.length == 3，city = addressList[1];当所在地区为直辖市时addressList.length == 2，city = addressList[0];
								let city = addressList.length == 3 ? addressList[1] : addressList[0];
								this.b = addressList
								console.log("addressList", this.b);
							},
							function(e) {
								console.log("失败回调", e);
							}
						);
					},
					fail: function(err) {
						console.log("获取定位失败", err);
						uni.showToast({
							title: '获取定位失败',
							icon: 'none'
						});
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
.plusimgimg{
	width: 100%;
	height: 100%;
}
	.a {
		color: white;
	}
</style>
