import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Gallery from './views/Gallery.vue';
import UserContainer from './views/user/UserContainer.vue';
import UserMain from './views/user/UserMain.vue';
import Gardener from './views/user/Gardener.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/user',
      component: UserContainer,
      children: [
        {
          path: '',
          component: UserMain,
        },
        {
          path: 'gardener',
          component: Gardener,
        },
        {
          path: 'gov',
          component: UserMain,
        },
        {
          path: 'individual',
          component: UserMain,
        },
      ],
    },
  ],
});
