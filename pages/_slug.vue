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

