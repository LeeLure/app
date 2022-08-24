<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view v-if="(titles.length>0)?true:false">

			<view class="blacklist" v-for="(item,index)  in titles" :key="index">
				<view class="blacklists">
					<image src="@/static/home/a.pic.jpg" mode="aspectFill" class="blacklistimg"></image>
				</view>
				<view class="blacklistright">
					<view class="blacklisttop">
						<view class="blacklist1">
							{{item.text}}
						</view>
						<view class="blacklist2" @tap="remove">
							移除
						</view>
					</view>
					<view class="blacklistbottom">
						时间就像海绵 时间就像海绵
					</view>
				</view>
			</view>
			<view class="text">
				加入黑名单后，将自动解除关注关系，Ta不能再关注您、@您、
				评论您的动态、也不能给您发私信
			</view>
		</view>

		<view class="remove" v-if="show">
			<view class="removetop">
				确定从黑名单中移除此用户吗？
			</view>
			<view class="removebottom">
				<view class="cancel" @tap="cancel">
					取消
				</view>
				<view class="determine" @tap="determine">
					确定
				</view>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view :class="show==true? 'active': 'shelter' ">


		</view>
		<view class="empty" v-if="(titles.length==0)?true:false">
			<image src="@/static/settings/hheimingdan.png" class="emptyimg"></image>
			<view class="emptytitle">
				加入黑名单后，将自动解除关注关系，Ta不能再关注您、@您、评论您的动态、也不能给您发私信
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "黑名单",
				titles: [{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					},
					{
						text: "好来玩电竞网咖"
					}
				],
				show: false
			}
		},
		components: {
			navigation
		},
		methods: {
			remove() {
				this.show = true

			},
			cancel() {
				this.show = false
			},
			determine() {
				this.show = false
			}

		}
	}
</script>

<style>
	.emptyimg {
		width: 200rpx;
		display: block;
		margin-left: 280rpx;
		margin-top: 320rpx;
		height: 200rpx;
		margin-bottom: 44rpx;
	}

	.emptytitle {

		color: rgba(255, 255, 255, 0.2);
		margin: 0 auto;
		width: 546rpx;
		height: 68rpx;
		font-size: 24rpx;
	}

	.blacklist {
		display: flex;
		width: 750rpx;
		height: 152rpx;
		/* border: 1px solid red; */
		background-color: #29253C;
		margin-top: 20rpx;
	}

	.blacklists {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
		margin-left: 20rpx;
		margin: auto 20rpx auto 22rpx;
	}

	.blacklistimg {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50rpx;
	}

	.blacklistright {
		margin: auto 0rpx auto 0rpx;
		/* border: 1px solid red; */
		width: 600rpx;

	}

	.blacklisttop {
		display: flex;
		justify-content: space-between;
	}

	.blacklist1 {
		font-size: 28rpx;
		color: #FFFFFF;
	}

	.blacklist2 {
		width: 96rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.1);

		border-radius: 30rpx;
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
	}

	.blacklistbottom {
		color: rgba(255, 255, 255, 0.5);

		font-size: 24rpx;
	}

	.text {
		width: 700rpx;
		margin-left: 20rpx;
		color: rgba(255, 255, 255, 0.2);
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.remove {
		position: absolute;
		left: 92rpx;
		top: 600rpx;
		width: 566rpx;
		height: 260rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		z-index: 4;
	}

	.removetop {
		text-align: center;
		color: white;
		font-size: 28rpx;
		margin-bottom: 54rpx;
		margin-top: 52rpx;
	}

	.removebottom {
		display: flex;
		justify-content: space-between;
		width: 400rpx;
		margin: 0 auto;
	}

	.cancel {
		width: 168rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #A28F21;
		font-size: 28rpx;
		background-color: #FFEE8C;
		border-radius: 36rpx;
	}

	.determine {
		line-height: 70rpx;
		text-align: center;
		width: 168rpx;
		height: 70rpx;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		font-size: 28rpx;
	}

	.active {
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.shelter {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -2;

	}
</style>
