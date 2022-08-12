<template>
	<view class="category-title">
		<slot name="title"></slot>
	</view>
</template>

<script>
	export default {
		name:"category-title",
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.category-title{
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);
		line-height: 110rpx;
		padding-left: 20rpx;
	}
</style>
