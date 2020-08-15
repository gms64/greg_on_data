<template>
  <div class="container-fluid">
    <h1>Blog</h1>
    <hr>
    <div v-for="article of articles" :key="article.slug">
        <h3 class="mb10">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              {{ article.title }}
          </NuxtLink>
        </h3>
        <p><em>{{ article.createdAt | moment("MMMM Do, YYYY") }}</em></p>
        <p>{{ article.preview }}</p>
        <p><NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">Read More</NuxtLink></p>
        <br>
    </div>
    <PrevNextPg :prevPg="prevPg" :nextPg="nextPg"/>
  </div>

</template>

<script>
import VueMoment from 'vue-moment'
import PrevNextPg from "~/components/PrevNextPg.vue"

export default {
    components: {
        PrevNextPg
    },
  head() {
      return {
          title: 'Blog - Page ' + this.pgNum + ' | greg on data',
          meta: [
              { hid: 'description', 
              name: 'description', 
              content: 'greg on data Blog - Trying to make sense of book data...' }
          ]
      }
  },
  async asyncData({ $content, params, env }) {
    // Retrieves current posts for the page.  
    // Also looks one page ahead to see if we should add a 'Next Page' link
    const postsPerPage = +env.POSTS_PER_PAGE || 5
    const pgNum = +params.id
    const prevPg = pgNum - 1
    const articles = await $content('posts')
      .only(['title', 'preview', 'slug','createdAt'])
      .sortBy('createdAt', 'desc')
      .skip(postsPerPage*(pgNum-1))
      .limit(postsPerPage)
      .fetch()

    // Get the next group of articles after this page
    const nextArticles = await $content('posts')
      .only(['title', 'preview', 'slug','createdAt'])
      .sortBy('createdAt', 'desc')
      .skip(postsPerPage*(pgNum))
      .limit(postsPerPage)
      .fetch()
    
    // nextPg is null unless there are articles after this page
    let nextPg = null
    if (nextArticles.length >= 1) {
        nextPg = pgNum + 1
    }

    // Returns current page articles, as well as the prevPg, nextPg, and pgNum vars
    return {
      articles,
      prevPg,
      nextPg,
      pgNum
    }
  }


}
</script>
