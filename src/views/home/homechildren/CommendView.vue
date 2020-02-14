<template>
  <div class="commend-view">
    <div v-for="item in recommends" class="commend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommendView",
    props:{
      recommends:{
        type:Array,
        default:function () {
          return null
        }
      }
    }
  }
</script>

<style scoped>
  .commend-view{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;

  }

  .commend-item{
    flex: 1;

  }
  .commend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 3px;

  }
</style>
