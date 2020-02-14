<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-control-item"
      :class="{active: index === currentIndex}"
      @click="chooseItem(index)">
        <span>{{ item }}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      chooseItem(index){
        this.currentIndex = index
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: sticky;
    top: 44px;
    background-color: #fff;

  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);

  }

  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }

</style>
