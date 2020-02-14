<template>
    <tab-bar>
      <tab-bar-list path="/home" color="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-list>
      <tab-bar-list path="/category" color="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-list>
      <tab-bar-list path="/cart" color="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-list>
      <tab-bar-list path="/profile" color="blue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-list>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarList from "components/common/tabbar/TabBarList";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarList
        }
    }
</script>

<style scoped>
  @import "../../../assets/css/base.css";
</style>
