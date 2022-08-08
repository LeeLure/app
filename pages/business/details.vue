<template>
	<view>
		<!-- 导航栏 -->
		<view class="background">
			<image src="../../static/home/b.pic.jpg" mode="aspectFill" class="backgroundimg"></image>
		<navigation :title="title" class="a"></navigation>
		</view>
		
		<view class="box">
			<view class="mark">
				<view class="score">
					<view class="score1">
						好来玩电竞网咖
					</view>
					<view class="score1">
						<image src="../../static/home//pingfen.png" mode="aspectFill" class="scoreimg"></image>
						<image src="../../static/home//pingfen.png" mode="aspectFill" class="scoreimg"></image>
						<image src="../../static/home//pingfen.png" mode="aspectFill" class="scoreimg"></image>
						<image src="../../static/home//pingfen.png" mode="aspectFill" class="scoreimg"></image>
						<image src="../../static/home//pingfen.png" mode="aspectFill" class="scoreimg"></image>
						<text class="scoretext">5分</text>
					</view>
				</view>
				<view class="collect">
					
						<view class="share" v-if="flag" @tap="showTag">
							<image src="../../static/home/shoucang.png" mode="aspectFill" class="shareimg"></image>
							
							<view class="sharetext">
								收藏
							</view>
						</view>
						<view class="share" v-if="!flag" @tap="showTag">
							<image src="../../static/home/yishhoucang.png" mode="aspectFill" class="shareimg"></image>
							
							<view class="sharetext">
								已收藏
							</view>
						</view>
						<view class="share">
							<image src="../../static/home/fenxiang.png" mode="aspectFill" class="shareimg"></image>
							<view class="sharetext">
								分享
							</view>
						</view>
					
					
				</view>
			</view>
			<view class="percapita">
				<view class="percapita1">
					人均：
				</view>
				<view class="percapita2">
					¥551
				</view>
				<view class="percapita1">
					距您:
				</view>
				<view class="percapita2">
					1.6km
				</view>
			</view>
			<view class="percapita">
				<image src="../../static/home/dingwei.png" mode="aspectFill" class="percapitaimg"></image>
				<view class="percapitatext">
					余姚市弗雷尔卓德上单路365号（左边草丛）
				</view>
				<image src="@/static/home/dianhua.png" mode="aspectFill" class="percapitaimg"></image>
			</view>
			
			<view class="welfare">
				优惠福利（2）
			</view>
			
			<view class="coupon"  v-for="(item,index) in favourable" :key="index">
				<view class="couponlist" @tap="purchase">
					<view class="couponleft">
						<image src="../../static/home/a.pic.jpg" mode="aspectFill"  class="couponimg"></image>
					</view>
					<view class="couponright">
						<view class="coupontext">
							{{item.text}}
						</view>
						<view class="couponprice">
							<view class="couponprice1">
								¥333
							</view>
							<view class="couponprice2">
								行情价：¥999
							</view>
							
						</view>
						<view class="volume">
							销量：43546
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="welfare">
				用户评价（8735）
			</view>
			
			
			<view class="comment" v-for="(item,index) in comment" :key="item.id">
				<view class="headportrait">
					<image src="../../static/home/a.pic.jpg" mode="aspectFill" class="headportraitimg"></image>
					<view class="headportrait1">
						{{item.name}}
					</view>
					<view class="headportrait2">
						2022-08-09
					</view>
				</view>
				<view class="grade">
					<view class="grade1">
						给出评分
					</view>
					<view class="grade2">
						<image src="../../static/home/pingfen.png" mode="aspectFill" class="gradeimg"></image>
							<image src="../../static/home/pingfen.png" mode="aspectFill" class="gradeimg"></image>	<image src="../../static/home/pingfen.png" mode="aspectFill" class="gradeimg"></image>	<image src="../../static/home/pingfen.png" mode="aspectFill" class="gradeimg"></image>	<image src="../../static/home/pingfen.png" mode="aspectFill" class="gradeimg"></image>
					</view>
					<view class="grade3">
						环境可以
					</view>
					<view class="grade4">
						网速很快
					</view>
				</view>
				<view class="content">
				网咖非常不错！饮料 零食随便拿 哈哈哈哈哈哈	
				</view>
				
				
				<scroll-view scroll-x="true" class="scroll">
					<view class="scrollview">
						<view class="scrollview1"  v-for="(item,index) in item.img" :key="index">
							<image :src="item.img" mode="aspectFill" class="scrollviewimg"></image>
						</view>
						
					</view>
				</scroll-view>
				
				<view class="text">
					购买套餐：【人气爆款】329，价值599元高等配置 无购买套餐：【人气爆款】329，价值599元高等配置 无
				</view>
			</view>
			
			
			
		</view>
		
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				title: "商家详情",
				favourable:[
					{
						text:"[人气爆款]329，价值599元高等配置 无限畅玩通宵，饮料零食全提供"
					},
					{
						text:"hnhhdjhnjh"
					},{
						text:"hnhhdjhnjh"
					}
				],
				comment:[
					{
						id:177,
						name:"wqxd",
						img:[
							{
								img:"../../static/home/a.pic.jpg"
							},
							{
								img:"../../static/home/a.pic.jpg"
							},{
								img:"../../static/home/a.pic.jpg"
							}
						]
						
					},
					{
						id:233,
						name:"wqxd",
						img:[
							{
								img:"../../static/home/a.pic.jpg"
							},
							{
								img:"../../static/home/a.pic.jpg"
							}
						]
						
					}
					
				],
				// 收藏状态
				flag:true,
				
			}
		},
		components: {
			navigation
		},
		methods: {
			showTag() {
				this.flag = !this.flag;
			},
			purchase(){				
				uni.navigateTo({
					url: "/pages/business/purchase"
				})
			}
		}
	}
</script>

<style>
	.background{
		height: 482rpx;
		width: 750rpx;
	}
	.backgroundimg{
		width: 100%;
		height: 100%;
	}
.a{
	position: absolute;
	top: var(--status-bar-height);
}
.box{
	background-color:#29253C ;
	width: 100%;
	border-radius: 20rpx 20rpx 0  0 ;
	color: white;
	position: absolute;
	top: 450rpx;
	
}
.mark{
	display: flex;
	height: 120rpx;
	margin-top: 62rpx;
}
.score{
	margin-left: 20rpx;

}
.score1{
	font-size: 32rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	margin-top: 16rpx;
	
}
.scoreimg{
	width: 30rpx;
	height: 30rpx;
}
.scoretext{
	margin-left:40rpx ;
	font-size: 24rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	
	color: #FFEE8C;
}

.collect{
	display: flex;
	margin-left: 260rpx;
	
}
.share{

	width: 100rpx;
	height: 120rpx;
	margin-left: 10rpx;
	
}
.shareimg{
	display: block;
	width: 50rpx;
	height: 50rpx;
	margin:15rpx auto;
}
.sharetext{
	width: 100rpx;
	height: 80rpx;
	text-align: center;
	font-size: 24rpx;
	
}
.percapita{
	display: flex;
	height: 126rpx;
	line-height: 126rpx;
	
	width: 710rpx;
	border-bottom: 2rpx solid rgba(255, 255, 255, 0.1);
	margin-left: 20rpx;
}
.percapita1{
	font-family: PingFang SC-Regular, PingFang SC;
	color: rgba(255, 255, 255, 0.8);
	font-size: 24rpx;
}
.percapita2{
	margin-right: 30rpx;
	color: #FFEE8C;
	font-size: 24rpx;
	margin-left: 20rpx;
	
}
.percapitaimg{
	width: 40rpx;
	height: 40rpx;
	display: block;
	margin: auto 0;
}
.percapitatext{
	font-size: 28rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	margin-left: 10rpx;
	color: #FFEE8C;
	
	width: 620rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.welfare{
	font-size: 32rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	
	color: #FFFFFF;
	margin-left: 20rpx;
	margin-top: 46rpx;
	margin-bottom: 20rpx;
}
.coupon{
	
}
.couponlist{
	display: flex;
	height: 204rpx;
}
.couponleft{
	margin-left: 20rpx;
	
	height: 168rpx;
	margin: auto 20rpx;
	width: 160rpx;
}
.couponimg{
	width: 160rpx;
	height: 168rpx;
	border-radius:20rpx ;
	
}
.couponright{

	
	height: 168rpx;
	margin: auto 6px;
}
.coupontext{
	color: rgba(255, 255, 255, 0.8);
	font-size: 24rpx;
	
	height: 80rpx;
}
.couponprice{
	display: flex;
	
}
.couponprice1{
	font-size: 32rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #FFEE8C;
	
}
.couponprice2{
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 10rpx;
	margin-left: 30rpx;
}
.volume{
	margin-top: 10rpx;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
}
.comment{
	
}
.headportrait{
	display: flex;
	
	height: 80rpx;
	margin-top: 30rpx;
}
.headportraitimg{
	width: 76rpx;
	height: 76rpx;
	border-radius: 38rpx;
	margin-left:  20rpx;
	
	
}
.headportrait1{
	width: 200rpx;
	font-size: 28rpx;

	margin: auto 20rpx;
}
.headportrait2{
	margin: auto 0rpx auto  260rpx;

	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.5);
}

.grade{
	display: flex;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.8);
	margin-top: 20rpx;
}
.grade1{
	margin-left: 20rpx;
	
}
.grade2{
	margin-left: 20rpx;
}
.gradeimg{
	width: 25rpx;
	height: 25rpx;
}
.grade3{
	margin-left: 20rpx;
}
.grade4{
	margin-left: 20rpx;
}
.content{
	font-size: 28rpx;
	font-family: PingFang SC-Regular, PingFang SC;
	margin-top: 20rpx;
	margin-left: 20rpx;
	color: #FFFFFF;
}

.scroll{
	margin-left: 20rpx;
	width: 700rpx;
}
.scrollview{
	margin-top: 20rpx;
	display: flex;
	
	
	
}
.scrollview1{
	width: 266rpx;
	margin-right: 20rpx;
	height: 274rpx;
	border-radius: 10rpx;
	
}
.scrollviewimg{
	width: 266rpx;
	height: 274rpx;
	border-radius: 10rpx;
}
.text{
	margin-top: 20rpx;
	width: 705rpx;
	margin-left: 20rpx;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.8);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-bottom: 40rpx;
}
</style>
