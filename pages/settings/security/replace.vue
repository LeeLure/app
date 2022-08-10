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
			<view class="text">
				输入您想使用的手机号
			</view>
		</view>
		<view class="form">
			<view class="code">
				<input type="number" v-model="phone" placeholder-class="phone1" maxlength="11" placeholder="请输入手机号"
					class="phone">
				<view class="checking">
					+86
				</view>
				<view class="obtain" @tap="getcode()">
					{{!codeTime&#63;'获取验证码':codeTime+'s'}}
				</view>
			</view>
			<view class="code">
				<input type="number" placeholder="请输入验证码" v-model="code" maxlength="6" class="phone">

			</view>
			<button class="btn"  @tap="btn">确认修改</button>
		</view>
      <popup  v-if="flag"></popup>
	  <view  :class="flag==true? 'active': 'shelter' ">
	  	
	  </view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import popup  from "@/pages/settings/security/popup/popup.vue"
	export default {
		data() {
			return {
				title: "安全中心",
				codeTime: 0,
				phone: '',
				code: '',
				flag:false
			}
		},
		components: {
			navigation,
			popup
		},
		methods: {
			getcode() {
				let that = this
				if (!/^1\d{10}$/.test(that.phone)) {

					return uni.showToast({
						title: '请输入正确的手机号码!',
						duration: 1500,
						icon: 'none'
					});
				}

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
			btn(){			
				this.flag=true
				console.log(this.flag);
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

	.form {
		margin-top: 40rpx;


		width: 100%;

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

	.checking {

		background-color: white;
		width: 60rpx;
		height: 50rpx;
		position: absolute;
		top: 26rpx;
		left: 40rpx;
		text-align: center;
		font-size: 36rpx;
		font-weight: 500;
		color: #222222;
	}

	.phone1 {
		font-size: 28rpx;
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

	.btn {
		background: linear-gradient(180deg, #D53EDA  0%, #D53EDA  100%);
		width: 250rpx;
		
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 40rpx;
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #ffff;
		border-radius: 48rpx;
	}

	.text {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		text-align: center;
		margin-top: 20rpx;
	}
	.active{
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	.shelter{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -2;
		
	}
</style>
