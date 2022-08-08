<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.hideTabBar()
		},
		onShow: function() {
			// uni.hideTabBar()
			console.log('App Show')
			  // tabbar中间按钮点击事件
			            uni.onTabBarMidButtonTap(function(e){
			                uni.showToast({
			                    title:'点我干嘛',
			                    duration: 1500,
			                    icon:'none'
			                });
			            })

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 每个页面公共css
	page {
		background-color: #1E1A32;
			margin: 0;
			padding: 0;
			
		}
	
		.bar {
			height: var(--status-bar-height);
			width: 100%;
		}
	@import "uview-ui/index.scss"
	

</style>
