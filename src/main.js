import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//import VueCarousel from 'vue-carousel'; //Carousel使うとき追加 ● 複数ページで使用する場合は必要

//import Slick from 'vue-slick'; //Slick使うとき追加 ● 複数ページで使用する場合は必要



Vue.config.productionTip = false

//Vue.use(VueCarousel);//Carousel使うとき追加

//Vue.use(Slick); //Slick使うとき追加 ● 複数ページで使用する場合は必要


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
