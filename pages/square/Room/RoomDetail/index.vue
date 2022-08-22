<template>
	<!-- 房间详情页面 -->
	<view class="bg-img" :style="{ backgroundImage: 'url(' + bgImgUrl + ')', backgroundSize: 'contain' }">
		<view class="bgi-blur" style="backdrop-filter: blur(20rpx);">
			<view class="bar"></view>

			<!-- 导航栏 -->
			<Navigation title="房间详情">
				<template #action>
					<view @tap="openShare" class="RoomDetailMore">
						<image src="../../../../static/square/det.png" mode=""></image>
					</view>
				</template>
			</Navigation>

			<!-- 商家信息 -->
			<Business></Business>

			<!-- 组件 -->
			<RoomDetailItem></RoomDetailItem>

			<!--房间信息-1的dialog -->
			<RoomDetailDialog :isShow="isShowDialog"></RoomDetailDialog>

			<!-- 按钮 -->
			<view class="button-bgc">
				<view class="bgc-button">
					<!-- 按钮组件 -->
					<Button></Button>
				</view>
			</view>
			<!-- 分享的组件 -->
			<Share ref="Share"></Share>
		</view>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import Business from './Business.vue';
import RoomDetailItem from './RoomDetailItem.vue';
import RoomDetailDialog from './RoomDetailDialog.vue';
import Button from './Button.vue';
import Share from './Share.vue';
export default {
	components: {
		Navigation,
		Business,
		RoomDetailItem,
		RoomDetailDialog,
		Button,
		Share
	},

	data() {
		return {
			isShowDialog: true,
			bgImgUrl: '../../../../static/square/Business-img.jpg'
		};
	},
	methods: {
		toShare() {
			this.$refs.Share.open();
		},

		openShare() {
			this.toShare();
		}
	}
};
</script>

<style>
.RoomDetailMore {
	width: 30rpx;
	height: 30rpx;
	margin: 5rpx 15rpx 0 0;
}

.RoomDetailMore image {
	width: 100%;
	height: 100%;
	/* background-color: #fff; */
}

.bg-img {
	width: 100%;
	height: 100%;
}

.button-bgc {
	background-color: #1e1a32;
	padding: 30rpx 0 10rpx 0;
}

.bgc-button {
	margin: 0 20rpx;
}
</style>
