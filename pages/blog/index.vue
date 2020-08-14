<template>
  <div class="container">
    <h1>Posts</h1>
    <hr>
    <div v-for="article of articles" :key="article.slug">
        <h3 class="mb10">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
          </NuxtLink>
        </h3>
        <p><em>{{ article.createdAt | moment("MMMM Do, YYYY") }}</em></p>
        <p>{{ article.preview }}</p>
    </div>
  </div>
</template>

<script>
import VueMoment from 'vue-moment'

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
    const articles = await $content('posts', params.slug)
      .only(['title', 'preview', 'slug','createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  }


}
</script>
