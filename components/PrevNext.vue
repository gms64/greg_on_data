<template>
<div>
  <hr class="mb8">
  <div class="row mb20">
    <span v-if="prev" class="u-pull-left">
      Previous: 
      <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>

    </span>
    <span v-else>&nbsp;</span>
    <span v-if="next" class="u-pull-right">
      Next: 
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        
      >
        {{ next.title }}
      </NuxtLink>
    </span>
    <span v-else>&nbsp;</span>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>