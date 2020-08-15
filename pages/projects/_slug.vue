<template>
    <div class="container-fluid">
        <nuxt-link to='/projects'>Back to Projects</nuxt-link>
        <article>
            <h1 class="m20">{{ article.title }}</h1>
            <hr>

            <nuxt-content :document="article" />
            <prev-next :prev="prev" :next="next" :postTypeSlug="'projects-slug'"/>
        </article>
    </div>
</template>


<script>
import VueMoment from 'vue-moment'
import PrevNext from "~/components/PrevNext.vue"

  export default {
    components: {
        PrevNext
    },
    head() {
        return {
        title: (this.article.seo_title || this.article.title) + ' | greg on data',
        meta: [
            { hid: 'description', 
            name: 'description',
            content: (this.article.seo_desc || this.article.preview) }
        ]
        }
    },
    async asyncData({ $content, params, error }) {
        try {
            const article = await $content('projects', params.slug).fetch()

            const [prev, next] = await $content('projects')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'desc')
            .surround(params.slug)
            .fetch()

            return {
            article,
            prev,
            next
            }
        } catch {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
  }
</script>
