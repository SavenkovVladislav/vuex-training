import Vue from 'vue'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	store: store, //эта строчка нужна для того, чтобы зарегистрировать стор
	render: h => h(App),
}).$mount('#app')
