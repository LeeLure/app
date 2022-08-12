<template>
	<view>
		<category-title>
			<template #title>
				圈子公告
			</template>
		</category-title>
		<view class="notice">
			英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地英雄联盟玩家的聚集地
		</view>

	</view>
</template>

<script>
	import categoryTitle from "./title.vue"
	export default {
		name: "category-notice",
		components: {
			categoryTitle
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.notice {
		background-color: #29253C;
		border-radius: 20rpx;
		padding: 14rpx 30rpx;
		box-sizing: border-box;
		width: 100%;
		font-size: 26rpx;
		line-height: 40rpx;
		color: rgba(255, 255, 255, 0.6);
	}

</style>
