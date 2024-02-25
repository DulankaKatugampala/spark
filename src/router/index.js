import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '@/views/HomePage.vue';
import AppFeed from '@/views/AppFeed.vue';
import AppChat from '@/views/AppChat.vue';
import AppProfile from '@/views/AppProfile.vue';
import AppSearch from '@/views/AppSearch.vue';
import AppCreatePost from '@/views/AppCreatePost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: AppFeed
    },
    {
      path: '/Add',
      name: 'add',
      component: AppCreatePost
    },
    {
      path: '/Chat',
      name: 'chat',
      component: AppChat
    },
    {
      path: '/Profile',
      name: 'profile',
      component: AppProfile
    },
    {
      path: '/Search',
      name: 'search',
      component: AppSearch
    },
  ]
})

export default router
