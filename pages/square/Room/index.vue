<template>
	<!-- 更多房间页面 -->
	<view style="color: azure;">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation :title="title">
			<template #action>
				<view class="create-room"><view class="text">创建房间</view></view>
			</template>
		</Navigation>

		<!-- 搜索框 -->
		<Search></Search>

		<view class="item-list">
			<!-- 左侧菜单 -->
			<LeftCategory class="LeftCategory" :List="List"></LeftCategory>

			<!-- 右侧房间列表 -->
			<scroll-view class="scroll-view" scroll-y>
				<view class="RightRoomItem">
					<RoomItem class="RoomItem" v-for="item in 6">
						<template #img>
							<view class="roomImg"><image src="../../../static/square/item-1.jpg" mode=""></image></view>
						</template>
						<!-- <view class="RoomInfo"> -->
						<template #title>
							<view class="roomTitle">出发出发！出发西藏！西藏！我来啦！！</view>
						</template>
						<!-- 房间人数 -->
						<template #footer>
							<view class="people">
								<view class="peopleIcon"><image src="../../../static/square/people.png" mode=""></image></view>
								<view class="peopleText">现有6/8人</view>
							</view>
						</template>
					</RoomItem>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Navigation from '../../../components/navigation.vue';
import Search from '../Components/Search.vue';
import LeftCategory from '../Components/LeftCategory.vue';
import RoomItem from '../Components/RoomItem.vue';
export default {
	components: {
		Navigation,
		Search,
		LeftCategory,
		RoomItem
	},

	data() {
		return {
			title: '更多房间',
			List: [
				{ title: '推荐房间', index: 0 },
				{ title: '推荐房间', index: 1 },
				{ title: '推荐房间', index: 2 },
				{ title: '推荐房间', index: 3 },
				{ title: '推荐房间', index: 4 },
				{ title: '推荐房间', index: 5 },
				{ title: '推荐房间', index: 6 },
				{ title: '推荐房间', index: 7 },
				{ title: '推荐房间', index: 8 },
				{ title: '推荐房间', index: 9 },
				{ title: '推荐房间', index: 10 },
				{ title: '推荐房间', index: 11 },
				{ title: '推荐房间', index: 12 },
				{ title: '推荐房间', index: 13 },
				{ title: '推荐房间', index: 14 },
				{ title: '推荐房间', index: 15 }
			]
		};
	},
	methods: {}
};
</script>

<style>
.create-room {
	width: 164rpx;
	height: 56rpx;
	line-height: 56rpx;
	margin-top: 20rpx;
	margin-right: 22rpx;
	color: #ffffff;
	font-size: 24rpx;
	/* border: 1rpx solid white; */
	border-radius: 25rpx;
	background-color: #343147;
}

/* 菜单 */
.item-list {
	display: flex;
	justify-content: space-between;
}

/* 左侧菜单组件 */
.LeftCategory {
	margin-top: 20rpx;
}

.RoomInfo {
	width: 516rpx;
	height: 200rpx;
}

.roomImg {
	width: 516rpx;
	height: 284rpx;
}

.roomImg image {
	width: 100%;
	height: 100%;
}

.roomTitle {
	width: 490rpx;
	height: 54rpx;
	line-height: 54rpx;
	font-size: 28rpx;
	color: #444444;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.people {
	display: flex;
	width: 150rpx;
	height: 30rpx;
	line-height: 30rpx;
	margin-left: 100rpx;
}

.peopleIcon {
	width: 30rpx;
	height: 30rpx;
	margin-right: 4rpx;
}

.peopleIcon image {
	width: 100%;
	height: 100%;
}

.peopleText {
	font-size: 24rpx;
	color: #999999;
}

/* 右侧菜单 */
.scroll-view {
	margin-left: 18rpx;
}

.RightRoomItem {
	height: 1200rpx;
}
</style>
