<template>
	<view class="edit-name">
		<!-- 导航栏 -->
		<navigation :title="title" class="navigation">
			<template v-slot:action>
				<view class="action" @tap="toCircleDetails">完成</view>
			</template>
		</navigation>
		<view class="textarea-box">
			<u--textarea class="textarea" v-model="value" placeholder="请输入内容" maxlength='12' height='40' count></u--textarea>
		</view>
		<view class="tips">一周内可修改一次圈子名称</view>
		<view class="textarea-box">
			<u--textarea class="announcement" v-model="value1" placeholder="在此输入您需要发布的公告~" maxlength='100' height='240' count></u--textarea>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				title: '修改圈子名称',
				value: '',
				value1:''
			}
		},
		onLoad: function(option) {
			const {
				id,
			} = option
			this.id = id
		},
		methods: {

		}
	}
</script>

<style>
	.navigation {
		align-items: center;
		margin-bottom: 20rpx;
	}

	.action {
		width: 126rpx;
		height: 58rpx;
		border-radius: 36rpx;
		background: #D53EDA;
		font-size: 24rpx;
		line-height: 58rpx;
		text-align: center;
		color: #fff;
		margin-right: 22rpx;
	}
	.textarea-box {
		width: 710rpx;
		margin-left: 20rpx;
		background: #29253C;
		border-radius: 20rpx;
		
	}
	.textarea, .announcement{
		background: #29253C;
		border: none;
		border-radius: 20rpx;
	}
	.edit-name /deep/ .u-textarea__count{
		background: #29253C !important;
	}
	.edit-name /deep/.uni-textarea-textarea{
		color: #fff;
		font-size: 32rpx;
	}
	.edit-name .tips{
		font-size: 20rpx;
		color: rgba(255, 255, 255, 0.5);
		margin: 20rpx 20rpx 60rpx 20rpx;
	}
	.edit-name .announcement /deep/ .uni-textarea-textarea{
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
	}
	.edit-name .announcement /deep/ .uni-textarea-placeholder{
		font-size: 24rpx;
	}
</style>
