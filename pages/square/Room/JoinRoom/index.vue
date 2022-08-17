<template>
	<!-- 加入房间页面 -->
	<view class="join-room">
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation :title="title"></Navigation>

		<!-- 人数 -->
		<PeopleNumber></PeopleNumber>

		<!-- tab -->
		<NavTab></NavTab>

		<!-- 商家信息 -->
		<Business></Business>

		<!-- 聊天输入框 -->
		<ChatBottomBar></ChatBottomBar>
	</view>
</template>

<script>
import Navigation from './Navigation.vue';
import PeopleNumber from './PeopleNumber.vue';
import NavTab from './NavTab.vue';
import Business from './Business.vue';
import ChatBottomBar from '../../../tidings/chat-details/bottom-bar.vue';
export default {
	components: {
		Navigation,
		PeopleNumber,
		NavTab,
		Business,
		ChatBottomBar
	},

	data() {
		return {
			title: '无剧本杀不狂欢！一起来寻找真相...'
		};
	},
	methods: {}
};
</script>

<style>
.join-room {
	padding-bottom: 170rpx;
}
</style>
