<template>
	<!-- 加入房间页面 -->
	<view class="join-room">
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation class="navigation" @type="changeType" :title="title">
			<template>
				<view class="navigation-detail" @tap="menu"><image src="@/static/square/det.png" mode=""></image></view>
			</template>

			<view class="menu" v-if="isMenu">
				<view class="share">分享房间</view>

				<view class="out-room" @tap="outRoom">退出房间</view>
			</view>
		</Navigation>

		<!-- 人数 -->
		<PeopleNumber :roomId="roomId" :roomInfo="roomInfo" :homeownerId="homeownerId"></PeopleNumber>

		<!-- tab -->
		<NavTab :swiperheight="swiperheight"></NavTab>

		<!-- 遮罩层 -->
		<view :class="isMenu == true ? 'active' : 'shelter'" @tap="close"></view>
	</view>
</template>

<script>
import Navigation from './Navigation.vue';
import PeopleNumber from './PeopleNumber.vue';
import NavTab from './NavTab.vue';
import { LtsMineMyHome } from '@/config/user.js';
import { joinRoom, roomList } from '@/config/square.js';
export default {
	components: {
		Navigation,
		PeopleNumber,
		NavTab
	},

	data() {
		return {
			title: '无剧本杀不狂欢！一起来寻找真相...',
			swiperheight: 0,
			roomId: '',
			Type: 2,
			userId: '',
			roomInfo: {},
			homeownerId: '',
			isMenu: false
			// userList: [
			// 	{ nickName: '李嘉伟李嘉伟李嘉伟李嘉伟', src: '../../../../static/home/a.pic.jpg' },
			// 	{ nickName: '李嘉伟', src: '../../../../static/home/a.pic.jpg' },
			// 	{ nickName: '李嘉伟', src: '../../../../static/home/a.pic.jpg' },
			// 	{ nickName: '李嘉伟', src: '../../../../static/home/a.pic.jpg' }
			// 	// {name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
			// 	// {name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
			// ]
		};
	},

	onLoad(option) {
		this.swiperheight = uni.getSystemInfoSync().windowHeight * 2;

		this.roomId = option.roomId;

		this.getUserInfo();

		this.getRoomList(this.roomId);
	},

	methods: {
		outRoom() {
			this.Type = 2;
			// console.log(this.Type);

			setTimeout(() => {
				this.tojoinRoom();
			}, 0);
			// uni.navigateBack();
			console.log('我要退出');
		},

		menu() {
			this.isMenu = true;
		},

		close() {
			this.isMenu = false;
		},

		// 获取用户信息
		async getUserInfo() {
			const res = await LtsMineMyHome().catch(e => {
				console.log(e);
			});
			this.userId = res.userId;

			this.tojoinRoom();

			this.$store.commit('user/keepUid', res.userId);
		},

		// 加入房间
		async tojoinRoom() {
			const res = await joinRoom({ roomId: this.roomId, Type: this.Type }).catch(e => {
				console.log(e);
			});

			console.log(res + '123');
			this.getRoomList(this.roomId);
		},

		// 房间成员
		async getRoomList(id) {
			// console.log(id);
			const res = await roomList({ id: id }).catch(e => {
				console.log(e);
			});

			this.roomInfo = res;

			console.log(this.roomInfo);

			this.homeownerId = JSON.stringify(res.homeownerId);
		}
	}
};
</script>

<style>
.join-room {
	/* padding-bottom: 170rpx; */
}

.navigation {
	position: relative;
}

.navigation-detail {
	width: 30rpx;
	height: 30rpx;
	margin: 5rpx 15rpx 0 100rpx;
}

.navigation-detail image {
	width: 100%;
	height: 100%;
	/* background-color: #fff; */
}

.menu {
	position: absolute;
	width: 202rpx;
	top: 100rpx;
	right: 0;
	font-size: 24rpx;
	color: #fff;
	border-radius: 20rpx;
	background-color: #29253c;
	z-index: 3;
}

.share {
	margin: 0 14rpx;
	border-bottom: 1rpx solid;
}

/* 遮罩层 */
.active {
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 2;
}

.shelter {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: -2;
}
</style>
