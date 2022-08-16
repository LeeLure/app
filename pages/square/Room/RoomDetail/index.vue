<template>
	<!-- 房间详情页面 -->
	<view>
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation title="房间详情">
			<template #action>
				<view @tap="onShare" class="RoomDetailMore">
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

		<!-- 分享的组件 -->
		<Share ref="toShare"></Share>
	</view>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import Business from './Business.vue';
import RoomDetailItem from './RoomDetailItem.vue';
import RoomDetailDialog from './RoomDetailDialog.vue';
import Share from './Share.vue';
export default {
	components: {
		Navigation,
		Business,
		RoomDetailItem,
		RoomDetailDialog,
		Share
	},

	data() {
		return {
			isShowDialog: true
		};
	},
	methods: {
		onShare() {
			this.$refs.toShare.open();
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
</style>
