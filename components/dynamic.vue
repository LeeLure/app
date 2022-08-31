<template>
	<view>

		<view class="particulars" v-for="(item,index) in list">
			<view class="batten">
				<view class="sculpture" @tap="homepage(item.uid)">
					<image :src="item.face" class="sculptureimage" v-if="item.face"></image>
					<image :src="item.avatarUrl" class="sculptureimage" v-else></image>
				</view>
				<view class="nickname">
					<view class="nicknamename">{{item.nikeName ||item.nickName}}</view>
					<view class="nicknametime">{{item.time ||item.descTime}}</view>
				</view>
				<view class="copywritingright">
					<image src="@/static/user/simi.png" class="copywritingimg" @tap="copywritingimg"></image>
				</view>
			</view>

			<view @tap="tendencies(item.id)">


				<view class="copywritingtext">
					{{item.content}}

				</view>


				<view class="flash">
					<picturearray :imgUrl="item.medias"></picturearray>
				</view>
				<view class="crumbs">
					<view class="crumbsview" v-if="item.topicName">#{{item.topicName}}</view>

				</view>
			</view>
			<view class="partake">

				<view class="partakeportrait">
					<view class="partakeportraits" v-if="item.userTopicVo">
						<block >
							<view class="partake1">
								<image :src="item.userTopicVo.userFaceTopicVoList[0].face" class="partakeimage"></image>
							</view>
							<view class="partake2"  v-if="item.userTopicVo.userFaceTopicVoList[1]">
								<image :src="item.userTopicVo.userFaceTopicVoList[1].face" class="partakeimage"></image>
							</view>
							<view class="partake3" v-if="item.userTopicVo.userFaceTopicVoList[2]">
								<image :src="item.userTopicVo.userFaceTopicVoList[2].face" class="partakeimage"></image>
							</view>
							<view class="conversation">{{item.userTopicVo.num}}人等参与了此话题</view>
						</block>
					</view>
				</view>


				<view class="praise" @tap="click(item)">
					<image src="@/static/home/dianzan.png" class="fabulous" v-if="!item.zan"></image>
					<image src="@/static/home/dianjishow.png" class="fabulous" v-else></image>
					<text class="praisetext">{{item.zanCount}}</text>
				</view>
				<view class="praise">
					<image src="@/static/home/pinglun.png" class="fabulous"></image>
					<text class="praisetext">{{item.commitCount}}</text>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import picturearray from "@/components/picturearray.vue"
	import { commentsLike,commentsDislike } from "@/config/home.js"
	export default {
		props: {
			exhibit: "",
			list: {},
			faceshow:''

		},
		data() {
			return {
				
				
			}
		},

		components: {

			picturearray,


		},
		methods: {
			click(item) {
				
				const id = item.id;
				
				const zan=item.zan
				
				if(zan==false){
					commentsLike({id:id}).then(res=>{						
				this.$emit("backHome"); 
						
					})
				}else{
					commentsDislike({id:id}).then(res=>{
						this.$emit("backHome"); 
						
					})
				}				
			},
			copywritingimg() {
				console.log("jh");
			},
			tendencies(id) {
				let query={
					id:id,
					show:''
				}
				if (this.exhibit == true) {
					 console.log(id,"poiu");
					uni.navigateTo({
						url: '/pages/home/moredynamic/tendencies/tendencies?query='+JSON.stringify(query)
					})
				}

			},
			homepage(uid) {	
				if(this.faceshow==false) return
				uni.navigateTo({
					url: '/pages/home/homepage/homepage?uid='+JSON.stringify(uid)
				})

			}

		}
	}
</script>

<style>
	.particulars {
		width: 720rpx;
		margin-left: 22rpx;
		margin-top: 28rpx;
		color: white;

	}

	.batten {
		display: flex;

	}

	.sculpture {
		width: 84rpx;
		height: 84rpx;
		border-radius: 41rpx;
		overflow: hidden;
	}

	.sculptureimage {
		width: 84rpx;
		height: 84rpx;
	}

	.nickname {

		margin-top: 10rpx;
		margin-left: 20rpx;
		width: 520rpx;
	}

	.nicknamename {
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
	}

	.nicknametime {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
	}



	.copywritingtext {
		font-size: 32rpx;
		color: white;
		margin-top: 16rpx;

	}

	.copywritingright {
		margin-left: 50rpx;


	}

	.copywritingimg {
		width: 30rpx;
		height: 30rpx;
	}

	.flashimage {
		width: 706rpx;
		height: 412rpx;
		border-radius: 30rpx;
	}

	.crumbs {
		margin-top: 34rpx;
	}

	.crumbsview {
		display: inline-block;
		padding: 10rpx 25rpx;
		height: 30rpx;
		line-height: 30rpx;
		border-radius: 20rpx;
		background-color: #29253C;
		font-size: 28rpx;
		margin-right: 20rpx;
		color: #2B7FDE;
	}

	.partake {
		display: flex;
		position: relative;
		margin-top: 20rpx;
		
	}

	.partakeportrait {
		width: 430rpx;
		
	}

	.partakeportraits {
		display: flex;
		
	}

	.partake1 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		border: 1rpx solid white;
	}

	.partake2 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		position: absolute;
		left: 25rpx;
		border: 1rpx solid white;
	}

	.partake3 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		position: absolute;
		left: 45rpx;
		border: 1rpx solid white;
	}

	.partakeimage {
		width: 40rpx;
		height: 40rpx;
		border-radius: 30rpx;
		
	}

	.conversation {
		line-height: 40rpx;
		font-size: 22rpx;
		color: rgba(255, 255, 255, 0.5);
		margin-left: 60rpx;
	
		margin-right: 80rpx;
	}

	.praise {

		margin-left: 30rpx;
		width: 100rpx;
	}

	.fabulous {
		width: 32rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.praisetext {
		font-size: 22rpx;
		vertical-align: middle;
		margin-left: 10rpx;
		color: white;
	}

	.flash {
		/* width:706rpx; */

		margin-top: 22rpx;
		border-radius: 30rpx;
	}
</style>
