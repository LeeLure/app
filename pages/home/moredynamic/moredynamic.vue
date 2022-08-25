<template>
	<!-- 动态 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title">
			<view class="head">
				<image src="@/static/home/tiaozhuan.png" class="headimg" @tap="release"></image>
				<image src="@/static/home/shaixuan.png" class="headimg" @tap="skip"></image>
			</view>
		</navigation>

		<dynamic :list="list" :exhibit="exhibit"></dynamic>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import dynamic from "@/components/dynamic.vue"
	export default {
		data() {
			return {
				title: "动态",
				list:[],
				exhibit:true
			}
		},
		components: {
			navigation,
			dynamic
		},
		onLoad(options) {
			const query = JSON.parse(options.query)
			this.list = query
			console.log(11111,this.list);
		
			
		
		},
		methods: {
			release() {
				console.log("hh");
			},
			skip() {
				console.log("hjjjh");

			}
		}
	}
</script>

<style>
	.head {
		
		width: 150rpx;
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;

	}

	.headimg {
		width: 40rpx;
		height: 40rpx;
		display: block;
	}
</style>
