<template>
	<view class="main">
		<view class="message-list">
			<view class="swipe">
				<!-- 申请通知的入口 -->
				<view class="message-apply" @tap="toMessageApply"  style="height: 158rpx; line-height: 158rpx; text-align: center; color: #FFF; font-size: 28rpx; background-color: #29253C;">
					申请通知的静态页面入口
				</view>
				<view class="container" @touchstart="touchS" @touchmove="touchM" @touchend="touchE"
					:style="{'left':act_touch==index?leftStyle + 'upx':0}" :data-index="index"
					v-for="(item,index) in list" :key='index'>
					
					<view class="message-box">
						
						<view @tap="toDetails(item)"  class="message">
							<view class="left" >
								<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
							</view>
							<view class="center">
								<view>
									{{item.title}}
								</view>
								<view class="content">
									{{item.content}}
								</view>
							</view>
							<view class="right">
								<view class="time">22:36</view>
								<view class="account">3</view>
							</view>
						</view>
					</view>
					<view class="slot-button" @tap="bindClick({position:'right',content:{text:'删除'}})">
						<view class="slot-button-text">
							<image class="img" src="@/static/tidings/del.png"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- <uni-swipe-action-item :options="options1">
					<view @tap="toDetails(item)" class="message">
						<view class="left">
							<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
						</view>
						<view class="center">
							<view>
								{{item.title}}
							</view>
							<view class="content">
								{{item.content}}
							</view>
						</view>
						<view class="right">
							<view class="time">22:36</view>
							<view class="account">3</view>
						</view>
					</view>
				</uni-swipe-action-item> -->
			</uni-swipe-action>
			<!-- <uni-swipe-action class="swipe" v-for="(item,index) in list" :key='index'>
				<uni-swipe-action-item :threshold="0" :right-options="options1">
					<view class="message-box">
						<view @tap="toDetails(item)" class="message">
							<view class="left">
								<image class="img" src="../../../../static/home/a.pic.jpg" alt="">
							</view>
							<view class="center">
								<view>
									{{item.title}}
								</view>
								<view class="content">
									{{item.content}}
								</view>
							</view>
							<view class="right">
								<view class="time">22:36</view>
								<view class="account">3</view>
							</view>
						</view>
					</view>
					<template v-slot:right>
						<view class="slot-button" @tap="bindClick({position:'right',content:{text:'删除'}})">
							<view class="slot-button-text">
								<image class="img" src="@/static/tidings/del.png"></image>
							</view>
						</view>
					</template>
				</uni-swipe-action-item>
			</uni-swipe-action> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'message-list',
		data() {
			return {
				//  滑动模块参数
				leftStyle: 0,
				startX: 0,
				hiddenFlag: true,
				delBtnWidth: 220,
				act_touch: null,

				list: [],
				options1: [{
					text: '',
					icon: 'trash-fill',
					iconSize: '50rpx',
					style: {

						backgroundColor: 'transparent'
					}
				}]
			}
		},
		mounted() {
			for (var i = 0; i < 10; i++) {
				this.list.push({
					title: '通知' + i,
					content: '内容' + i,
					id: i
				})
			}

		},
		methods: {
			// 跳转申请通知页面
			toMessageApply() {
				uni.navigateTo({
					url:'/pages/tidings/index/message/message-apply/message-apply'
				})
			},
			
			scroll(e) {
				// console.log(e)
			},
			toDetails(item) {
				uni.navigateTo({
					url: "/pages/tidings/chat-details/chat-details?title=" + item.title + '&type=' + item.id
				})
			},
			bindClick(e) {
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			},

			touchS({
				touches
			}) {
				const {
					leftStyle,
					startX,
					hiddenFlag,
					delBtnWidth,
					act_touch
				} = this
				console.log(leftStyle,
					startX,
					hiddenFlag,
					delBtnWidth,
					act_touch)
				// startX记录开始移动的位置
				if (touches.length === 1) {
					this.startX = touches[0].clientX;
				}
				// hiddenFlag为true则是从右向左，为false则是从左向右
				if (this.leftStyle === 0) {
					this.hiddenFlag = true;
				} else {
					this.hiddenFlag = false;
				}
			},
			touchM(e) {
				if (e.touches.length === 1) {
					//手指移动时水平方向位置
					const moveX = e.touches[0].clientX;
					this.moveFunc(moveX);
					//获取手指触摸的是哪一项
					// console.log(e.currentTarget.dataset.index)
					var index = e.currentTarget.dataset.index;
					this.act_touch = index;
				}
			},
			touchE({
				touches
			}) {
				const {
					leftStyle
				} = this;
				const {
					delBtnWidth
				} = this;
				// 如果停止滑动的距离大于二分之一则直接弹出删除按钮，不然则left为0
				if (-leftStyle > delBtnWidth / 2) {
					this.leftStyle = -delBtnWidth;
				} else {
					this.leftStyle = 0;
				}
			},
			moveFunc(moveX) {
				// 原始位置向左，leftStyle为小于0；原始位置向右，leftStyle为大于0
				// disX为相对最初位置的左右距离
				// 大于0为向右，小于0为向左
				const disX = moveX - this.startX;
				const delBtnWidth = this.delBtnWidth;
				let offsetNum = 0;
				if (-disX >= delBtnWidth && this.leftStyle === -delBtnWidth) {
					return;
				}
				// console.log(disX, this.hiddenFlag);
				// this.hiddenFlag为true则是从左到右，则应该将container向左移动
				// this.hiddenFlag为false则是从右向左，则应该将container向右移动
				if (this.hiddenFlag) {
					// 此时container为最右边，则应该将container向左移动
					// disX大于0为相对原始位置的向右移动，则直接将offsetNum置为0
					// 否则为向左移动，offsetNum为disX相反的值，判断是否超过设置的最大位置
					if (disX == 0 || disX > 0) {
						offsetNum = 0;
					} else {
						offsetNum = disX;
						if (disX <= -delBtnWidth) {
							//控制手指移动距离最大值为删除按钮的宽度
							offsetNum = -delBtnWidth;
						}
					}
				} else {
					// 此时container为最左边，应该向右移动
					// disX小于0为相对原始位置的向左移动，则直接将offsetNum置为-this.delBtnWidth
					// 否则为相对原始位置的向右移动，此时应该将最大位置与向右位置的差值为此刻位置，判断是否为大于0
					if (disX < 0) {
						offsetNum = -this.delBtnWidth;
					} else {
						offsetNum = -this.delBtnWidth + disX;
						if (offsetNum > 0) {
							offsetNum = 0;
						}
					}
				}
				this.leftStyle = offsetNum;
			},
			//删除方法
			delData() {
				// console.log("删除")
				uni.showModal({
					title: '提示',
					content: "确认删除该职位？",
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style>
	.main {
		display: flex;
		justify-content: center;
		margin-top: 24rpx;
		height: 800rpx;
	}

	.swipe {
		width: 750rpx;
		/* padding: 20rpx 0; */
		margin: 20rpx 0;
	}

	.swipe .container {
		position: relative;
		margin-top: 26rpx;
	}

	.swipe /deep/ .u-swipe-action-item__content {
		background-color: transparent !important;
	}

	.swipe .message-box {
		width: 750rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.message {
		width: 710rpx;
		height: 158rpx;
		border-radius: 30rpx;
		background: #29253C;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.message .left {
		width: 118rpx;
		height: 120rpx;
		margin-left: 24rpx;
	}

	.message .left image {
		width: 108rpx;
		height: 108rpx;
		border-radius: 108rpx;
	}

	.message .center {
		flex: 1;
		margin-left: 20rpx;
		color: #fff;
		font-size: 28rpx;
		line-height: 58rpx;
	}

	.message .center .content {
		color: rgba(255, 255, 255, 0.5);
	}

	.message .right {
		width: 138rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 24rpx;
		line-height: 58rpx;
	}

	.message .right .time {
		color: rgba(255, 255, 255, 0.5);
	}

	.message .right .account {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		background: #FFEE8C;
		border-radius: 40rpx;
		margin-left: 49rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
	}

	.user {
		display: inline-block;
		width: 126rpx;
		height: auto;
		text-align: center;
		margin: 0 20rpx 0 14rpx;
	}

	.user-img {
		width: 100%;
	}

	.user-img .img {
		width: 108rpx;
		border-radius: 108rpx;
	}

	.user-name {
		font-size: 28rpx;
		color: #FFF;
	}

	.message-list .slot-button {
		width: 180rpx;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.message-list .slot-button-text {
		width: 140rpx;
		height: 120rpx;
		margin-left: 10rpx;
		background-color: #12111A;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20rpx;
		position: relative;
	}

	.message-list .slot-button-text .img {
		width: 50rpx;
		height: 50rpx;
	}

	.slot-button {
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		right: -214rpx;
	}
</style>
