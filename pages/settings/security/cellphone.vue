<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="list">
			<view class="phones">
				手机验证码
			</view>
			<view class="phones">
				验证码发送到了：
			</view>
			<view class="phones">
				186****0846
			</view>

		</view>

		<view class="code">
			<input type="number" placeholder="请输入验证码" v-model="code" maxlength="6" class="phone">

			<view class="obtain" @click="getcode()">
				{{!codeTime&#63;'获取验证码':codeTime+'s'}}
			</view>

		</view>
		<view class="text">
			没有收到？ 60s后重新发送
		</view>
		<view class="next">
			<view class="nextstep">
				上一步
			</view>
			<view class="nextstep" @tap="replace">
				下一步
			</view>
		</view>

	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "安全中心",
				code: '',
				codeTime: 0,
			}
		},
		components: {
			navigation
		},
		methods: {
			getcode() {
				let that = this
				if (this.codeTime > 0) {
					uni.showToast({
						title: '不能重复获取',
						icon: "none"
					});
					return;
				} else {
					this.codeTime = 60
					let timer = setInterval(() => {
						this.codeTime--;
						if (this.codeTime < 1) {
							clearInterval(timer);
							this.codeTime = 0
						}
					}, 1000)

				}
			},
			replace(){
				uni.navigateTo({
					url:'/pages/settings/security/replace'
				})
				
			}
		}
	}
</script>

<style>
	.list {
		font-size: 28rpx;
		margin-top: 60rpx;
	}

	.phones {
		color: white;
		text-align: center;
		margin-top: 40rpx;
	}

	.code {
		border-radius: 48rpx;
		width: 670rpx;
		height: 108rpx;
		margin-top: 34rpx;
		position: relative;
		margin-left: 40rpx;
	}


	.phone {
		border-radius: 48rpx;
		width: 320rpx;
		height: 108rpx;
		padding-left: 160rpx;
		padding-right: 190rpx;
		font-size: 32rpx;
		background-color: white;

	}

	.phones {
		font-size: 32rpx;
	}

	.obtain {
		position: absolute;
		top: 36rpx;
		right: 32rpx;
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #B043FA;

	}

	.text {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}

	.next {
		display: flex;
		color: white;
	}

	.nextstep {}
</style>
