<template>
  <div class="mt10">
    <label>Choose Color Mode</label>
    <span v-for="color of colors" :key="color" @click="$colorMode.preference = color">
      <button>
        {{color}}
      </button>
      &nbsp;&nbsp;
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: ['light', 'dark', 'sepia']
      }
    }
  }
</script>
