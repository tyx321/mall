<template>
    <div class="tab-bar-list" @click="listClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="isActivated"><slot name="item-text"></slot></div>    //true的时候绑定，false的时候不绑定


    </div>
</template>

<script>
    export default {
        name: "TabBarList",
        data(){
            return{
               // isActive:true,
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            isActivated(){
                return this.isActive ? {color:this.color} : {}
            }

        },
        props:{
            path:String,
            color:{
                type:String,
                default:'red'
            }
        },
        methods:{
            listClick(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
  .tab-bar-list{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-list img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>
