<template>
	<view class="list">

		<view class="lists">

			<view class="likeness">
				<image :src="namelist.avatarUrl" mode="aspectFill" class="likenessimg"></image>
			</view>
			<view class="right">
				<view class="reputationtop">
					<view class="reputation">
						<view class="reputationname">
							{{namelist.nickName}}
						</view>
						<view class="reputationsex" v-if="namelist.sex==0">
							<image src="@/static/user/nv.png" class="reputationimg"></image>
							女
						</view>
						<view class="reputationsex" v-else>
							<image src="@/static/user/nan.png" class="reputationimg"></image>
							男
						</view>
					</view>
					<view class="followlist">
						<view class="follow">
							<view class="follownumber">
								{{namelist.concern}}
							</view>
							<view class="followtext">
								关注
							</view>
						</view>
						<view class="follow">
							<view class="follownumber">
								{{namelist.vermicelli}}
							</view>
							<view class="followtext">
								粉丝
							</view>
						</view>
						<view class="follow">
							<view class="follownumber">
								{{namelist.like}}
							</view>
							<view class="followtext">
								受到喜欢
							</view>
						</view>



					</view>
				</view>
				<view class="reputationbottom">
					{{namelist.signature}}
				</view>
			</view>
		</view>

		<view class="countermark">
			<view class="countermarktop">
				<view class="countermarktext">
					{{namelist.constellation}}
				</view>
				<view class="countermarktext" v-for="item  in namelist.label">
					{{item}}
				</view>

			</view>
			<view class="countermarkbottom">
				<view class="countermarktitle" @tap="follow(namelist.whether)">
					<image src="@/static/home/guanzhu.png" v-if="!namelist.whether" class="countermarkimg"></image>
					<image src="@/static/home/yiguanzhu.png" v-else class="countermarkimg"></image>
					{{namelist.whether?"已关注":"关注"}}
				</view>
				<view class="countermarktitle">
					私信
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		otherConcern,
		otherNoConcern
	} from "@/config/home.js"
	export default {
		name: "information",
		data() {
			return {
		
			}
		},
		props: {
			namelist: {},
			uid: 0
		},
		methods: {
			follow(whether) {
				
				if (whether == false) {
					otherConcern({
						id: this.uid
					}).then(res => {
						this.$emit("backHome");


					})
				} else {
					otherNoConcern({
						id: this.uid
					}).then(res => {

				this.$emit("backHome");
					})
				}
			},

		}
	}
</script>

<style>
	.list {
		margin-top: 48rpx;
		margin-bottom: 50rpx;

	}

	.lists {
		color: white;
		display: flex;

	}

	.likeness {
		margin-left: 20rpx;
		width: 168rpx;
		height: 168rpx;
		border-radius: 100rpx;
		overflow: hidden;
	}

	.likenessimg {
		width: 100%;
		height: 100%;
	}

	.right {

		margin-left: 22rpx;
	}

	.reputationtop {
		display: flex;
	}

	.reputation {

		width: 130rpx;
		margin-top: 3rpx;

	}

	.reputationname {
		font-size: 32rpx;
		font-weight: 500;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		margin-bottom: 20rpx;

		padding-left: 10rpx;

	}

	.reputationsex {
		vertical-align: middle;
		font-size: 24rpx;
		color: white;
		width: 64rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background: #1A1824;
		border-radius: 26rpx;
		padding: 0 10rpx;


	}

	.reputationimg {
		width: 22rpx;
		height: 22rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}

	.followlist {

		width: 380rpx;
		display: flex;
		justify-content: space-between;
	}

	.follow {

		text-align: center;


	}

	.follownumber {
		font-size: 36rpx;
		font-weight: 500;
		color: white;
		text-align: center;
	}

	.followtext {
		color: rgba(255, 255, 255, 0.5);
		font-size: 28rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	.reputationbottom {
		color: rgba(255, 255, 255, 0.5);
		font-size: 24rpx;
		width: 510rpx;
		margin-top: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;

	}

	.countermark {
		margin-left: 20rpx;
		margin-top: 40rpx;
	}

	.countermarktop {
		display: flex;
	}

	.countermarktext {
		font-size: 24rpx;
		color: white;
		width: 72rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: #1A1824;
		border-radius: 26rpx;
		padding: 0 26rpx;
		margin-right: 20rpx;
	}

	.countermarkbottom {
		display: flex;
		margin-top: 20rpx;
	}

	.countermarktitle {
		font-size: 32rpx;
		color: white;
		vertical-align: middle;
		padding: 0 56rpx;
		
		height: 94rpx;
		line-height: 94rpx;
		text-align: center;
		background-color: #403B5Bcc;
		border-radius: 48rpx;
		margin-right: 20rpx;
	}

	.countermarkimg {
		vertical-align: middle;
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
</style>
