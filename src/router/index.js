import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/Main';
import About from '../views/About';
import Projects from '../views/Projects';
import ProjectDetails from '../views/ProjectDetails';
import Contact from '../views/Contact';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main, meta: { title: 'Daniel Kiss' } },
  {
    path: '/about',
    component: About,
    meta: { title: 'About Me - Daniel Kiss' }
  },
  {
    path: '/projects',
    component: Projects,
    meta: { title: 'Projects - Daniel Kiss' }
  },
  {
    path: '/projects/:slug',
    component: ProjectDetails,
    meta: { title: 'Projects - Daniel Kiss' }
  },
  {
    path: '/contact',
    component: Contact,
    meta: { title: 'Contact Me - Daniel Kiss' }
  },
  { path: '*', component: Main }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
