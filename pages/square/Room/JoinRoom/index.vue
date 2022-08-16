<template>
	<view>
		<view class="bar"></view>

		<!-- 导航栏 -->
		<Navigation :title="title"></Navigation>

		<!-- 人数 -->
		<PeopleNumber></PeopleNumber>

		<!-- tab -->
		<NavTab></NavTab>
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
			title: '无剧本杀不狂欢！一起来寻找真相...'
		};
	},
	methods: {}
};
</script>

<style></style>
