<template>
	<view>
		<view class="bar">
				</view>
				<navigation :title="title"> </navigation>
				<input type="text" maxlength="15" placeholder="请选择类型" placeholder-class="placeholder" class="input">
				
				
				
		<view class="list">			
			<view :class="[number==index?'active':'listtext']" v-for="(item,index) in texts" :key="index" @tap="active(index)">
				{{item.text}}
			</view>
		</view>
				<view class="establish">
					
					确定
				</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				
				title: "选择类型",
				texts:[
					{text:"穿越火线"},
					{text:"穿越火线"},
					{text:"穿越火线"},
					{text:"穿越火线"},
					{text:"穿越火线"},
					{text:"穿越火线"},
					{text:"穿越火线"},
				],
				number:-1
			}
		},
		components: {
			navigation
		
		
		},
		methods: {
			active(index){
				this.number=index
			}
		}
	}
</script>

<style>
.placeholder{
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}
	.input{
		color: #2B7FDE;
		background-color:#29253C ;
		padding-left: 20rpx;
		margin-left: 20rpx;
		width: 690rpx;
		height: 68rpx;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
	}
	.listtext{
		width: 210rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 20rpx;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}
	.active{
		width: 212rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		background-color: #B043FA;
		border-radius: 20rpx;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}
	.establish {
		width: 544rpx;
		height: 106rpx;
		line-height: 106rpx;
		text-align: center;
		background: linear-gradient(174deg, #D53EDA 0%, #D53EDA 100%);
		border-radius: 54rpx;
		font-size: 28rpx;
		color: white;
		vertical-align: middle;
		margin: 180rpx auto;
	}
</style>
