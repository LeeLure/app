<template>
	<!-- 更多有趣的人 -->
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
		<patterns :patterns="patterns">
		
		</patterns>
	
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import patterns from "@/components/patterns.vue"
	export default {
		data() {
			return {
				title: "有趣的人",
				patterns:[
					{
						name:'有趣的人',
						imgUrl:
							{img1:require("@/static/home/a.pic.jpg"),
							img2:require("@/static/home/b.pic.jpg"),
							img3:require("@/static/home/c.pic.jpg")},
							
						
					},
					{
						name:'有趣的人',
						imgUrl:
							{img1:require("@/static/home/a.pic.jpg"),
							img2:require("@/static/home/b.pic.jpg"),
							img3:require("@/static/home/c.pic.jpg")},
						
					}
				]
			}
		},
		components: {
			navigation,
			patterns
			
		},
		methods: {
			release() {
				console.log("hh");
			},
			skip() {
				console.log("hjjjh");
			
			},
			
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
