<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"></navigation>
		<view v-if="display">
			<image src="@/static/user/fabukong.png" class="emptyimg"></image>
			<view class="emptytitle">
				还未发布任何动态，去 <text class="emptytext" @tap="home">发布动态</text>吧~
			</view>
		</view>

		<view v-else>
			<view class="list">
				<view class="month">
					28 <text class="monthtext">3月</text>
				</view>
				<view v-for="(item,index) in list">


					<view class="copywriting">
						<view class="copywritingtext">
							{{item.content}}

							<template>
								<text class="labeltext" v-if="item.topicName">
									#{{item.topicName}}
								</text>

							</template>
						</view>
						<view class="copywritingright" @tap="deletes(index)">
							<image src="@/static/user/simi.png" class="copywritingimg"></image>
						</view>
						<view class="deletechoice" :class="isshow?'active':''" v-if="number==index">
							<view class="deletechoicetext" @tap="remove(item.id)">
								删除
							</view>
							<view class="deletechoicetext">
								私密
							</view>
						</view>
					</view>
					<view class="assembly">
						<picturearray :imgUrl="item.medias"></picturearray>
					</view>
					<view class="private">
						<image src="@/static/user/private.png" class="privateimg"></image>
						<view class="privatetext">
							私密动态
						</view>
					</view>
					<view class="label">




						<view class="praiseright">
							<view class="praise" @tap="click">
								<image src="@/static/home/dianzan.png" class="fabulous" v-if="!show"></image>
								<image src="@/static/home/dianjishow.png" class="fabulous" v-if="show"></image>
								<text class="praisetext">{{item.zanCount}}</text>
							</view>
							<view class="praise">
								<image src="@/static/home/pinglun.png" class="fabulous"></image>
								<text class="praisetext">{{item.commitCount}}</text>
							</view>
						</view>



					</view>
				</view>
			</view>



		</view>



	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import picturearray from "@/components/picturearray.vue"
	import {
		homeList
	} from "@/config/home.js"
	import {
		homeDelete
	} from "@/config/user.js"
	export default {
		data() {
			return {
				title: "我发布的",
				show: false,
				isshow: false,
				display: false,
				page: 1,
				limit: 10,
				id: 0,
				list: [],
				number:'',
				uid:""



			}
		},
		components: {
			navigation,
			picturearray

		},
		onLoad(options) {
			 this.uid = JSON.parse(options.uid)
			console.log(this.uid,"pppp");
			this.dynamiclist()
		},
		// 触底回调函数
		onReachBottom() {
			
			let a =this.limit+10	
			this.limit=	a		
			this.dynamiclist()
		},
		methods: {
			home() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			click() {
				const isShow = this.show ? false : true;
				this.show = isShow;
			},
			deletes(index) {
				const isShow = this.isshow ? false : true;
				this.isshow = isShow;
				this.number=index
			},

			dynamiclist() {
				homeList({
					page: this.page,
					limit: this.limit,
					uid: this.uid,

				}).then(res => {
					if (res == null) {
						this.display = true
					}
					this.list = res.rows
					this.id = res.rows.id
					console.log(this.list, "hh");
				})


			},
			// 删除动态
			remove(id) {
				console.log(id);
				homeDelete({
					id: id
				}).then(res => {
					this.dynamiclist()
					this.number=''
					this.isshow=false
				})
				if (this.list == null) {
					this.display = true
				}

			}
		}
	}
</script>

<style>
	.emptyimg {
		width: 200rpx;
		display: block;
		margin-left: 280rpx;
		margin-top: 320rpx;
		height: 200rpx;
	}

	.emptytitle {
		margin-top: 44rpx;
		text-align: center;
		color: white;
		font-size: 32rpx;
	}

	.emptytext {
		color: #D53EDA;
	}

	.list {

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
		position: relative;
		display: flex;
		justify-content: space-between;
	}



	.copywritingtext {
		font-size: 32rpx;
		color: white;
	}

	.copywritingright {
		width: 30rpx;
		height: 30rpx;
	}

	.copywritingimg {
		width: 30rpx;
		height: 30rpx;
	}

	.assembly {

		margin-top: 18rpx;
	}

	.private {

		display: flex;
		margin-top: 16rpx;
	}

	.privateimg {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.privatetext {
		margin-left: 10rpx;
		vertical-align: middle;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
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
		background-color: #29253C;
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

	.deletechoice {
		overflow: hidden;
		transition: 0.5s;
		background-color: #bfbfbf;
		width: 120rpx;
		height: 0;
		position: absolute;
		right: 20rpx;
		top: 40rpx;
		z-index: 3;
	}

	.active {
		height: 120rpx;
	}

	.deletechoicetext {
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		color: rgba(255, 255, 255, 0.8);
		font-size: 28rpx;
	}
</style>
