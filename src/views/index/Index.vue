<template>
  <div class="theme-blue-gradient">
    <Header></Header>
    <div id="page-wrapper" class="container">
      <div class="row">
        <left-nav></left-nav>
        <div id="content-wrapper">
          <router-view></router-view>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
    components:{
      leftNav:require('../../components/leftNav.vue'),
      Footer:require('../../components/Footer.vue'),
      Header:require('../../components/Header.vue')
    }
  }
</script>
<style >
  .hwb-navbar-a a{
    font-family: 'Open Sans',sans-serif;
    -webkit-font-smoothing: antialiased;
    display:block;
  }
</style>
