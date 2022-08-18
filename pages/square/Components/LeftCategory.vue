<template>
	<!-- 左侧菜单栏 -->
	<scroll-view :style="{ height: windowHeight - 10 + 'rpx' }" scroll-y>
		<view class="leftCategory" :style="{ height: windowHeight + 'rpx' }">
			<view class="category" @tap="changeTab(index)" v-for="(item, index) in List" :key="item.index">
				<view class="categroyItem">
					<!-- 背景色 -->
					<view :class="{ bgColor: isColor === item.index }"></view>
					<view class="text">{{ item.title }}</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: {
		List: {
			type: Array,
			require: true
		},
		windowHeight: Number
	},

	data() {
		return {
			isColor: 0
		};
	},

	methods: {
		changeTab(index) {
			this.isColor = index;
		}
	}
};
</script>

<style>
/* 左侧菜单 */
.leftCategory {
	width: 176rpx;
	/* border: 1rpx solid red; */
	/* height: 1130rpx; */
}

.category {
	display: flex;
	position: relative;
	height: 100rpx;
	background-color: #29253c;
	/* border: 1rpx solid #ffffff; */
	/* border-radius: 0 20rpx 20rpx 0; */
}

.bgColor {
	width: 58rpx;
	height: 100rpx;
	/* background-color: #1e1a32; */
	background-image: linear-gradient(90deg, #7221ea 0%, #221c40 100%);
}

.category .text {
	width: 96rpx;
	height: 34rpx;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #ffffff;
	font-size: 24rpx;
}
</style>
