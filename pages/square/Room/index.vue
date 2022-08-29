<template>
	<!-- 更多房间页面 -->
	<view style="color: azure;">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation :title="title">
			<template>
				<view class="create-room" @tap="toCreateRoom"><view class="text">创建房间</view></view>
			</template>
		</Navigation>

		<!-- 搜索框 -->
		<Search></Search>

		<view class="item-list" :style="{ height: windowHeight + 2 + 'rpx' }">
			<!-- 左侧菜单 -->
			<LeftCategory class="LeftCategory" :windowHeight="windowHeight" :List="List"></LeftCategory>

			<!-- 右侧房间列表 -->
			<view class="RightRoomItem">
				<scroll-view class="scroll-view" scroll-y :style="{ height: windowHeight - 8 + 'rpx' }">
					<RoomItem class="RoomItem" v-for="item in roomList" :key="item.id" :id="item.id">
						<template #img>
							<view class="roomImg"><image :src="item.images" mode=""></image></view>
						</template>
						<!-- <view class="RoomInfo"> -->
						<template #title>
							<view class="roomTitle">{{ item.title }}</view>
						</template>
						<template #time>
							<view class="time">
								<image class="timeIcon" src="../../../static/square/time.png" mode=""></image>
								{{ item.date }} {{ item.week }} {{ item.hdate }}
							</view>
						</template>
						<template #add>
							<view class="addIcon"><image src="../../../static/square/add.png" mode=""></image></view>
							<view class="addText">余姚&nbsp;&nbsp;|&nbsp;&nbsp;距你</view>
							<text class="juli">568m</text>
						</template>
						<!-- 房间人数 -->
						<template #footer>
							<view class="people">
								<view class="peopleIcon"><image src="../../../static/square/people.png" mode=""></image></view>
								<view class="peopleText">现有6/8人</view>
							</view>
						</template>
					</RoomItem>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import Navigation from '../../../components/navigation.vue';
import Search from '../Components/Search.vue';
import LeftCategory from '../Components/LeftCategory.vue';
import RoomItem from '../Components/RoomItem.vue';
import { squareRoomList } from '@/config/square.js';
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
			windowHeight: 0,
			roomList: [],
			config: {
				categoryId: '',
				detail: '',
				id: '',
				limit: 10,
				page: 1,
				state: 1
			},
			loes: {
				categoryId: 1,
				detail: '创建房间',
				image: 'http://baidu.com',
				lat: 10.1,
				lng: 14.4,
				name: '啊啊啊啊',
				peopleNum: 6,
				time: '2022-08-25T05:27:33.729Z'
			},
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

	onLoad() {
		this.getWindowHeight();

		this.getRoomList();
	},

	methods: {
		// 获取屏幕高度
		getWindowHeight() {
			const res = uni.getSystemInfoSync();
			// console.log(res);
			this.windowHeight = res.windowHeight * 2 - 188;
			// console.log(this.windowHeight);
		},

		async getRoomList() {
			const res = await squareRoomList({ config: this.config }).catch(e => {
				console.log(e);
			});

			// console.log(res);

			this.roomList = res.rows;
			// console.log(this.roomList);
		},

		toCreateRoom() {
			uni.navigateTo({
				url: '/pages/release/room/room'
			});
		}
	}
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

/* .create-room .text { */
/* color: #ffffff; */
/* z-index: 20; */
/* } */

/* 菜单 */
.item-list {
	display: flex;
	justify-content: space-between;
	/* overflow: hidden; */
}

/* 左侧菜单组件 */
.LeftCategory {
	margin-top: 30rpx;
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
	/* margin-left: 20rpx; */
}

.RightRoomItem {
	/* height: 1130rpx; */

	padding-right: 30rpx;
	margin-top: 30rpx;
	padding-bottom: 30rpx;
}

.RoomItem {
	margin-bottom: 30rpx;
}

.time {
	display: flex;
	font-size: 24rpx;
	color: #999999;
	vertical-align: middle;
}

.timeIcon {
	vertical-align: middle;
	width: 30rpx;
	height: 30rpx;
	margin: 4rpx 6rpx 0 0;
	/* margin-top: 4rpx; */
}

.addText {
	margin-left: 4rpx;
}

.juli {
	color: #b043fa;
}

.addIcon {
	width: 30rpx;
	height: 30rpx;
	margin-right: 6rpx;
}

.addIcon image {
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
</style>
