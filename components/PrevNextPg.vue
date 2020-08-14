<template>
<div>
  <hr class="mb8">
  <div class="row mb20">
    <span v-if="prevPg" class="u-pull-left">
        <NuxtLink v-if="prevPg==1" :to="'/blog'">
            Previous Page
        </NuxtLink>
        <NuxtLink v-else :to="'/blog/page/'+prevPg">
            Previous Page
        </NuxtLink>
    </span>
    <span v-else>&nbsp;</span>
    <span v-if="nextPg" class="u-pull-right">
      
      <NuxtLink
        v-if="nextPg"
        :to="'/blog/page/'+nextPg"
      >
        Next Page
      </NuxtLink>
    </span>
    <span v-else>&nbsp;</span>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      prevPg: {
        type: Number,
        default: () => null
      },
      nextPg: {
        type: Number,
        default: () => null
      }
    }
  }
</script>