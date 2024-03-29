import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueProgressBar from 'vue-progressbar';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

Vue.use(VueGtag, { config: { id: 'UA-159367806-1' } }, router);

Vue.use(VueProgressBar, {
  color: '#24b9ff',
  failedColor: 'red',
  height: '4px'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
