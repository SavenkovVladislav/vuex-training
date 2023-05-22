import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

//данная строчка нужна для того, чтобы зарегистрировать плагин vuex
Vue.use(Vuex)

//формируем объект стора в конструктор которого мы передаем некоторый объект конфигурации. Вся эта конструкция вернет объект стора, который необходимо экспортировать из этого файла и импортировать его в main.js
export default new Vuex.Store({
	//для того, чтобы реализовать загрузку данных с помощью стора понадобится концепт акшенов
	//когда настраивается какой-либо стор, то можно использовать 4 типа полей: actions:{}, mutations:{}, state:{}, getters:{}. Все эти объекты мы переместим в отдельную папку, которая называется modules, в которой лежит файл post.js для того, чтобы декомпозировать всеэто дело в объекте modules

	modules: {
		//объект modules позволяет декомпозировать логику vuex store. То есть импортировав файл post.js, мы можем прокинуть его в данный объект
		post: post,
	},
})