import Vue from 'vue';
import App from './App.vue';
import Accordion from './components/accordion.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.component('accordion', Accordion);

new Vue({
  el: '#app',
  render: h => h(App),
});


