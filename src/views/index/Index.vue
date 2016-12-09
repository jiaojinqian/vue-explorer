<template>
  <div class="theme-blue-gradient">
    <my-header></my-header>
    <div id="page-wrapper" class="container">
      <div class="row">
        <left-nav></left-nav>
        <div id="content-wrapper">
          <router-view></router-view>
          <my-footer></my-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Footer from '../../components/Footer'
  import Header from '../../components/Header'
  import leftNav from '../../components/leftNav'
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
      leftNav,
      myFooter:Footer,
      myHeader:Header
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
