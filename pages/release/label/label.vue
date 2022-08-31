<template>
	<!-- 选择标签页 -->
	<view>
		<view class="bar">
		</view>
		<navigation :title="title">
			<view class="release" @tap="goBack">
				确定
			</view>
		</navigation>
		<input type="text" maxlength="15" placeholder="#请输入标签" placeholder-class="placeholder" v-model="name"
			class="input" :class="show?'inputactive':''" @blur="a" @input="alter">

		<view class="list">
			<view class="selected">
				精选标签
			</view>
			<view class="labellist" :class="[number==index?'active':'']" v-for="(item,index) in list" :key="index"
				@tap="active(item,index)">
				<image src="@/static/release/biaoqian.png" class="labellistimg"></image>
				#{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import {
		CircleTopicSelectTopic,
		CircleTopicSelectTopicName,
		CircleTopicCreateTopicName
	} from "@/config/home.js"
	export default {
		data() {
			return {
				title: "选择标签",
				list: [],
				number: -1,
				item: 0,
				show: false,
				name: ""
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			getlist() {
				CircleTopicSelectTopic().then(res => {
					this.list = res
					console.log(res);
				})
			},
			active(item, index) {
				this.number = index
				this.item = item
			},
			goBack() {

				var str = /#\D{1,13}/
				console.log(str.test(this.name));
				if (str.test(this.name) == true) {
					var arr = /[^#]\D{0,13}/
					console.log(arr.exec(this.name), "poi");
					const name = arr.exec(this.name)
					console.log("000", name);
					CircleTopicCreateTopicName({
						name: name
					}).then(res => {
						this.item = res
						uni.$emit('updateData', this.item)
						uni.navigateBack({
							delta: 1
						})
						console.log(res, "发挥");

					})
				} else {
					uni.$emit('updateData', this.item)
					uni.navigateBack({
						delta: 1
					})
				}
			},
			a() {


			},
			alter() {
				console.log(123);
				if (this.name == "#" + "") {
					console.log(456);
					this.show = true
				}
				if (this.name == "") {
					this.show = false
					this.getlist()
				}


				var str = /#\D{1,13}/
				console.log(str.test(this.name));
				if (str.test(this.name) == true) {
					var arr = /[^#]\D{0,13}/
					console.log(arr.exec(this.name), "poi");
					const name = arr.exec(this.name)

					console.log("000", this.name);
					CircleTopicSelectTopicName({
						name: name
					}).then(res => {
						this.list = res
						console.log(res, "p09854453");
					})

				} else {
					CircleTopicSelectTopicName({
						name: this.name
					}).then(res => {
						this.list = res
						console.log(res, "p09854453");
					})
				}

			}
		}
	}
</script>

<style>
	.release {
		width: 126rpx;
		height: 58rpx;
		text-align: center;
		line-height: 58rpx;
		background-color: #D53EDA;
		border-radius: 36rpx;
		color: white;
		font-size: 24rpx;
		margin-top: 30rpx;
		margin-right: 22rpx;

	}

	.placeholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
	}

	.input {
		color: white;
		background-color: #29253C;
		padding-left: 20rpx;
		margin-left: 20rpx;
		width: 690rpx;
		border-radius: 20rpx;
		height: 68rpx;
		font-size: 24rpx;
	}

	.inputactive {
		color: #2B7FDE;
	}

	.list {

		margin-top: 50rpx;
		margin-left: 20rpx;
	}

	.selected {
		font-size: 28rpx;
		color: white;
	}

	.labellist {
		margin-top: 40rpx;
		font-size: 28rpx;
		color: #2B7FDE;
		vertical-align: middle;
	}

	.labellistimg {
		vertical-align: middle;
		margin-right: 20rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.active {
		color: white;
	}
</style>
