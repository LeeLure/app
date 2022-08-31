<template>
	<!-- 加入房间页面 -->
	<view class="join-room">
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation :title="title"></Navigation>

		<!-- 人数 -->
		<PeopleNumber :roomId="roomId" :roomInfo="roomInfo" :homeownerId="homeownerId"></PeopleNumber>

		<!-- tab -->
		<NavTab :swiperheight="swiperheight"></NavTab>
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
			Type: 1,
			userId: '',
			roomInfo: {},
			homeownerId: ''
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

	// 退出房间
	// beforeDestroy() {
	// 	this.Type = 2;

	// 	this.tojoinRoom(this.userId);

	// 	console.log('我退出了');
	// },

	methods: {
		// 获取用户信息
		async getUserInfo() {
			const res = await LtsMineMyHome().catch(e => {
				console.log(e);
			});
			this.userId = res.userId;

			this.tojoinRoom(res.userId);

			this.$store.commit('user/keepUid', res.userId);
		},

		// 加入房间
		async tojoinRoom(uid) {
			this.userId = uid;

			// console.log(this.roomId, this.userId);

			const res = await joinRoom({ roomId: this.roomId, Type: this.Type, uid }).catch(e => {
				console.log(e);
			});
		},

		// 房间
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
</style>
