<template>
	<div @click="login">
		我是首页
    <!--<i class="fa fa-camera-retro"></i>
    <ul class="fa-ul">
      <li><i class="fa-li fa fa-check-square"></i>List icons</li>
      <li><i class="fa-li fa fa-check-square"></i>can be used</li>
      <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
      <li><i class="fa-li fa fa-square"></i>in lists</li>
    </ul>
    <i class="fa fa-cog fa-spin fa-fw"></i>
    <span class="sr-only">Loading...</span>-->
	</div>
</template>
<script>
	export default {
		data(){
			return {
        name:'hwb'
			}
		},
		methods:{
			login(){
				this.$router.push({ path: 'signIn' });
			},
		},
	}
</script>
