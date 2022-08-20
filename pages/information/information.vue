<template>
	<view>
		<view class="bar">
		</view>

		<view class="number">
			1/2
		</view>

		<view class="news">
			请设置你的信息
		</view>
		<view class="choice">
			性别选择后无法更改
		</view>
		<view class="photo">
			<upload :limit="limit" @getFileUrl="getFileUrl" />
		</view>

		<view class="name">
			昵称
		</view>
		<input type="text" class="nicknames" maxlength="10"  v-model="nickName">
		<view class="name">
			生日
		</view>

		<picker class="nickname" mode='date' :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
			<view class="uni-input">{{birthday}}</view>
		</picker>
		<view class="name">
			性别
		</view>
		<view class="sex1">

			<view class="flex1 boy" :class="sex==0?'active':''" data-index="0" @tap="checkSex">
				<view class="sex txt">男</view>
			</view>
			<view class="flex1 girls" :class="sex==1?'active':''" data-index="1" @tap="checkSex">
				<view class="sex txt">女</view>
			</view>

		</view>

		<view class="nextstep" @tap="label">
			下一步
		</view>


	</view>
</template>

<script>
	
	import upload from "@/components/upload.vue"
	export default {
		data() {
			// const currentDate = this.getDate({
			//            format: true
			//        })
			return {
				sex: 0,
				limit: 1,
				nickName:"",
				birthday: '',
				avatarUrl:'',

			}
		},
		components: {
			upload
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			// 选择性别
			checkSex(e) {
				this.sex = e.currentTarget.dataset.index;			
			},
			getFileUrl(url) {
				console.log(url)
				this.avatarUrl=url
			},
			label() {
				console.log("this.title", this.avatarUrl,this.nickName,this.birthday,this.sex);				
			let  query={				
				sex :this.sexIndex ,
				birthday:this.birthday,
				nickName:this.nickName,
				avatarUrl:this.avatarUrl
			}
			
				uni.navigateTo({
					url: '/pages/label/label?query='+JSON.stringify(query)
				})
			},



			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			bindDateChange(e) {
				this.birthday = e.detail.value
			},
			bindTimeChange(e) {
				this.time = e.detail.value
			},
			getDate(type) {
				const birthday = new Date();
				let year =birthday.getFullYear();
				let month = birthday.getMonth() + 1;
				let day = birthday.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
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
		float: right;
		margin-right: 30rpx;
	}

	.news {
		color: white;
		font-size: 44rpx;
		text-align: center;
		margin-top: 200rpx;
	}

	.choice {
		margin-top: 32rpx;
		color: #f5f7f99c;
		font-size: 28rpx;
		text-align: center;
	}

	.photo {
		width: 240rpx;
		height: 240rpx;
		border-radius: 140rpx;
		border: 1px solid red;
		margin-top: 60rpx;
		margin-left: 256rpx;
	}

	.name {
		font-size: 36rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}

	.nicknames {
		background-color: white;
		width: 630rpx;
		height: 108rpx;
		border-radius: 48rpx;
		margin-left: 40rpx;
		margin-top: 22rpx;
		padding-left: 40rpx;

	}

	.nickname {
		background-color: white;
		width: 630rpx;
		height: 78rpx;
		border-radius: 48rpx;
		margin-left: 40rpx;
		margin-top: 22rpx;
		padding-left: 40rpx;
		padding-top: 30rpx;
	}

	.sex1 {

		color: white;
		display: flex;
		justify-content: center;
		margin-top: 22rpx;
	}

	.flex1 {

		text-align: center;
		font-size: 28rpx;

		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		border-radius: 48rpx;
		margin-left: 34rpx;
	}


	.flex1.boy .sex {
		color: rgba(0, 0, 0, 0.548);
		font-size: 32rpx;
		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		border-radius: 48rpx;
		background-color: white;
	}

	.flex1.boy.active .sex {
		background-color: #B043FA;
	}

	.flex1.girls .sex {
		color: rgba(0, 0, 0, 0.548);
		text-align: center;
		font-size: 32rpx;
		width: 282rpx;
		height: 108rpx;
		line-height: 108rpx;
		border-radius: 48rpx;
		background-color: white;
	}

	.flex1.girls.active .sex {
		background-color: #B043FA;
	}

	.flex1.active .txt {
		font-size: 28rpx;
		color: white;
	}

	.nextstep {
		width: 486rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		background: #FFFFFF;
		border-radius: 48rpx;
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #B043FA;
		margin-top: 72rpx;
		margin-left: 132rpx;

	}

	.uni-list {
		color: white;
	}
</style>
