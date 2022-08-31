<template>
	<!-- 加入房间页面 -->
	<view class="join-room">
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation :title="title"></Navigation>

		<!-- 人数 -->
		<PeopleNumber :roomId="roomId"></PeopleNumber>

		<!-- tab -->
		<NavTab :swiperheight="swiperheight"></NavTab>
	</view>
</template>

<script>
import Navigation from './Navigation.vue';
import PeopleNumber from './PeopleNumber.vue';
import NavTab from './NavTab.vue';
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
			roomId: ''
		};
	},

	onLoad(option) {
		this.swiperheight = uni.getSystemInfoSync().windowHeight * 2;
		// console.log(this.swiperheight);
		// console.log(option.roomId);
		this.roomId = option.roomId;
	},

	methods: {}
};
</script>

<style>
.join-room {
	/* padding-bottom: 170rpx; */
}
</style>
