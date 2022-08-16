<template>
	<view class="">
		<view class="bar"></view>
		<!-- 导航栏 -->
		<Navigation :title="title">
			<template #action>
				<view class="create-circle"><view class="text">创建圈子</view></view>
			</template>
		</Navigation>

		<!-- 搜索框 -->
		<Search></Search>

		<!-- 菜单 -->
		<view class="list">
			<!-- 左侧菜单栏 -->
			<LeftCategory :List="List"></LeftCategory>

			<!-- 右侧卡片 -->
			<scroll-view scroll-y>
				<view class="rightCategory">
					<view class="card" v-for="item in 10" @tap="toCircleHomePage(item)">
						<view class="card-img"><image src="../../../static/home/a.pic.jpg" mode=""></image></view>
						<view class="card-text">
							<!-- 文字标题 -->
							<view class="card-title">英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟英雄联盟</view>
							<!-- 中间数据 -->
							<view class="card-data">12345W圈友</view>
							<!-- 下方文字 -->
							<view class="card-desc">英雄联盟英雄联盟英雄联盟英雄联盟雄联盟英雄联盟英雄联盟英</view>
						</view>
						<!-- 按钮 -->
						<button class="card-button" @tap.stop="joinCircle">加入</button>
						<!-- <u-button size="small" class="card-button" text="+申请加入" ></u-button> -->
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- ------- -->
	</view>
</template>

<script>
import Navigation from '../../../components/navigation.vue';
import Search from '../Components/Search.vue';
import LeftCategory from '../Components/LeftCategory.vue';
export default {
	components: {
		Navigation,
		Search,
		LeftCategory
	},

	data() {
		return {
			title: '发现圈子',
			List: [
				{ title: '推荐圈子', index: 0 },
				{ title: '推荐圈子', index: 1 },
				{ title: '推荐圈子', index: 2 },
				{ title: '推荐圈子', index: 3 },
				{ title: '推荐圈子', index: 4 },
				{ title: '推荐圈子', index: 5 },
				{ title: '推荐圈子', index: 6 },
				{ title: '推荐圈子', index: 7 },
				{ title: '推荐圈子', index: 8 },
				{ title: '推荐圈子', index: 9 },
				{ title: '推荐圈子', index: 10 },
				{ title: '推荐圈子', index: 11 },
				{ title: '推荐圈子', index: 12 },
				{ title: '推荐圈子', index: 13 },
				{ title: '推荐圈子', index: 14 },
				{ title: '推荐圈子', index: 15 }
			]
		};
	},

	methods: {
		// 返回按键
		revert() {
			uni.navigateBack();
		},

		// 加入圈子
		joinCircle() {
			uni.showToast({});
		},

		// 圈子主页
		toCircleHomePage() {
			uni.navigateTo({
				url: '/pages/square/circle/CircleHomePage'
			});
		}
	}
};
</script>

<style>
/* 导航栏 */
.create-circle {
	width: 164rpx;
	height: 56rpx;
	line-height: 56rpx;
	margin-top: 20rpx;
	margin-right: 22rpx;
	color: #ffffff;
	font-size: 24rpx;
	/* border: 1rpx solid white; */
	border-radius: 25rpx;
	background-color: #343147;
}

/* 菜单 */
.list {
	display: flex;
	margin-top: 20rpx;
	/* border: 1rpx solid #ffffff; */
}

/* 右侧菜单 */
.rightCategory {
	width: 554rpx;
	height: 952rpx;
	margin-left: 20rpx;
}

.card {
	display: flex;
	width: 100%;
	position: relative;
	margin-top: 30rpx;
	height: 136rpx;
	/* border: 1rpx solid #fffff; */
}

.card-img {
	width: 136rpx;
	height: 136rpx;
	margin-right: 16rpx;
}

.card-img image {
	width: 95%;
	height: 95%;
	border-radius: 20rpx;
}

.card-text {
	width: 396rpx;
	background-color: transparent;
	/* border: 1rpx solid white; */
}

.card-title {
	/* margin-top: 8rpx; */
	width: 262rpx;
	color: #fff;
	font-size: 28rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-data {
	width: 272rpx;
	height: 32rpx;
	margin-top: 8rpx;
	font-size: 22rpx;
	color: #c9c4d5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-desc {
	width: 396rpx;
	/* height: 34rpx; */
	/* line-height: 34rpx; */
	margin-top: 12rpx;
	color: white;
	font-size: 20rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-button {
	position: absolute;
	width: 108rpx;
	height: 46rpx;
	line-height: 46rpx;
	right: 20rpx;
	font-size: 22rpx;
	text-align: center;
	border-radius: 30rpx;
	background-color: #ffee8c;
}
</style>
