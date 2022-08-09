<template>
	<view>
		<view class="uni-tabbar">
		<!-- //遍历tabbar -->
			<view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
				<view class="uni-tabbar__bd">
					<view class="uni-tabbar__icon">
					<!-- //判断tabbar点击过后的图片路径 -->
						<image v-if="item.pagePath == pagePath" class="icon-img" :src="item.selectedIconPath" mode="aspectFit"></image>
						<image v-else class="icon-img" mode="aspectFit" :src="item.iconPath"></image>
					</view>
				</view>
				<!-- //判断tabbar点击前后的样式 -->
				<view class="uni-tabbar__label" :class="{'active': item.pagePath == pagePath}">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		props: {
		//从父级继承过来的属性 需要在父级中使用:pagePath='pagePath',
			pagePath: String
		},
		data() {
			return {
				// page: '',
				showPage: false,
				containerHeight: 400,
				//公共的tabbar
				tabbar: [{
						"pagePath": "/pages/home/home",
						"iconPath": "/static/index.png",
						"selectedIconPath": "/static/indexSelected.png",
						"text": "首页"
					},
					{
						"pagePath": "/pages/square/square",
						"iconPath": "/static/all.png",
						"selectedIconPath": "/static/allSelected.png",
						"text": "广场"
					},{
						"pagePath": "/pages/tidings/tidings",
						"iconPath": "/static/me.png",
						"selectedIconPath": "/static/meSelected.png",
						"text": "消息"
					},
					{
						"pagePath": "/pages/user/my",
						"iconPath": "/static/me.png",
						"selectedIconPath": "/static/meSelected.png",
						"text": "我的"
					}
				]
			};
		},
		watch: {
			pagePath: {
				handler(pagePath) {
					console.log('pagePath监听===val', pagePath)
				},
				immediate: true
			}
		},
		mounted() {
			// 根据自己的业务需求判断条件为true，替换即可,根据权限设置的tabbar	
			//第三个参数为插入项,第一个参数为第一项位置，第二个参数为要删除几个。
			// if (true) {
			// 	this.tabbar.splice(3, 0, {
			// 			"pagePath": "pages/wareHouse/wareHouse",
			// 			"iconPath": "/static/cart.png",
			// 			"selectedIconPath": "/static/cartSelected.png",
			// 			"text": "出入库"
			// 		}
			// 	)
			// }
		},
		methods: {
			changeTab(item) {
				this.page = item.pagePath;
				// 使用reLaunch关闭所有的页面，打开新的栏目页面
				// console.log(item.pagePath)
				// console.log(this.page)
				uni.switchTab({
					url:this.page,
				});
					
			
				
			},
		}
	}
</script>



<style lang="scss">
	.uni-tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		padding: 16rpx 0;
		box-sizing: border-box;
		border-top: solid 1rpx #ccc;
		background-color: #fff;
		box-shadow: 0px 0px 17rpx 1rpx rgba(206, 206, 206, 0.32);

		.uni-tabbar__item {
			display: block;
			line-height: 24rpx;
			font-size: 20rpx;
			text-align: center;
			width: 25%;
		}

		.uni-tabbar__icon {
			height: 24px;
			line-height: 24px;
			text-align: center;
		}

		.icon {
			display: inline-block;
		}

		.uni-tabbar__label {
			line-height: 24rpx;
			font-size: 24rpx;
			color: #999;

			&.active {
				color: #C81816;
			}
		}

		.icon-img {
			height: 24px;
			width: 24px;
		}
	}
</style>

