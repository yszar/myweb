// import Vue from 'vue';
// import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//     },
//   ],
// });
import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/about', component: 'About' },
];

const routes = routerOptions.map(route => ({
  ...route,
  component: () => import(`@/components/${route.component}.vue`),
}));

Vue.use(Router);
export default new Router({
  routes,
  mode: 'history',
});
