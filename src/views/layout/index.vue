<template>
<div class="container">
   <van-nav-bar @click-right="$router.push('/search')" fixed title="王者荣耀" right-text='搜索' v-if="$route.path!=='/user'"></van-nav-bar>

   <div class="my-wrapper" :class="{noTop: $route.path=='/user'}">
        <router-view> </router-view>
        <van-tabbar route>
            <van-tabbar-item to='/' icon='wap-home-o'>首页</van-tabbar-item>
            <van-tabbar-item to='/question' icon='chat-o'>问答</van-tabbar-item>
            <van-tabbar-item to='/video' icon='tv-o'>视频</van-tabbar-item>
            <van-tabbar-item to='/user' icon='user-circle-o'>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
