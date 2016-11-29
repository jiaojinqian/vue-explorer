<template>
  <div id="app">
		<!-- <Header></Header> -->
		<!-- <img src="./assets/logo.png"> -->
		<!-- 路由匹配的组件将渲染到这里 -->
		<router-view></router-view>
	</div>
</template>
<script type="text/ecmascript-6">
	import Index from './views/frontEndPage/index.vue'

	export default {
		data(){
			return {

			}
		},
		methods:{

		},
		components:{
			Index
			/* Header,
			 leftNav*/
		}
	}
</script>
<style scoped>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}
</style>
