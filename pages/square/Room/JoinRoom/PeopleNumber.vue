<template>
	<view class="PeopleNumber">
		<!-- 房间信息 -->
		<view class="room">
			<view class="room-img"><image src="../../../../static/square/people-1.png" mode=""></image></view>
			<view class="room-people">{{roomInfo.current}}/{{roomInfo.peopleNum}}人</view>
			<view class="room-id">房间号：{{roomId}}</view>
		</view>

		<!-- 用户信息 -->
		<view class="room-user">
			<view v-for="(item, index) in roomInfo.userList" class="user" @tap="checkDetail(item,index)">
				<view class="user-img">
					<image   class="img" :src="item.avatarUrl" alt="">
				</view>
				<view  class="user-name">{{item.nikeName}}</view>
			</view>
				<view class="show-detail" v-if="showDialog">
					<view class="category">
						查看资料
					</view>
					<view class="category">
						踢出房间	
					</view>
					<view class="category">
						举报
					</view>
				</view>
				
				<template v-if="roomInfo.userList && roomInfo.userList.length > 0">
					<view  v-for="item in (8-  roomInfo.userList.length)" class="user">
						<view class="user-img">
						<image  class="img" src="../../../../static/square/def-ava.png" alt="">
						</view>
						<view  class="user-name">等待加入...</view>
					</view>
				</template>
			
			
			<!-- <image v-else class="img" src="../../../../static/square/def-ava.png" alt=""> -->
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'user-list',
		
		props: {
			roomId:{
				type:String,
				required:true
			},
			
			roomInfo:{
				type:Object,
				required:true
			}
			
		},
		
		data() {
			return {
				showDialog:false
			}
		},
		
		onLoad() {
			// console.log(this.userList);
		},
		
		
		methods:{
			checkDetail(item,index) {
				console.log(item , index);
				this.showDialog = true
				
			},
			
			close() {
				this.showDialog = false
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
		position: relative;
		width: 132rpx;
		height: auto;
		text-align: center;
		margin: 30rpx 20rpx 0 20rpx;
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


.show-detail {
	position: absolute;
	width: 202rpx;
	height: 280rpx;
	top: 0;
	left: 0;
	background-color: #29253C;
	border-radius: 20rpx;
	border: 1rpx solid rgba(15, 13, 25,0.5);
	padding: 0 14rpx;
}

.category {
	height: 82rpx;
	line-height: 82rpx;
	font-size: 24rpx;
	color: #FFF;
	text-align: center;
	border-bottom: 1rpx solid ;
}

.category:nth-child(2) {
	height: 112rpx;
	line-height: 112rpx;
}

.category:nth-child(3) {
	border: 0;
}
</style>
