<template>
	<view>
		<view class="bar">
		</view>
		<!-- 导航栏 -->
		<navigation :title="title"></navigation>

		<view class="list">
			<view class="head">
				{{text}}
			</view>
			<view class="header" v-for="item  in info" :key="item.id" v-if="item.id==index">
				{{item.text}}
			</view>
		</view>
		<view class="retroaction" @tap="retroaction">
			<image src="@/static/user/yijian.png" class="retroactionimg"></image>
			<text  class="retroactiontext">意见反馈</text>
		</view>
	</view>
</template>

<script>
	import navigation from "@/components/navigation.vue"
	export default {
		data() {
			return {
				info:[
					{text:'请前往希艾奇遇个人中心页面底部有趣的人查看，根据指示操作后便可成为有趣的人~如有不懂可以联系人工客服咨询。',
					id:"0"},
					{text:'2',
					id:"1"},
					{text:'3',
					id:"2"}
				],
				title: "反馈与帮助",
				text: '',
				index: '',
				flag:''
				
			}
		},
		onLoad(options) {
			console.log("ww", JSON.parse(options.query));
			const query = JSON.parse(options.query)
			this.text = query.text
			this.index = query.index
			console.log("this.title", this.text, this.index);
		},
		components: {
			navigation
		},
		methods: {
			retroaction(){
				uni.navigateTo({
					url:'/pages/settings/help/feedback/retroaction/retroaction'
				})
			}
		}
	}
</script>

<style>
.list{
	color: white;
	background-color: #29253C ;
	margin-top: 42rpx;
	width: 100%;
	border: 1px solid rgba(255, 255, 255, 0);
	padding-bottom: 40rpx;
	
}
.head{
	font-size: 32rpx;
	margin-left: 34rpx;
	margin-top: 42rpx;
	height: 60rpx;
}
.header{
	font-size: 28rpx;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 28rpx;
	margin-left: 34rpx;
	padding-right: 34rpx;
	
}
.retroaction{
	width: 100%;
	height: 160rpx;
	line-height: 160rpx;
	text-align: center;
	background-color: #29253C;
	position: absolute;
	bottom: 0;
	left: 0;
}
.retroactionimg{
	width: 40rpx;
	height: 40rpx;
	vertical-align: middle;
}
.retroactiontext{
	color: white;
	font-size: 28rpx;
	vertical-align: middle;
	margin-left: 20rpx;
}
</style>
