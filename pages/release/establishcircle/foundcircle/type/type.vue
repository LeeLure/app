<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"> </navigation>
		<input type="text" maxlength="15" placeholder="请选择类型" placeholder-class="placeholder" class="input">



		<view class="list">
			<view :class="[number==index?'active':'listtext']" v-for="(item,index) in list" :key="index"
				@tap="active(item,index)">
				{{item.name}}
			</view>
		</view>
		<view class="establish" @tap="goBack">

			确定
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import {
		CircleTopicSelectCircleType
	} from "@/config/home.js"
	export default {
		data() {
			return {

				title: "选择类型",
				list: [

				],
				number: -1,
				item: 0,
			}
		},
		components: {
			navigation


		},
		onLoad() {
			this.getlist()
		},
		methods: {
			active(item, index) {
				this.number = index
				this.item=item
			},
			getlist() {
				CircleTopicSelectCircleType().then(res => {
					this.list = res
				})
			},
			goBack() {
				uni.$emit('updateData', this.item)
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.placeholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}

	.input {
		color: #2B7FDE;
		background-color: #29253C;
		padding-left: 20rpx;
		margin-left: 20rpx;
		width: 690rpx;
		height: 68rpx;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
	}

	.listtext {
		width: 210rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 20rpx;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.active {
		width: 212rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		background-color: #B043FA;
		border-radius: 20rpx;
		color: rgba(255, 255, 255, 1);
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.establish {
		width: 544rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background: linear-gradient(174deg, #D53EDA 0%, #D53EDA 100%);
		border-radius: 54rpx;
		font-size: 28rpx;
		color: white;
		vertical-align: middle;
		margin: 180rpx auto;
	}
</style>
