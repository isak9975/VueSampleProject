<script setup lang="ts">
import MainHeader from './pages/MainHeader.vue'
import SideBar from './pages/SideBar.vue';
</script>

<!-- 전체적인 틀을 보여주는 페이지(헤더,푸터,바디) -->
<template>
  <div class="Main">
    <SideBar class="SideBar"/>
    <div class="Body">
      <!-- 네비게이션 -->
      <MainHeader />
      <!-- 앞으로  route되는 것을을 모여줄 곳. --> 
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  .Main{
    display: flex;
    flex-direction: row;
    height: 97vh;
  }
  .SideBar{
    min-width: 220px;
    margin-right:10px
  }
  .Body{
    width: 100%;
  }
  :root{
    background-color: #fafafa;
  }
</style>
