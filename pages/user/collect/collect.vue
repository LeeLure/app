<template>
	<!-- 我收藏的 -->
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		

		<view v-for="(item,index)  in titles" :key="index" v-if="(titles.length>0)?true:false">
			<view class="list">
				<view class="collectleft">
					<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="collectimg"></image>
				</view>
				<view class="collectright">
					<view class="collectname">
						<view class="head">
							<view class="headfist">
								{{item.text}}
							</view>
							<view class="headtow">
								搭配I7显卡 高配置主机 畅玩无限
							</view>
						</view>
						<view class="tail">
							<image src="@/static/home/yishhoucang.png" class="tailimg"></image>
							<view class="tailtext">
								取消收藏
							</view>
						</view>
					</view>
					<view class="collectposition">
						<view class="">
							游戏/电竞
						</view>
						<view class="">
							游戏/电竞
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="empty" v-if="(titles.length==0)?true:false">
			<image src="@/static/user/shoucangkong.png" class="emptyimg"></image>
			<view class="emptytitle">
				你还没有收藏任何店铺，去 <text class="emptytext" @tap="home">首页</text>看看吧~
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "我的收藏",
				titles:[
					{text:"好来玩电竞网咖"},
					{text:"好来玩电竞网咖"},
					{text:"好来玩电竞网咖"}
				]
			}
		},
		components: {
			navigation
		},
		methods: {
			home() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
		}
	}
</script>

<style>
	.empty {}

	.emptyimg {
		width: 200rpx;
		display: block;
		margin-left: 280rpx;
		margin-top: 320rpx;
		height: 200rpx;
	}

	.emptytitle {
		margin-top: 44rpx;
		text-align: center;
		color: white;
		font-size: 32rpx;
	}

	.emptytext {
		color: #D53EDA;
	}

	.list {
		width: 750rpx;
		height: 230rpx;
		background-color: #29253C;
		margin-top: 20rpx;		
		display: flex;
	}

	.collectleft {
		width: 160rpx;
		height: 160rpx;
		
		border-radius: 20rpx;
		margin: auto 20rpx;
	}

	.collectimg {
		width: 160rpx;
		height: 160rpx;
		border-radius: 20rpx;
	}

	.collectright {
		margin:   auto 0rpx auto 0rpx;
		width: 530rpx;
	}

	.collectname {
		
		display: flex;
		justify-content: space-between;
	}

	.head {}

	.headfist {
		color: white;
		font-size: 28rpx;
	}

	.headtow {
		color: rgba(255, 255, 255, 0.8);
		font-size: 24rpx;
		margin-top: 24rpx;
	}

	.tail {
	}

	.tailimg {
		display: block;
		margin: 0 auto;
		height: 41rpx;
		width: 41rpx;
	}
	.tailtext {
		color: #FFEE8C;
		font-size: 24rpx;
		margin-top: 16rpx;
	}

	.collectposition {
		display: flex;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		margin-top: 26rpx;
	}
</style>
