<template>
	<view>
		<view class="bar"></view>
		<navigation :title="title"></navigation>

		<view class="activity">
			<view class="activitylist border">
				<view class="activitytext">活动主题</view>
				<view class="activityinto">
					<input type="text" maxlength="10" class="activityinput" v-model="name" />
					<image src="@/static/release/jiantou.png" mode="" class="activityimg"></image>
				</view>
			</view>

			<view class="activitylist  border">
				<view class="activitytext">活动人数</view>
				<view class="activityinto">
					<view class="jia" @tap="plus">+</view>
					{{ number }}
					<view class="jia" @tap="reduce">-</view>
				</view>
			</view>
			<view class="activitylist">
				<view class="activitytext">活动时间</view>
				<view class="activityinto">
					<view class="activityinput">2022年8月1日</view>
					<image src="@/static/release/jiantou.png" mode="" class="activityimg"></image>
				</view>
			</view>
		</view>

		<view class="activity">
			<view class="activitylist">
				<view class="activitytext">活动地点</view>
				<view class="activityinto">
					<view class="activityinput">请选择活动地址</view>
					<image src="@/static/release/jiantou.png" mode="" class="activityimg"></image>
				</view>
			</view>
		</view>
		<view class="details">活动详情</view>
		<view class="entering">
			<textarea
				v-model="detail.value"
				placeholder="在此输入活动详情~"
				placeholder-class="placeholder"
				maxlength="100"
				class="textarea"
			></textarea>
			<view class="number">{{ text }}/100</view>
		</view>
		<view class="details">封面头像</view>
		<view class="uploads">
			<upload :limit="limit" @getFileUrl="getFileUrl" ref="upload"><view class="plus">+</view></upload>
		</view>
		<view class="tips">（最多上传一张图片噢~）</view>
		<view class="establish" @tap="room">
			<image src="@/static/release/chuhangjian.png" class="establishimg"></image>
			创建房间
		</view>
	</view>
</template>

<script>
import upload from '@/components/upload.vue';
import navigation from '@/components/navigation.vue';
import { roomCreate } from '@/config/home.js';
import { joinRoom, roomList } from '@/config/square.js';
export default {
	data() {
		return {
			title: '创建房间',
			detail: {
				value: ''
			},
			number: 0,
			limit: 1,
			image: '',
			name: '',
			time: '2022-08-29T20:50:00.017Z'
		};
	},
	components: {
		navigation,
		upload
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
			return this.detail.value.length;
		}
	},
	methods: {
		plus() {
			if (this.number == 8) {
				return;
			}
			this.number++;
		},
		reduce() {
			if (this.number == 0) {
				return;
			}
			this.number--;
		},
		getFileUrl(url) {
			console.log(url, '000');
			this.image = url;
			console.log(this.image, '111');
		},
		room() {
			roomCreate({
				detail: this.detail.value,
				image: this.image,
				lat: 0,
				lng: 0,
				name: this.name,
				peopleNum: this.number,
				time: this.time
			}).then(res => {
				this.getroomList(res);

				this.detail.value = '';
				this.$refs.upload.eliminate();

				this.name = '';
				this.number = 0;
				this.time = '';
			});
		},

		async getroomList(res) {
			console.log(res);
			const result = await roomList({ id: res }).catch(e => {
				console.log(e);
			});
			// console.log(result);

			// 跳转房间页面
			uni.navigateTo({
				url: `/pages/square/Room/JoinRoom/index?roomId=${res}`
			});
		}
	}
};
</script>

<style>
.activity {
	width: 710rpx;
	margin-left: 20rpx;
	border-radius: 20rpx;
	background-color: #29253c;
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
}

.activityimg {
	margin-top: 12rpx;
	width: 20rpx;
	height: 20rpx;
}

.jia {
	width: 40rpx;
	height: 40rpx;
	line-height: 40rpx;
	text-align: center;
	border-radius: 20rpx;
	background-color: white;
	color: #29253c;
	font-weight: 800;
	margin-left: 30rpx;
	margin-right: 30rpx;
	font-size: 36rpx;
}

.border {
	border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
}

.details {
	margin-left: 38rpx;
	color: white;
	font-size: 28rpx;
	margin-top: 40rpx;
}

.entering {
	position: relative;
	margin-top: 20rpx;
}

.textarea {
	background-color: #29253c;
	font-size: 24rpx;
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
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
}

.number {
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
	position: absolute;
	right: 50rpx;
	bottom: 26rpx;
}

.uploads {
	width: 710rpx;
	margin-left: 38rpx;
	margin-top: 20rpx;
}
.plus {
	color: #1e1a32;
	width: 180rpx;
	height: 180rpx;
	line-height: 180rpx;
	text-align: center;
	background-color: rgba(255, 255, 255, 0.2);
	font-size: 60rpx;
	font-weight: 900;
}
.tips {
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.6);
	margin-top: 10rpx;
	margin-left: 38rpx;
}
.establish {
	width: 544rpx;
	height: 106rpx;
	line-height: 106rpx;
	text-align: center;
	background: linear-gradient(174deg, #d53eda 0%, #d53eda 100%);
	border-radius: 54rpx;
	font-size: 28rpx;
	color: white;
	vertical-align: middle;
	margin: 20rpx auto;
}
.establishimg {
	width: 40rpx;
	height: 40rpx;
	vertical-align: middle;
	margin-right: 10rpx;
}
</style>
