<template>
	 <div class="hk_w600">
            	<div style="width:600px;" class="clearfix">
            	    <div :style="{width:(pendding*0.95/max*100)+'%'}" class="hk" ></div> 
            	    <span class="hk-span">{{pendding}}</span>
            	</div>
     </div>
</template>
<script type="text/ecmascript-6">
	export default{
		data(){
			return {

			}
		},
		props:['pendding','max'],
		computed:{
					
		}
}
</script>
<style lang="sass">
    .hk_w600{
     	width:600px;
     	height: 600px;
    }
    .hk{
     	float: left;
     	height:15px;
     	border-radius: 25px;
     	background-color:#4f9ce8;
    }
    .hk-span{float:left;font-size:12px;border-radius: 50%;margin-left:5px;border:1px solid #fff;;display: block;width:15px;height:15px;background-color:#fff;line-height:15px;text-align: center;color:#8bbaee;}
    .clearfix {
        *zoom: 1;
    }
    .clearfix:after {
         content: ''; display: table; clear: both;
    }
</style>