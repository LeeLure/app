<template>
	<!-- 动态详情 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view>
			<scroll-view scroll-y="true" class="scrollview">
				<view>
					<dynamic :list="list" :exhibit="exhibit" :faceshow='faceshow'></dynamic>
					<block v-for="(item,index) in comments" :key="index">

						<view class="comment" v-if="item">

							<view class="commentlist">
								<view class="commentleft">
									<image :src="item.face" mode="aspectFill" class="commentimg"></image>
								</view>

								<view class="commentright">
									<view class="commentname">
										{{item.nikeName}}
									</view>
									<view class="commenttext" @tap="reply(item)" @longtap="deletes(item)">
										{{item.content}}
									</view>
									<view class="commenttime">
										{{item.time}}
									</view>
								</view>
							</view>
							<view>
								<view class="commentlists" v-for="(items,index) in item.checked">
									<view class="commentlefts">
										<image :src="items.face" mode="aspectFill" class="commentimgs"></image>
									</view>

									<view class="commentright">
										<view class="commentname">
											{{items.nikeName}}
										</view>
										<view class="commenttext" @tap="reply(items)" @longtap="deletes(items)">
											{{items.content}}
										</view>
										<view class="commenttime">
											{{items.time}}
										</view>
									</view>
								</view>
							</view>

						</view>

					</block>
				</view>


			</scroll-view>
		</view>

		<view class="release">


			<textarea v-model="detail.value" :placeholder="placeholder" placeholder-class="releaseplaceholder"
				maxlength="300" class="releaseinput"></textarea>
			<view class="releasetext" @tap="publish">
				确认
			</view>

		</view>
		<view class="kongbai">

		</view>

		<view class="frame" v-if="flag">
			<view class="frametop">
				<view class="frametext  border">
					删除该评论
				</view>
				<view class="frametext border" @tap="reproduce(item.content)">
					复制
				</view>
				<view class="frametext">
					举报
				</view>
			</view>
			<view class="framebottom">
				取消
			</view>
		</view>
		<view :class="flag==true? 'active': 'shelter' " @tap="del">

		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import dynamic from "@/components/dynamic.vue"
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
	import {
		homeDesc,
		commentsComment,
		concernId,
		concernList
	} from "@/config/home.js"
	export default {


		data() {
			return {
				title: "动态详情",
				flag: false,
				list: [],
				exhibit: false,
				faceshow: "",
				detail: {
					value: '',

				},
				id: '',
				publishId: "",
				pub: "",
				page: 1,
				limit: 10,
				comments: [],				
				item:"",
				placeholder: "来都来了 不评论点什么吗",
publishUserId:""



			}
		},
		components: {
			navigation,
			dynamic
		},
		onLoad(options) {
			console.log(options, "po");
			const query = JSON.parse(options.query)
			const id = query.id
			this.id = id
			this.faceshow = query.faceshow
			this.getlist(id)


		},
		onReady() {
			this.concernlists()
		},
		methods: {
			getlist(id) {
				console.log(id, "oiuy");
				homeDesc({
					id: id
				}).then(res => {

					this.list.push(res)
					this.publishUserId=res.uid
					console.log(this.list, "hh");
				})

			},
			// 回复别人的评论
			reply(item) {
				console.log("ppp");
				this.placeholder = "回复" + item.nikeName
				this.publishId = item.id

			},
			// 删除评论
			deletes(item) {
				this.flag = true
				console.log(item);
				this.item=item
			},
			del() {
				this.flag = false

			},
			reproduce(copy) {
				console.log("lpj");
				uniCopy({
					content: copy,
					success: (res) => {
						this.flag=false
					},
					error: (e) => {
						
					}
				})
			},

			// 发表评论
			publish() {
				const content = this.detail.value
				if (this.publishId.length > 0) {
					this.pub = this.publishId
					console.log("this.pub", this.pub);
				} else {
					this.pub = this.id
					console.log("this.pub", this.pub);
				}
				console.log("poi", this.pub);
				const  publishUserId=this.id
				commentsComment({
					content: content,
					publishId: this.pub,
					publishUserId:this.publishUserId

				}).then(res => {
					this.detail.value = ""
					this.placeholder = "来都来了 不评论点什么吗"
					this.publishId = ''
					this.concernlists()
				})
			},
			// 评论列表
			concernlists() {
				var i = 0
				concernList({
					page: this.page,
					limit: this.limit,
					publishId: this.id
				}).then(res => {
					this.comments = res.rows
					this.comments.forEach((item, index) => {
						concernList({
							page: this.page,
							limit: this.limit,
							publishId: item.id
						}).then(res => {
							console.log("mnbvc", res, i++);

							// const {
							// 	checked
							// } = this.comments[index]
							if (res == null) return
							this.comments[index].checked = res.rows

						})
					})

				})
			},
			// concernlists() {
			// 	var i = 0;
			// 	if (i >= louceng_arr.length) {
			// 									return;
			// 								}
			// 	concernList({
			// 		page: this.page,
			// 		limit: this.limit,
			// 		publishId: this.id
			// 	}).then(res => {
			// 		this.comments = res.rows



			// 	})
			// },


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
		background-color: #1E1A32;

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

	.frame {
		color: white;
		font-size: 28rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 450rpx;
		z-index: 3;
	}

	.frametop {
		width: 710rpx;
		border-radius: 20rpx;
		background-color: #29253C;
		margin-left: 20rpx;

	}

	.framebottom {
		margin-top: 20rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		width: 710rpx;
		border-radius: 20rpx;
		margin-left: 20rpx;
		background-color: #29253C;
	}

	.frametext {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		width: 640rpx;
		margin-left: 35rpx;


	}

	.border {
		border-bottom: #1e1a327c 2rpx solid;
	}

	.active {
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.shelter {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -2;

	}

	.kongbai {
		height: 140rpx;
	}
</style>
