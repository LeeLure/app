<template>
	<view>
		<!-- 推送通知设置 -->
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="fit1">
			<view class="fitlist1">
				<view class="kind1">
					深夜免打扰
				</view>
				<view class="goto">
					<u-switch v-model="value1" asyncChange @change="asyncChange" size="16" space="2"
						activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
				</view>
			</view>
			<view class="tips">
				开启后，每日23点至次日6点间不会收到推送
			</view>

		</view>

		<view class="advises">
			互动通知
		</view>
		<view class="fit" >
			<view class="fitlist  border" @tap="choice(item.text)"  v-for="(item ,index) in  prices" :key="index">
				<view class="kind">
					{{item.text}}
				</view>
				<view class="goto">

					<image src="@/static/settings/jinnru.png" class="gotoimage"></image>
				</view>
			</view>
			
			<view class="fit1  ">
				<view class="fitlist1">
					<view class="kind1">
						有人喜欢了我
					</view>
					<view class="goto">
						<u-switch v-model="value2" asyncChange @change="asyncChange" size="16" space="2"
							activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
					</view>
				</view>
				<view class="tips border">
					开启后，上传至有趣的人被人喜欢后不会收到通知
				</view>
			
			</view>
			<view class="fit1">
				<view class="fitlist1">
					<view class="kind1">
						活动开始提醒
					</view>
					<view class="goto">
						<u-switch v-model="value3" asyncChange @change="asyncChange" size="16" space="2"
							activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
					</view>
				</view>
				<view class="tips">
					开启后，即将开始的活动将不会通知你
				</view>
			
			</view>


		</view>
<view class="advises">
			聊天通知
		</view>
<view class="fit1">
			<view class="fitlist1">
				<view class="kind1">
					私信消息
				</view>
				<view class="goto">
					<u-switch v-model="value4" asyncChange @change="asyncChange" size="16" space="2"
						activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
				</view>
			</view>
			<view class="tip border">
			</view>
			<view class="fitlist1">
				<view class="kind1">
					有新的群消息
				</view>
				<view class="goto">
					<u-switch v-model="value5" asyncChange @change="asyncChange" size="16" space="2"
						activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
				</view>
			</view>
			<view class="tip">
			</view>

		</view>
		
		<view class="advises">
			互动通知
		</view>
		<view class="fit1">
					<view class="fitlist1">
						<view class="kind1">
							私信消息
						</view>
						<view class="goto">
							<u-switch v-model="value6" asyncChange @change="asyncChange" size="16" space="2"
								activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
						</view>
					</view>
					<view class="tip border">
					</view>
					<view class="fitlist1">
						<view class="kind1">
							有新的群消息
						</view>
						<view class="goto">
							<u-switch v-model="value7" asyncChange @change="asyncChange" size="16" space="2"
								activeColor="#D53EDA " inactiveColor="rgb(230, 230, 230)" class="btn"></u-switch>
						</view>
					</view>
					<view class="tips">
						开启后，发布的原创动态被官方推荐至发现页后不会收到通知
					</view>
		
				</view>
		<view class="kongbai">
			
		</view>
		
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {				
				
					prices: [
						{
							text:"有人点赞/评论/回复我"
						},
						{
							text:"有人关注了我"
						}
						,{
							text:"有人@了我"
						},
						{
							text:"有人转发了我的动态"
						}
						
					
					],
				title: "推送通知设置",
				value1: true,
				value2: true,
				value3: true,
				value4: true,
				value5: true,
				value6: true,
				value7: true,
				text:''
				

			}
		},
		components: {
			navigation
		},
		methods: {
			asyncChange(e) {
				// uni.showModal({
				// 	content: e ? '确定要打开吗' : '确定要关闭吗',
				// 	success: (res) => {
				// 		if (res.confirm) {
				// 			this.value13 = e
				// 		}
				// 	}
				// })
				this.value1 = e
				
			},
			choice(e){
				
				this.text=e
				console.log(this.text);
				uni.navigateTo({
					url:"/pages/settings/notice/election/election?title="+this.text
				})
			}
		}
	}
</script>

<style>
	.fit {
		color: white;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-top: 20rpx;

	}


	.fitlist {
		display: flex;
		justify-content: space-between;
		height: 118rpx;
		line-height: 118rpx;
		width: 708rpx;
		margin-left: 24rpx;


	}

	.kind {
		font-size: 28rpx;
		/* margin-top: 40rpx; */
	}


	.goto {


		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.fit1 {
		color: white;
		border-radius: 30rpx;
		background-color: #29253C;
		margin-top: 20rpx;
		
	}

	.fitlist1 {
		display: flex;
		justify-content: space-between;
		/* height: 128rpx;
			line-height: 128rpx; */
		width: 708rpx;
		margin-left: 24rpx;


	}

	.kind1 {
		font-size: 28rpx;
		margin-top: 40rpx;
	}

	.btn {
		margin-top: 40rpx;
	}

	.gotoimage {

		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
	}

	.tips {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		width: 708rpx;
		margin-left: 24rpx;
		margin-top: 10rpx;
		height: 70rpx;
		/* border:  1px solid  red; */

	}
	.tip {	
		height: 40rpx;
	}
	.advises {
		margin-top: 20rpx;
		margin-left: 34rpx;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.5);
	}

	.border {
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.05);
	}
	.kongbai{
		height: 60rpx;
	}
</style>
