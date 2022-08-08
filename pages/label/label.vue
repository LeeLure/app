<template>
	<view>
		<view class="bar">
		</view>

		<view class="number">
			<view @click="revert">
				返回上一步
			</view>
			<view>
				2/2
			</view>
		</view>
		<view class="news">
			请选择你的个性标签
		</view>
		<view class="choice">
			可为你匹配共同标签的好友
		</view>

		<view class="labellist">
			<view class="header">
				<view class="header1">
					情感
				</view>
				<view class="header2">
					可选{{number}}/1
				</view>
			</view>
			<view class="category">
				<view class="ac" :class="{ kun: checkedArrey.indexOf(i) != -1 }" v-for="(item,i) of items" :key="i"
					@click="appointment(i)">
					<view class="">{{item.val}}</view>
				</view>

			</view>

		</view>
		<view class="labellist">
			<view class="header">
				<view class="header1">
					情感
				</view>
				<view class="header2">
					可选{{number1}}/3
				</view>
			</view>
			<view class="category">
				<view class="ac" :class="{ kun: checkedArrey1.indexOf(i) != -1 }" v-for="(item,i) of items1" :key="i"
					@click="appointments(i)">
					<view class="">{{item.val}}</view>
				</view>

			</view>

		</view>
		<view class="complete" @click="switchtab">
			完成
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						val: '情感'
					},
					{
						val: '婚姻'
					},
					{
						val: '亲子'
					},
					{
						val: '个人'
					},
					{
						val: '心理'
					},
					{
						val: '职场'
					},
					{
						val: '人际'
					},
					{
						val: '情绪'
					},
					{
						val: '两性'
					}
				],
				items1: [{
						val: '情感'
					},
					{
						val: '婚姻'
					},
					{
						val: '亲子'
					},
					{
						val: '婚姻'
					},
					{
						val: '亲子'
					},
				],
				checkedArrey: [],
				checkedArrey1: [],
				number: 0,
				number1: 0,

			}
		},
		methods: {
			revert() {
				uni.navigateBack({
					delta: 1
				})
			},
			appointment(index) {
				let that = this;
				if (that.checkedArrey.indexOf(index) == -1 && that.checkedArrey.length < 1) {
					// console.log(index); //打印下标
					that.checkedArrey.push(index); //选中添加到数组里

				} else if (that.checkedArrey.length == 1 || that.checkedArrey.indexOf(index), 1) {
					uni.showToast({
						title: '最多只能选1个',
						duration: 1000,
						icon: 'none'
					})
					that.checkedArrey.splice(that.checkedArrey.indexOf(index), 1); //取消
				}
				that.number = that.checkedArrey.length
				console.log(that.number);
			},
			appointments(index) {
				let that = this;
				if (that.checkedArrey1.indexOf(index) == -1 && that.checkedArrey1.length < 3) {
					// console.log(index); //打印下标
					that.checkedArrey1.push(index); //选中添加到数组里

				} else if (that.checkedArrey1.length == 3 || that.checkedArrey1.indexOf(index), 3) {
					uni.showToast({
						title: '最多只能选3个',
						duration: 1000,
						icon: 'none'
					})
					that.checkedArrey1.splice(that.checkedArrey1.indexOf(index), 1); //取消
				}
				that.number1 = that.checkedArrey1.length

			},
			switchtab() {
				uni.reLaunch({
					url: "/pages/tabpage/home",
					success:function(res){
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background: linear-gradient(180deg, #1E1A32 0%, #0E0C17 100%);
		margin: 0;
		padding: 0;

	}

	.number {
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	.news {
		color: white;
		font-size: 44rpx;
		text-align: center;
		margin-top: 90rpx;
	}

	.choice {
		margin-top: 32rpx;
		color: #f5f7f99c;
		font-size: 28rpx;
		text-align: center;
	}

	.labellist {
		color: rgba(255, 255, 255, 0.521);
		margin-top: 90rpx;
	}

	.header {
		display: flex;
		justify-content: space-between;

		margin-left: 58rpx;
		margin-right: 58rpx;
	}

	.header1 {}

	.category {
		/* background-color: white; */
		display: flex;

		flex-wrap: wrap;
		margin-left: 32rpx;
	}



	.ac {
		width: 194rpx;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		margin-top: 30rpx;
		font-size: 32rpx;
		border-radius: 30rpx;
		background-color: rgba(255, 255, 255, 0.2);
		margin-left: 26rpx;


	}

	.kun {
		color: white;
		background-color: #B043FA;
	}

	.complete {
		width: 486rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		background-color: white;
		color: #B043FA;
		font-size: 28rpx;
		border-radius: 48rpx;
		position: absolute;
		bottom: 80rpx;
		left: 132rpx;
	}
</style>
