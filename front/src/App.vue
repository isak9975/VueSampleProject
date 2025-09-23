<script setup lang="ts">
import MainHeader from './pages/MainHeader.vue'
</script>

<!-- 전체적인 틀을 보여주는 페이지(헤더,푸터,바디) -->
<template>
  <!-- 네비게이션 -->
  <MainHeader />
  <router-view/>
</template>

<style>
  :root{
    background-color: #fafafa;
  }
</style>

