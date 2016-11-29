<template>
	<div>
		<div>
			<label for=""></label><input type="text">
		</div>
		<div class="pwd">
			<label for=""></label><input type="password">
		</div>
		<div>
		 	<button class="btn" type="button" @click='login'>登陆</button>
		</div>
	</div>
</template>	
<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			login(){
				this.$router.push({ path: 'index' });
			},
		},
	}
</script>
<style scoped>
	.pwd{
		margin-top: 20px;
	}
	.btn{
		width: 153px;
		height: 22px;
		border-radius:4px;
		border:none;
		margin-top: 15px;
		background-color:#4fc08d;
		font-weight:700px;
		color:#fff;
		transition:all .15s ease;
		cursor: pointer;

	}
	.btn:hover{
		outline: none;
		background-color:#5dc596;
		transform: scale(1.03); 
	}
	.btn:focus{
		outline: none;
	}
</style>