<template>
	<view class="a">
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>
		<view class="entering" >
			<textarea v-model="detail.value" placeholder="在此输入您要反馈的问题~" placeholder-class="placeholder" maxlength="500"
				class="textarea"></textarea>
			<view class="number">
				{{text}}/500
			</view>
		</view>

		<price  @flag="btn"></price>


	</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	import price from "@/pages/settings/help/feedback/retroaction/price.vue"
	export default {
		data() {
			return {
				title: "意见反馈",
				detail: {
					value: '',

				}
			}
		},
		components: {
			navigation,
			price,
		},
		computed: {
			text() {
				if (this.detail.value.length == 500) {
					uni.showToast({
						title: '最多输入500字',
						duration: 1500,
						icon: 'none'
					});

				}
				return this.detail.value.length

			}
		},
		methods: {			
			btn(e) {
				if(e==true){
					this.detail.value=""
				}
			}
		}
	}
</script>

<style>
	.a {
		color: white;
	}

	.entering {
		position: relative;
	}

	.textarea {
		font-size: 24rpx;
		width: 680rpx;
		height: 280rpx;
		background-color: #29253C;
		border-radius: 20rpx;
		margin-left: 20rpx;
		padding-top: 32rpx;
		padding-left: 18rpx;
		padding-right: 18rpx;
		padding-bottom: 80rpx;
	}

	.placeholder {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);

	}

	.number {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.5);
		position: absolute;
		right: 50rpx;
		bottom: 26rpx;

	}
</style>
