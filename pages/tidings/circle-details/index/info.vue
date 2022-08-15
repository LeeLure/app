<template>
	<view class="category-info">
		<category-title>
			<template #title>
				圈子信息
			</template>
		</category-title>
		<view class="info">
			<template v-if="type==='2'">
				<view class="info-details">
					<view class="lable">圈子头像</view>
					<view class="value" @tap="editAvatar">
						<image class="img" src="@/static/home/a.pic.jpg"></image>
						<u-icon name="arrow-right" color='rgba(255,255,255,0.5)' size="26rpx"></u-icon>
					</view>
				</view>
				<view class="info-details">
					<view class="lable">圈子名称</view>
					<view class="value" @tap="toEdit('编辑')">
						<view class="left">英雄联盟超话</view>
						<u-icon name="arrow-right" color='rgba(255,255,255,0.5)' size="26rpx"></u-icon>
					</view>
				</view>
				<view class="info-details">
					<view class="lable">圈子公告</view>
					<view class="value" @tap="toEdit('编辑')">
						<view class="left">欢迎大家来...</view>
						<u-icon name="arrow-right" color='rgba(255,255,255,0.5)' size="26rpx"></u-icon>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="info-details">
					<view class="lable">举报</view>
					<view class="value">
						<u-icon name="arrow-right" color='rgba(255,255,255,0.5)' size="26rpx"></u-icon>
					</view>
				</view>
			</template>
			<view class="info-details">
				<view class="lable">设为置顶</view>
				<view class="value">
					<u-switch v-model="value" asyncChange @change="asyncChange" size="16" space="2"
						activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
				</view>
			</view>
			<view class="info-details last">
				<view class="lable">消息免打扰</view>
				<view class="value">
					<u-switch v-model="value" asyncChange @change="asyncChange" size="16" space="2"
						activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import categoryTitle from "./title.vue"
	export default {
		name: "category-info",
		props: {
			type: String
		},
		components: {
			categoryTitle
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			toEdit(value) {
				uni.navigateTo({
					url: "/pages/tidings/circle-details/edit/index?id=" + value
				})
			},
			asyncChange(e) {
				// uni.showModal({
				// 	content: e ? '确定要打开吗' : '确定要关闭吗',
				// 	success: (res) => {
				// 		if (res.confirm) {
				// 			this.value13 = e
				// 		}
				// 	}
				// })
				this.value1 = e
			},
			editAvatar() {
				uni.chooseImage({
					count: 1, //默认9
					// sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					// sourceType: ['album'], //从相册选择
					crop:{
						width:'200px',
						height:'200px'
					},
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
		}
	}
</script>

<style>
	.category-info .info {
		background-color: #29253C;
		border-radius: 20rpx;
		padding: 14rpx 30rpx;
		box-sizing: border-box;
		width: 100%;
		font-size: 26rpx;
		line-height: 40rpx;
		color: rgba(255, 255, 255, 0.6);
	}

	.category-info .info-details {
		width: 100%;
		height: 120rpx;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		color: #fff;
	}

	.category-info .last {
		border: none;
	}

	.category-info .info-details .lable {
		flex: 1;
	}

	.category-info .info-details .value {
		display: flex;
		flex: 1;
		justify-content: end;
	}

	.category-info .info-details .img {
		width: 72rpx;
		height: 72rpx;
		border-radius: 72rpx;
		margin-right: 20rpx;
	}

	.info-details .value .left {
		color: rgba(255, 255, 255, 0.6);
		margin-right: 12rpx;
	}
</style>
