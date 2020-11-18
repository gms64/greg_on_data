<template>
    <div class="container-fluid">
        <nuxt-link to='/blog/'>Back to Blog</nuxt-link>
        <article>
            <h1 class="m20">{{ article.title }}</h1>
            <p><em>{{ article.createdAt  | moment("MMMM Do, YYYY") }}</em></p>
            <hr>
            <!-- <p>Last Updated: {{ formatDate(article.updatedAt) }}</p> -->

            <nuxt-content :document="article" />
            <prev-next :prev="prev" :next="next" />
        </article>
        <div class="commentbox"></div>
    </div>
</template>


<script>
import VueMoment from 'vue-moment'
import PrevNext from "~/components/PrevNext.vue"
import commentBox from 'commentbox.io';

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
            content: (this.article.seo_desc || this.article.preview) },
            {
                'property':  'og:url',
                'content':  `https://gregondata.com/blog/${this.article.slug}/`,
            },
            {
                'property':  'og:title',
                'content':  `${this.article.title}`,
            },
            {
            'property':  'og:type',
            'content':  `article`,
            },
            {
                'property':  'og:description',
                'content': `${(this.article.seo_desc || this.article.preview)}`.replace(/<\/?[^>]+(>|$)/g, ""),
            },
            {
                'property':  'og:image',
                'content': `https://gregondata.com/favicon/apple-touch-icon.png`
            }
        ]
        }
    },
    async asyncData({ $content, params, error }) {
        try {
            const article = await $content('posts', params.slug).fetch()

            const [prev, next] = await $content('posts')
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
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    },
    mounted() {
        commentBox('5669956028989440-proj');
    }
  }
</script>
