import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import MyList from '../components/BookList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mylist',
    name: 'MyList',
    component: MyList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // utilisez createWebHistory pour éviter le # dans l'URL
  routes
});

export default router;
