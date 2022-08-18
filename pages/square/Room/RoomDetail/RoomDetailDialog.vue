<template>
	<!-- 房间信息-1的dialog -->
	<u-popup
		:show="isShowDialog"
		bgColor="#29253C"
		:overlayOpacity="0.5"
		:round="20"
		mode="center"
		@close="close"
		@open="open"
		:closeOnClickOverlay="false"
	>
		<view>
			<view class="dialog">
				<view class="top">入局须知</view>
				<view class="center">
					<view class="text">{{ text }}</view>
					<view class="remind">{{ remind }}</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="button but-top" @tap="cancelJoin">取消</view>
			<view class="button but-bot" @tap="confirmJoin">确认入局</view>
		</view>
	</u-popup>
</template>
<script>
export default {
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			isShowDialog: true,
			text:
				'确认入局代表你与其他人建立约定，请富有责任心和慎重加入，避免反复退局对大家造成困扰你的头像昵称仅对发起者和其他成员可见，入局后可以进行成员间的局内讨论',
			remind: '注意：每天多次进出房间者，会按照恶意困扰处罚该账号并封禁账号一个月'
		};
	},
	methods: {
		open() {
			// console.log('open');
		},
		close() {
			this.isShowDialog = false;
			// console.log('close');
		},
		cancelJoin() {
			uni.showToast({ title: '取消加入成功' });
			uni.navigateBack();
			this.close();
		},
		confirmJoin() {
			uni.showToast({ title: '确定加入成功' });
			this.close();
		}
	}
};
</script>

<style>
.dialog {
	width: 630rpx;
	/* height: 486rpx; */
	padding: 0 28rpx;
	/* margin: 0 52rpx 0 52rpx; */
	/* border: 1rpx solid #666; */
}

.top {
	height: 44rpx;
	line-height: 44rpx;
	font-size: 32rpx;
	color: #fff;
	text-align: center;
	margin-top: 28rpx;
}

.text {
	font-size: 28rpx;
	color: #fff;
	margin-top: 36rpx;
	/* border: 1rpx solid seagreen; */
}

.remind {
	font-size: 24rpx;
	color: #fff;
	margin-top: 15rpx;
}

.bottom {
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
}

.button {
	width: 230rpx;
	height: 96rpx;
	line-height: 96rpx;
	text-align: center;
	background-color: transparent;
	font-size: 32rpx;
	color: #d53eda;
	/* border: 1rpx solid seagreen; */
}

.but-top {
	color: #ffffff;
	opacity: 0.2;
}
</style>
