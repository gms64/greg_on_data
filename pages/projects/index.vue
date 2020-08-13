<template>
  <div class="container">
    <h1>Projects</h1>
    <hr>
    <div v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug: article.slug } }">
            <div>
            <h3 class="mb8">{{ article.title }}</h3>
            </div>
        </NuxtLink>
        <p>{{ article.preview }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
        title: 'Blog | greg on data',
        meta: [
            { hid: 'description', 
            name: 'description', 
            content: 'greg on data Blog - Trying to make sense of book data...' }
        ]
    },
    async asyncData({ $content, params }) {
      const articles = await $content('projects', params.slug)
        .only(['title', 'preview', 'slug','createdAt'])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    }

  }
</script>
