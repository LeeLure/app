<template>
	<view>
		<view class="bar">
		</view>

		<view class="number">
			<view @click="revert">
				返回上一步
			</view>
			<view>
				2/2
			</view>
		</view>
		<view class="news">
			请选择你的个性标签
		</view>
		<view class="choice">
			可为你匹配共同标签的好友
		</view>

		<view class="labellist" v-for="(item,index) in labels" :key="index">
			<view class="header">
				<view class="header1">
					{{item.key}}
				</view>
				<view class="header2">
					可选{{labels[index].checked.length }}/ {{index==1? 1:2}}
				</view>
			</view>
			<view class="category">
				<view class="ac" :class="{ kun: labels[index].checked.indexOf(items.name) != -1 }"
					v-for="(items,i) of item.value" :key="i" @tap="appointment(items,index)">
					<view class="">{{items.name}}</view>
				</view>

			</view>

		</view>


		<view class="complete" @tap="switchtab">
			完成
		</view>
		<view class="kongbai">

		</view>
	</view>
</template>

<script>
	import {
		enrollEssential,
		configInterestList,
		infoTag
	} from "@/config/api.js"
	export default {
		data() {
			return {
				
				labels: [

				],
			
				sexs: 0,
				birthday: "",
				nickName: "",
				avatarUrl: "",
				tagList: [],


			}
		},
		// 页面加载
		onLoad(options) {
			const query = JSON.parse(options.query)
			this.sexs = 0 + query.sex
			this.birthday = query.birthday
			this.nickName = query.nickName
			this.avatarUrl = query.avatarUrl
			console.log(11111);

			this.label()

		},
		// 触底回调函数
		onReachBottom() {
			console.log(222);
		},
		methods: {
			revert() {
				uni.navigateBack({
					delta: 1
				})
			},
			appointment(items,index) {
				let that = this;
				console.log(that.labels[index].checked.indexOf(items.name))
				if (that.labels[index].checked.indexOf(items.name) !== -1) {
					that.labels[index].checked.splice(that.labels[index].checked.indexOf(items.name), 1); //取消
				} else {
					if (that.labels[index].checked.length < (index === 1 ? 1 : 2)) {
						const {
							checked
						} = this.labels[index]
						// console.log(index); //打印下标
						that.labels[index].checked = [...checked, items.name] //选中添加到数组里
					} else {
						uni.showToast({
							title: '已超出可选个数',
							duration: 1000,
							icon: 'none'
						})
					}
				}
				console.log(that.labels[index].checked, "jjj");

			},

			switchtab() {
				console.log(3456);
				let query = {
					birthday: this.birthday,
					nickName: this.nickName,
					avatarUrl: this.avatarUrl,
					sex: 0
				}
				console.log(this.labels);
				this.labels.forEach((item) => { //js遍历数组
					// console.log("将00", item.checked.length);
					if(item.checked.length===0){					
						return 						
					}
						item.checked.forEach((items)=>{
							console.log(items,"00098");
							
					this.tagList.push(items)
						})
		    	});

				console.log(this.tagList, "jj");
				enrollEssential(
					query
				).then(() => {
					infoTag({
						tagList: this.tagList
					}).then(res => {
						uni.reLaunch({
							url: "/pages/home/home",
							success: function(res) {

							}
						})
					})
				})

			},
			label() {
				// get请求
				configInterestList().then(res => {
					console.log(res);

					const arr = []
					let a = 0

					for (let item in res) {
						const obj = {
							key: '',
							value: []
						}
						console.log(a);
						obj.key = item
						obj.value = res[item]
						obj.checked = []
						arr.push(obj)
					}

					console.log(arr, "ndweoih")
					this.labels = arr


				}).catch(() => {

				})
			}



		}
	}
</script>

<style>
	page {
		background: linear-gradient(180deg, #1E1A32 0%, #0E0C17 100%);
		margin: 0;
		padding: 0;

	}

	.number {
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	.news {
		color: white;
		font-size: 44rpx;
		text-align: center;
		margin-top: 90rpx;
	}

	.choice {
		margin-top: 32rpx;
		color: #f5f7f99c;
		font-size: 28rpx;
		text-align: center;
	}

	.labellist {
		color: rgba(255, 255, 255, 0.521);
		margin-top: 90rpx;
	}

	.header {
		display: flex;
		justify-content: space-between;

		margin-left: 58rpx;
		margin-right: 58rpx;
	}

	.header1 {}

	.category {
		/* background-color: white; */
		display: flex;

		flex-wrap: wrap;
		margin-left: 32rpx;
	}



	.ac {
		width: 194rpx;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		margin-top: 30rpx;
		font-size: 32rpx;
		border-radius: 30rpx;
		background-color: rgba(255, 255, 255, 0.2);
		margin-left: 26rpx;


	}

	.kun {
		color: white;
		background-color: #B043FA;
	}

	.complete {
		width: 486rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		background-color: white;
		color: #B043FA;
		font-size: 28rpx;
		border-radius: 48rpx;
		/* position: absolute;
		bottom: 80rpx;
		left: 132rpx; */
		margin: 60rpx auto;

	}

	.kongbai {
		height: 50rpx;
	}
</style>
