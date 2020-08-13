<template>
    <div class="container">
        <article>
            <h1 class="m20">{{ page.title }}</h1>
            <hr>
            <nuxt-content :document="page" />
        </article>
    </div>

</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages','about').fetch()
    return {
      page
    }
  }
}
</script>

