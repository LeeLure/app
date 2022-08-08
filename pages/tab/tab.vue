<template>
	<view>
		<home v-if="current==0"></home>
		<square v-if="current==1"></square>
		<tidings v-if="current==2"></tidings>
		<my v-if="current==3"></my>		
		<view class="tab">
			
			<block v-for="(item,index) in tabbar" :key="index">
				<view class="tabtime" :class="[current==index?'active':'']" :data-index="index" @tap="tabSwitch">
					<view class="itenimg">
						<image class="image" :src="current!=index?item.img:item.slectimg"></image>
					</view>
					<view class="itemname">
						{{item.text}}						
					</view>
				</view>				
			</block>
			
		</view>
	</view>
</template>

<script>
	import home from  "@/pages/tabpage/home.vue"
	import square from  "@/pages/tabpage/square.vue"
	import my from  "@/pages/tabpage/my.vue"
	import tidings from  "@/pages/tabpage/tidings.vue"
	export default {
		components:{
			home,
			square,
			my,
			tidings
		},
		data() {
			return {
				current:0,
				tabbar:[{
					img:'../../static/tab/home.png',//未选中状态
					slectimg:'../../static/tab/homes.png',
					text:"首页"
				},
				{
					img:'../../static/tab/square.png',
					slectimg:'../../static/tab/squares.png',
					text:"广场"
				},
				
				{
					img:'../../static/tab/tidings.png',
					slectimg:'../../static/tab/tidingss.png',
					text:"消息"
				},
				{
					img:'../../static/tab/my.png',
					slectimg:'../../static/tab/mys.png',
					text:"我的"
				},
				
				]
			}
		},
		onLoad:function(option) {
			console.log("111",option.current);
			this.current=option.current
		},
		methods: {
			tabSwitch(e){
				console.log(e);
				let index=e.currentTarget.dataset.index
				this.current=index
			}
		}
	}
</script>

<style>
	.bg-img{
	    position: fixed;
	    width: 750rpx;
	    height: 200rpx;
	    bottom: 0;
	    left: 0;
	    z-index: -1;
	}
	.tab{
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		
	}
	.tabtime{
		
	}
	.image{
		width: 50rpx;
		height: 50rpx;
	}
.active{
	color: aqua;
}
</style>
