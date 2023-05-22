<!-- В этом файле разбирается как происходит работа с данными, если нет Vuex, то есть на чистом Vuejs -->
<template>
	<div id="app">
		<div class="post" v-for="post in posts" :key="post.id">
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	//если мы хотим получить какие-то данные с сервера, то можно обратиться к методу maunted, делаем его асинхронным и с помощью функции fetch передаем в нее url
	async mounted() {
		//функция fetch возвращает промис, который мы можем "подождать" прописав await и занеси все в переменную res
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=3'
		)
		//чтобы получить данные необходимо распарсить данные в переменной res
		const posts = await res.json()
		//когда данные загрузятся, то мы будем присваивать распаршенные данные в posts массиву posts, который создаем в data. Это нужно для того, чтобы мы могли использовать эти данные в шаблоне
		this.posts = posts
	},
	data() {
		return {
			posts: [],
		}
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
