<!-- App.vue 或其他组件 -->
<template>
  <ConfigProvider :locale="elementLocale">
    <MainHeader/>
    <!-- 路由组件将在这里被渲染 -->
    <router-view></router-view>
    <MainFooter/>
  </ConfigProvider>
</template>
<script setup>
  import { ConfigProvider } from 'ant-design-vue'
  import MainHeader from './components/MainHeader.vue'
  import MainFooter from './components/MainFooter.vue'
  import { elementLocale} from '@/i18n/i18n';
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
body{
  font-family: HelveticaNeue;
}
</style>
