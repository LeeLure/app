<template>
	<view>
		<view class="box">
			<view class="provide">
				请提供问题的截图或照片（选填）
			</view>
			<view class="phone">

			</view>
		</view>

		<view class="contact">
			<view class="touch">
				联系方式
			</view>
			<view>
				<input type="number" maxlength="11" placeholder="请输入手机号" placeholder-class="placeholders" class="input" v-model="phone">
			</view>
		</view>
		<view class="tips">
			您的反馈我们会尽快解决，但无法保证每一条都能及时反馈如有紧
			急咨询，请直接拨打客服电话：400-565-4684
		</view>
		<view class="btn" @tap="btn">
			提交
		</view>
		<popup v-if="flag" @flag="complete"></popup>
		<view :class="flag==true? 'active': 'shelter' " @flag="complete">

		</view>


	</view>
</template>

<script>
	import popup from "@/pages/settings/help/feedback/popup/popup.vue"
	export default {
		data() {
			return {
				flag: false,
				phone:''
			}
		},
		components: {

			popup

		},
		methods: {
			btn() {
				this.flag = true
				this.$emit("flag", this.flag)
				this.phone=''

			},
			// 接收子组件传递的参数
			complete(e) {
				console.log("fbv",e);
				this.flag = e
			}
		}
	}
</script>

<style>
	.box {
		width: 710rpx;
		height: 298rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		margin-top: 40rpx;
		margin-left: 20rpx;
		border: 1px solid rgba(255, 255, 255, 0);
		color: white;
	}

	.provide {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-top: 30rpx;
		margin-left: 18rpx;

	}

	.phone {}

	.contact {
		width: 710rpx;
		height: 104rpx;
		line-height: 104rpx;
		text-align: center;
		font-size: 24rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		margin-left: 20rpx;
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
	}

	.touch {
		color: rgba(255, 255, 255, 0.8);
		margin-left: 20rpx;
	}

	.placeholders {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;

	}

	.input {
		width: 200rpx;
		/* border: 1px solid  white; */
		margin-top: 30rpx;
		font-size: 24rpx;
	}

	.tips {
		width: 696rpx;
		margin-top: 30rpx;
		height: 68rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 20rpx;
	}

	.btn {
		width: 544rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background: linear-gradient(174deg, #D53EDA 0%, #D53EDA 100%);
		border-radius: 54rpx;
		font-size: 28rpx;
		margin-top: 180rpx;
		margin-left: 104rpx;
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
</style>
