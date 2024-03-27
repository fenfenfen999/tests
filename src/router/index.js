// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue'
import ToolsPage from '@/views/ToolsPage.vue'
import CommunityPage from '@/views/CommunityPage.vue'

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/tools',
        name: 'ToolsPage',
        component: ToolsPage
      },
      {
        path: '/community',
        name: 'community',
        component: CommunityPage
      }
    ]
  },
];

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(),
  historyApiFallback: true,
  routes
});

export default router;