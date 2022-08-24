<template>
	<view class="PeopleNumber">
		<!-- 房间信息 -->
		<view class="room">
			<view class="room-img"><image src="../../../../static/square/people-1.png" mode=""></image></view>
			<view class="room-people">6/8人</view>
			<view class="room-id">房间号：3567486</view>
		</view>

		<!-- 用户信息 -->
		<view class="room-user">
			<view v-for="item in list" class="user">
				<view class="user-img">
					<image  class="img" :src="item.src" alt="">
				</view>
				<view  class="user-name">{{item.name}}</view>
			</view>
			
			<view v-for="item in (8-list.length)" class="user">
				<view class="user-img">
					<image  class="img" src="../../../../static/square/def-ava.png" alt="">
				</view>
				<view  class="user-name">等待加入...</view>
			</view>
			
			<!-- <image v-else class="img" src="../../../../static/square/def-ava.png" alt=""> -->
		</view>
		
		<view class="room-user">
			
			
			<!-- <image v-else class="img" src="../../../../static/square/def-ava.png" alt=""> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'user-list',
		data() {
			return {
				list: [
					{name:'李嘉伟李嘉伟李嘉伟李嘉伟', src:'../../../../static/home/a.pic.jpg'},
					{name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
					{name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
					{name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
					// {name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
					// {name:'李嘉伟', src:'../../../../static/home/a.pic.jpg'},
				]
			}
		}
	}
</script> 

<style>
.room {
	display: flex;
	height: 40rpx;
	margin-top: 20rpx;
	/* background-color: skyblue; */
}

.room-img {
	width: 40rpx;
	height: 40rpx;
	margin: 0 8rpx 0 80rpx;
}

.room-img image {
	width: 100%;
	height: 100%;
}

.room-people {
	font-size: 24rpx;
	color: #ffffff;
	margin-top: 5rpx;
	opacity: 0.6;
}

.room-id {
	font-size: 24rpx;
	margin-left: 30rpx;
	color: #ffffff;
	margin-top: 5rpx;
	opacity: 0.6;
}

/* 用户信息 */

.room-user {
	margin: 34rpx 0 0 30rpx;
}

.user {
		display: inline-block;
		width: 132rpx;
		height: auto;
		text-align: center;
		margin: 30rpx 20rpx 0 20rpx;
		position: relative;
	}

	.user-img {
		width: 100%;
	}

	.user-img .img {
		width: 132rpx;
		height: 132rpx;
		border-radius: 50%;
	}

	.user-name {
		margin-top: 10rpx;
		font-size: 20rpx !important;
		color: #FFF;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

</style>
