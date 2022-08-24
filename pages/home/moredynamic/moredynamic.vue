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

		<dynamic :imgUrl="imgUrl" :exhibit="exhibit"></dynamic>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import dynamic from "@/components/dynamic.vue"
	export default {
		data() {
			return {
				title: "动态",
				imgUrl: [{
						img: require("@/static/home/a.pic.jpg")
					},
					{
						img: require("@/static/home/a.pic.jpg")
					},
				],
				exhibit:true
			}
		},
		components: {
			navigation,
			dynamic
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
