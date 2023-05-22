<!-- В этом файле разбирается как происходит работа с данными, если есть Vuex -->
<template>
	<div id="app">
		<h1>{{ postsCount }}</h1>
		<div class="post" v-for="post in allPosts" :key="post.id">
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' //ипортируем метод-хелпер из vuex, для получения данных из стора
export default {
	name: 'App',
	// //один из способов обратиться к геттеру allPosts, который описан в файле ./modules/post можно использовать computed, которое будет реагировать на любое изменение геттера
	// computed: {
	// 	//тут мы заведем новую функцию, которую можно назвать как угодно, но тут мы назовем ее allPosts
	// 	//что она делает? this.$store.getters.allPosts. this - контекс, $store(является возможностью vuex) - специальный объект, который позволяет обратиться ко всем объектам в файле ./modules/post, getters - обращение к объекту getters, allPosts - обращение к функции, которая лежит внутри getters
	// 	allPosts() {
	// 		return this.$store.getters.allPosts
	// 	},
	// 	//теперь у нас есть функция которая возвращает объект, который можно итерировать в разметке с помощью v-for
	// 	//это менее продвинутый способ получения данных, ниже будет показан способ получения данных с помощью метода хелпера mapGetters, который доступен во vuex и позволяет упростить получение этих данных
	// },

	//второй способ обращения к геттеру allPosts, который описан в файле ./modules/post заключается в использовании метода-хелпера mapGetters, который был импортирован выше
	//mapGetters это функция, которая всегда принимает в себя массив содержащий в себе строки. (!)Строки должны совпадать с названием геттера, который описан в файле ./modules/post. В нашем случае таки геттером является функция allPosts. Теперь, как и в первом премере обращения к геттеру в allPosts лежат данные из state, которые мы можем итерировать в разметке с помощью v-for
	computed: mapGetters(['allPosts', 'postsCount']),

	//использование метода-хелпера более приоритетный способ вызова экшена. Работает он аналогично методу-хелперу mapGetters. Теперь у нас есть метод, который называется fetchPosts, который мы можем вызвать в объекте mounted
	methods: mapActions(['fetchPosts']),

	async mounted() {
		//в данном методе мы будем вызывать экшен, который описан в файле ./modules/post (этот способ является не основным. По аналогии с mapGetters вызвать экшен можно с помощью метода-хелпера mapActions). Происходит это с помощью специального метода dispach. В первый параметр метода dispach передается название того экшена, который необходимо вызвать. В нашем случае таким экшеном будет fetchPosts
		// this.$store.dispatch('fetchPosts')

		this.fetchPosts(4) //в вызов данного метода можно передавать переменную или значение, которое попадет в store->actions->fetchPosts в его второй параметр
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 60px auto;
	width: 400px;
}

.post {
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 1rem;
	padding: 10px;
}
</style>
