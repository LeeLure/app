<template>
	<view>
		<uni-file-picker v-model="imageValue" :limit="limit" fileMediatype="image" mode="grid" @select="select"
			@progress="progress" @success="success" @fail="fail" />
	</view>
</template>

<script>
	export default {
		name: "",
		props: {
			limit: {
				type: Number,
				default: 1
			},
			imageValue: {
				type: Array,
				default: () => {
					return []
				}
			},
		},
		data() {
			return {
				tempFiles: {},
				imgurl: ''
			}
		},
		methods: {
			// 获取上传状态
			select(e) {
				console.log('上传状态：', e)
				this.tempFiles = e
				this.getImgToken()
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			getImgToken() {
				console.log(uni)
				const token = uni.getStorageSync('token')
				uni.$u.http.post('/sdk/imageToken', {}).then(res => {
						console.log(res)
						this.uploadFilePromise(res)
					})
					.catch(() => {

					})
			},
			uploadFilePromise(res) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'https://up-z2.qiniup.com',
						filePath: this.tempFiles.tempFilePaths[0],
						key: this.tempFiles.tempFiles[0].name,
						formData: {
							token: res,
						},
						success: (res) => {
							const data = JSON.parse(res.data) || {}
							this.imgurl = `https://xiaiyuzhou.com/${data.key}`
							this.$emit('getFileUrl', this.imgurl)
						}
					});
				})
			},
		}
	}
</script>

<style>

</style>
