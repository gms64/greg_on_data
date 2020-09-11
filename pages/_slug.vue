<template>
    <div class="container-fluid">
        <article>
            <h1 class="m20">{{ page.title }}</h1>
            <hr>
            <nuxt-content :document="page" />
        </article>
    </div>

</template>

<script>
export default {
  head() {
    return {
      title: (this.page.seo_title || this.page.title) + ' | greg on data',
      meta: [
          { hid: 'description', 
          name: 'description',
          content: (this.page.seo_desc || this.page.preview) }
      ]
      }
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('pages',params.slug).fetch()
      return {
        page
      }
    } catch {
        error({ statusCode: 404, message: 'Page not found' })
    }
    
  }
}
</script>

