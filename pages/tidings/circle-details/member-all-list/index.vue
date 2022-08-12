<template>
	<view class="member-all-list">
		<navigation :title="title" class="navigation">
		</navigation>
		<view class='index-list__head'>
			<input v-model="handleSearch" :placeholder='placeholder' class="index-list__input"
				placeholder-class="index-list__input__placeholder" />
		</view>
		<view class="content">
			<SortPickerList :listData="handleSearch?dataFiltered : listData" ref="sortPickerList" @clickData="clickData">
			</SortPickerList>
		</view>
	</view>
</template>

<script>
	import SortPickerList from "@/components/International-sortPickerList/index.vue";
	export default {
		data() {
			return {
				title: '成员列表',
				placeholder: '输入关键字查询',
				handleSearch: '',
				dataFiltered: [],
				listData: [{
						// "short": "AD",
						"name": "AAA",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "bbb",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "ccc",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "ddd",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "ee",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "hhh",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					},
					{
						// "short": "AD",
						"name": "1231",
						// "en": "Andorra",
						// "tel": "376",
						"flag": "../../static/flag/ad.png"
					}
				],
				enableBigData: false, //是否开启大数据渲染，如果开启会插入20000条测试数据到表格，方法在create中
			}
		},
		watch: {
			handleSearch() {
				if (this.handleSearchDebounce) {
					clearTimeout(this.handleSearchDebounce)
					this.handleSearchDebounce = null
				}
				this.handleSearchDebounce = setTimeout(() => {
					this.buildDataFiltered()
					setTimeout(() => {
						this.$refs["sortPickerList"].initPage();
					}, 200)
				}, 200)
			}
		},
		components: {
			SortPickerList
		},
		onReady() {
			var that = this
			that.$refs["sortPickerList"].initPage();
		},
		created() {},
		methods: {
			clickData(data) {
				console.log(data);
			},
			buildDataFiltered() {
				if (!this.listData) {
					return {}
				}
				let resultObj = []
				for (const groupkey of Object.keys(this.listData)) {
					console.log(groupkey)
					const searchListResult = this.listData.filter(item => item.name.toLowerCase().indexOf(this
						.handleSearch.toLowerCase()) >= 0)
					if (searchListResult && searchListResult.length > 0) {
						resultObj = searchListResult
					}
				}
				this.dataFiltered = resultObj
			},
		}
	}
</script>

<style>
</style>
