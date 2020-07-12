import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/Main';
import About from '../views/About';
import Projects from '../views/Projects';
import ProjectDetails from '../views/ProjectDetails';
import Contact from '../views/Contact';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/projects/:slug', component: ProjectDetails },
  { path: '/contact', component: Contact },
  { path: '*', component: Main }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
