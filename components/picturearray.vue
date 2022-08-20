<template>
	<view>
		<view v-if="imgUrl.length===1">
			<view class="arrayone" v-for="(item,index) in imgUrl" :key="index">
				<image :src="item.img" mode="aspectFill" class="arrayoneimg"></image>
				
			</view>
		</view>

		<view v-else-if="imgUrl.length===2">
			<view class="arraytwo">
				<block v-for="(item,index) in imgUrl" :key="index">
					<image :src="item.img" mode="aspectFill" class="arraytwoimg"></image>
				</block>
			</view>
		</view>

		<view v-else>
			<view class="arraythree">
				<block v-for="(item,index) in imgUrl" :key="index">
					<image :src="item.img" mode="aspectFill" class="arraythreeimg" ></image>
				</block>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "picturearray",
		data() {
			return {
				
			};
		},
		props: {
			imgUrl: {},
			


		},
		computed:{
		index(e){
			console.log(e);
		}
					
		},
			
		methods:{
			
		}
	
	}
</script>

<style>
	.arrayone {
		width: 704rpx;
		
		border-radius: 30rpx;
		margin-top: 10rpx;
		color: white;
	}

	.arrayoneimg {
		width: 100%;
		height: 412rpx;
		border-radius: 30rpx;
	}

	.arraytwo {
		width: 704rpx;
		
		border-radius: 30rpx;
		margin-top: 50rpx;
		
		display: flex;
		justify-content: space-between;

	}

	.arraytwoimg {
		width: 48%;
		height: 412rpx;
		border-radius: 30rpx;
	}

	.arraythree {
		margin-top: 10rpx;	
		width: 704rpx;		
		border-radius: 30rpx;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.arraythreeimg {

		width: 32%;
		height: 234rpx;
	}
	.arraythree .arraythreeimg:nth-of-type(n+4){
		margin-top: 18rpx;
		
	}
</style>
