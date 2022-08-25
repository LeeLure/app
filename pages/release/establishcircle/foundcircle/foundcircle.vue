<template>
	<view>
		<view class="bar">
		</view>
		<navigation :title="title"> </navigation>
		<view class="activity">
			<view class="activitylist border">
				<view class="activitytext">
					圈子名称
				</view>
				<view class="activityinto">
					<input type="text" maxlength="10" class="activityinput">

				</view>
			</view>

			<view class="entering">
				<textarea v-model="detail.value" placeholder="请输入该圈子的介绍" placeholder-class="placeholder" maxlength="100"
					class="textarea"></textarea>
				<view class="number">
					{{text}}/100
				</view>
			</view>
		</view>

		<view class="activitys">
			<view class="activity1">
				请上传圈子头像
			</view>

			<view class="uploads">
				<upload :limit="limit" @getFileUrl="getFileUrl">
					<view class="plus">
						+
					</view>
				</upload>
			</view>

		</view>

		<view class="activity">
			<view class="activitylist">
				<view class="activitytext">
					圈子类型（必填）
				</view>
				<view class="activityinto" @tap="type">
					<view class="activityinput">
						请选择圈子类型
					</view>
					<image src="@/static/release/jiantou.png" mode="" class="activityimg"></image>
				</view>
			</view>
		</view>

		<view class="establish">
			<image src="@/static/release/chhhuangjianquanzi.png" class="establishimg"></image>
			创建圈子
		</view>
	</view>
</template>

<script>
	import upload from "@/components/upload.vue"
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "创建圈子",
				detail: {
					value: '',

				},
				limit:1
			}
		},
		computed: {
			text() {
				if (this.detail.value.length == 100) {
					uni.showToast({
						title: '最多输入500字',
						duration: 1500,
						icon: 'none'
					});

				}
				return this.detail.value.length

			}
		},
		components: {
			navigation,
			upload

		},
		methods: {
type(){
	uni.navigateTo({
		url:'/pages/release/establishcircle/foundcircle/type/type'
	})
}
		}
	}
</script>

<style>
	.activity {

		width: 710rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		background-color: #29253C;
		margin-top: 40rpx;
	}

	.activitylist {
		width: 670rpx;
		height: 120rpx;

		margin-left: 18rpx;
		display: flex;
		justify-content: space-between;

	}

	.activitytext {
		color: white;
		font-size: 28rpx;
		margin: auto 0;
	}

	.activityinto {
		display: flex;

		color: white;
		margin-top: 35rpx;

	}

	.activityinput {
		color: rgba(255, 255, 255, 0.6);
		text-align: right;
		font-size: 28rpx;
		margin-right: 30rpx;

	}

	.activityimg {
		margin-top: 12rpx;
		width: 20rpx;
		height: 20rpx;
	}

	.border {
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
	}

	.entering {
		position: relative;
		margin-top: 20rpx;
	}

	.textarea {

		background-color: #29253C;
		font-size: 28rpx;
		width: 710rpx;
		height: 360rpx;
		border-radius: 20rpx;
		margin-left: 20rpx;
		padding-top: 32rpx;
		padding-left: 18rpx;
		padding-right: 18rpx;
		padding-bottom: 80rpx;
		color: white;
	}

	.placeholder {
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);

	}

	.number {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		position: absolute;
		right: 50rpx;
		bottom: 26rpx;

	}

	.activitys {
		width: 710rpx;
		height: 274rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		background-color: #29253C;
		margin-top: 40rpx;
		padding-top: 30rpx;
	}

	.activity1 {
		color: white;
		font-size: 28rpx;
		margin-left: 20rpx;
		/* margin-top: 30rpx; */
	}

	.uploads {
		width: 710rpx;
		margin-left: 20rpx;
		margin-top: 28rpx;
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
		margin: 80rpx auto;
	}

	.establishimg {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}
</style>
