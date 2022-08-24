<template>
	<view>
		<user-list />
		<message-list />
	</view>
</template>

<script>
	import userList from './user-list.vue'
	import messageList from './message-list.vue'
	export default {
		name:'message',
		components: { userList, messageList },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
