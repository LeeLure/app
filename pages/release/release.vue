<template>
	<!-- 发布动态 -->
	<view>
		<view class="bar">
		</view>
		<navigation :title="title">
			<view class="release" @tap="release">
				发布
			</view>
		</navigation>

		<view class="entering">
			<textarea v-model="detail.value" placeholder="分享你的生活上开心事吧~" placeholder-class="placeholder" maxlength="500"
				class="textarea"></textarea>
			<view class="number">
				最多1000字
			</view>
		</view>
		<view class="uploads">
			<upload :limit="limit" @getFileUrl="getFileUrl" ref="upload">
				<view class="plus">
					+
				</view>
			</upload>
		</view>

		<view class="list">
			<view class="conversation" @tap="label">
				<view class="particulars">
					<image src="@/static/release/huati.png" class="particularsimg"></image>
					选择话题
				</view>
				<view class="particularstext">
					{{item==""?"选择合适的话题会有更多赞噢~":item.name}}
					<image src="@/static/settings/jinnru.png" class="particularsimgs"></image>
				</view>
			</view>
			<view class="conversation" @tap="circle">
				<view class="particulars">
					<image src="@/static/release/quanzi.png" class="particularsimg"></image>
					添加圈子
				</view>
				<view class="particularstext">
					选择你加入的圈子~
					<image src="@/static/settings/jinnru.png" class="particularsimgs"></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import upload from "@/components/upload.vue"
	import navigation from "@/components/navigation.vue"
	import {
		homePush
	} from "@/config/home.js"
	export default {
		data() {
			return {
				title: "发布动态",
				detail: {
					value: '',

				},
				medias: [],
				circleIp: "",
				topicIp: "",
				limit: 9,
				item: '',
			}
		},
		components: {
			navigation,
			'upload': upload

		},
		computed: {

		},
		onLoad() {
			let that = this
			uni.$on('updateData', function(data) {
				that.item = data
				console.log(that.item);
			})

		},
		methods: {
			getFileUrl(url) {
				console.log(url)
				this.medias.push(url)
			},
			label() {
				uni.navigateTo({
					url: '/pages/release/label/label'
				})
			},
			circle() {
				uni.navigateTo({
					url: '/pages/release/circle/circle'
				})
			},
			release() {
				if(this.item!==''){
					this.topicIp=this.item.id
				}
				homePush({
					content: this.detail.value,
					medias: this.medias,
					circleIp: this.circleIp,
					topicIp: this.topicIp

				}).then(res => {
					this.detail.value = ""
					this.$refs.upload.eliminate()
					this.item=''
				})
			
			},


		}
	}
</script>

<style>
	.release {
		width: 126rpx;
		height: 58rpx;
		text-align: center;
		line-height: 58rpx;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		font-size: 24rpx;
		margin-top: 30rpx;
		margin-right: 22rpx;

	}

	.entering {
		position: relative;
	}

	.textarea {
		font-size: 24rpx;
		width: 680rpx;
		height: 280rpx;

		border-radius: 20rpx;
		margin-left: 20rpx;
		padding-top: 32rpx;
		padding-left: 18rpx;
		padding-right: 18rpx;
		padding-bottom: 80rpx;
		color: white;
	}

	.placeholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);

	}

	.number {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		position: absolute;
		right: 50rpx;
		bottom: 26rpx;

	}

	.uploads {
		width: 710rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.plus {
		color: #1E1A32;
		width: 180rpx;
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.2);
		font-size: 60rpx;
		font-weight: 900;
	}

	.list {
		color: white;
		margin-top: 20rpx;
	}

	.conversation {
		width: 710rpx;
		margin-left: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-between;

	}

	.particulars {
		font-size: 28rpx;
		vertical-align: middle;
	}

	.particularsimg {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}

	.particularstext {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		vertical-align: middle;
	}

	.particularsimgs {
		width: 20rpx;
		height: 20rpx;
		vertical-align: middle;
		margin-left: 10rpx;
	}
</style>
