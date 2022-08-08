<template>
	<view class="login">
		<view class="bar">
		</view>

		<view class="welcome  color">
			欢迎来到
		</view>
		<view class="interstellar color">
			星际奇遇~
		</view>
		<view class="form">
			<view class="code">
				<input type="number" v-model="phone" placeholder-class="phones" maxlength="11" placeholder="请输入手机号"
					class="phone">
				<view class="checking">
					+86
				</view>
			</view>
			<view class="code">
				<input type="number" placeholder="请输入验证码" v-model="code" maxlength="6" class="phone">
				<view class="checking">
					<image src="../../static/login/protect.png" class="checkingimg"></image>
				</view>
				<view class="obtain" @click="getcode()">
					{{!codeTime&#63;'获取验证码':codeTime+'s'}}
				</view>



			</view>
			<button class="btn" @click="btn">登陆</button>

		</view>


		<view class="bottom">
			<view class="other">
				<view class="other1"></view>
				<view class="other2">其他登陆方式</view>
				<view class="other1"></view>
			</view>
			<view class="weixin">
				<view class="icon">
					<image src="../../static/login/weixin.png" class="image"></image>
				</view>
				<view class="icon">
					<image src="../../static/login/qq.png" class="image"></image>
				</view>
			</view>
			<view class="conceal">
				<image src="../../static/login/weixuanze.png" class="images"></image>
				<text class="text1">登录即同意《用户服务协议》和《隐私政策》</text>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeTime: 0,
				phone: '',
				code: ''

			}
		},
		onLoad() {
			uni.hideTabBar()
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
				uni.$u.http.post('/code/sms', {

						phone: this.phone,

					}).then(res => {
						console.log(vhtgrf);
					})
					.catch(() => {

					})



			},


			btn() {
				uni.navigateTo({
					url: "/pages/information/information"
				})
				return false
				uni.$u.http.post('/code/validate', {
					code: this.code,
					phone: this.phone

				}).then(res => {
					this.login()
				}).catch(() => {

				})
			},
			login() {
				uni.$u.http.post('/login/mobile/login', {
					code: this.code,
					phone: this.phone
			
				}).then(res => {
					uni.navigateTo({
						url: "/pages/information/information"
					})
				}).catch(() => {
			
				})
			}
			
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.color {
		color: white;
		margin-left: 20rpx;
	}

	.welcome {
		font-size: 44rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		margin-top: 144rpx;
	}

	.interstellar {
		font-size: 60rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		margin-top: 22rpx;
	}

	.form {
		margin-top: 80rpx;


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

	.checkingimg {
		width: 50rpx;
		height: 50rpx;


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

	.btn {
		background-color: white;
		width: 486rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		margin-top: 32rpx;
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #222222;
		border-radius: 48rpx;
	}

	.other {
		color: white;
		margin-left: 20rpx;
		display: flex;
		justify-content: center;
		margin-top: 300rpx;

	}

	.other1 {
		margin-top: 20rpx;
		width: 50rpx;
		border-top: 1rpx solid white;
	}

	.other2 {
		font-size: 28rpx;

		margin-left: 30rpx;
		margin-right: 30rpx;



	}

	.weixin {
		display: flex;
		justify-content: center;
		margin-top: 25rpx;

	}

	.icon {
		width: 80rpx;
		height: 80rpx;

		text-align: center;
		background-color: white;
		margin-left: 40rpx;
		border-radius: 40rpx;
	}

	.image {
		width: 50rpx;
		height: 50rpx;
		margin-top: 15rpx;

	}

	.conceal {
		/* border: 1px solid red; */
		width: 100%;
		text-align: center;
		margin-top: 50rpx;
	}

	.images {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.text1 {
		color: #f5f7f99c;
		font-size: 24rpx;
		vertical-align: middle;
		margin-left: 20rpx;

	}
</style>
