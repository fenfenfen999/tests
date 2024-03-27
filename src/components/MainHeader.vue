<script setup>
  import { Dropdown, Menu } from 'ant-design-vue';
  import {GlobalOutlined} from '@ant-design/icons-vue'
  import { useRoute } from 'vue-router';
  import { setLocale, availableLocales} from '@/i18n/i18n';
  const route = useRoute();

  const handleMenuClick = val => {
    console.log('lang', val.key);
    setLocale(val.key)
  };
</script>
 
<template>
  <header class="header">
    <div class="logo">
      <a href="#"><img src="@/assets/logo-vearch.webp" alt="vearchlogo"></a>
      <a href="#"><span class="divider"></span></a>
      <a href="#" class="logo-open"><img src="@/assets/logo-open.webp" alt="openlogo"></a>
    </div>

    <transition name="fade" mode="out-in">
      <nav class="nav">
        <router-link to="/home" :class="route.path === '/home' ? 'active' : ''"> {{ $t('header.home') }}</router-link>
        <a href="https://vearch.readthedocs.io/" target="_blank"> {{ $t('header.docs') }}</a>
        <router-link to="/tools"  :class="route.path === '/tools' ? 'active' : ''"> {{ $t('header.tools') }}</router-link>
        <router-link to="/community"  :class="route.path === '/community' ? 'active' : ''">{{ $t('header.community') }}</router-link>
        <Dropdown class="tools">
          <div class="ant-dropdown-link">
            <GlobalOutlined  /> <span>{{ $t('header.lang') }}</span>
          </div>
          <template #overlay>
            <Menu @click="handleMenuClick">
              <Menu.Item :key="item" v-for="item in Object.keys(availableLocales)" >
                {{ availableLocales[item] }}
              </Menu.Item>
            </Menu>
          </template>
        </Dropdown>  
      </nav>   
    </transition>


    
  </header>
</template>
 
<style lang="less" scoped>
  .header {
    height: 60px;
    background: rgba(0,0,0, 1);
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .logo {
      flex: 1;
      display: flex;
      align-items: flex-start;
      margin-left: 50px;
      a{
        padding-top: 10px;
      }
      img {
        height: 30px;
      }
      .divider {
        display: inline-block;
        width: 1px;
        height: 18px;
        background: rgba(240,242,245,0.5);
        margin: 8px 10px;
      }
      .logo-open{
        padding-top: 12px;
      }
    }
    .nav {
      flex: 4;
      a {
        color: rgba(245,245,245,0.8);
        text-decoration: none;
        margin: 0 10px;
        line-height: 50px;
        position: relative;
      }
      a.active::after{
        content: ' ';
        position: absolute;
        left: 0; 
        bottom: -10px;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(252,215,45,1) 50%,rgba(255,255,255,0) 100%);
      }
    }
    .tools {
      float: right;
      margin-top: 15px;
      margin-right: 30px;
      div {
        text-align: right;
      }
    }
  }

  @media (max-width: 800px) {
    .header {
      flex-direction: column;
      height: 100px;
      .tools{
        margin-left: 50px;
        margin-right: 0;
      }
    }
  }
</style>
 