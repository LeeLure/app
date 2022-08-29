<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "有趣的人",
			}
		},
		components: {
			navigation,
		
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
