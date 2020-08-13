<template>
  <div class="error-container">
    <div class="u-full-width">
    <h3 v-if="!!error.message">{{ error.message }}</h3>
    <h3 v-else-if="error.statusCode === 404">404 Page Not Found</h3>
    <h3 v-else>An error occurred</h3>
    <br>
    <img class="error-img" src="~/static/img/macintosh.svg" alt="illlustrations-macintosh">
    <br>
    <h3></h3>
      <h5 class="subtitle" id="type-it-text-error">
        <!-- Fancy Typed Text -->
      </h5>

      
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  name: 'NuxtError',
  props: ['error'],
  mounted() {
    new TypeIt("#type-it-text-error", {
      strings: ["Well then...",
                "Looks like an error occurred",
                "Might want to head out"],
      speed: 60,
      waitUntilVisible: true
    })
    .break({delay: 300})
    .type("<a href='/'>Home</a>", {speed: 40})
    .go();
  }
}
</script>

<style>
.error-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#type-it-text-error {
  padding-right: 20px;
  padding-left: 20px;
}

.error-img {
    max-width: 25%;
    max-height: 25%;
}

</style>