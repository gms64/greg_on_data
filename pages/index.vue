<template>
  <div class="home-container">
    <div class="u-full-width">
      <h1 class="site-title">
        greg<span class="dark-gray-color">/</span>data
      </h1>
      <br>
      <br>
      <h5 class="subtitle" id="type-it-text">
        <!-- Fancy Typed Text -->
      </h5>
      <br>
      <br>
      <p>
        infrequently updated musings of a confused developer / data scientist
      </p>
      <span class="sm-txt"><em>I wouldn't read too much into anything here...</em></span>
    </div>
    <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  components: {
  },
  head() {
    return {
      title: 'greg on data',
      meta: [
      { hid: 'description',
      name: 'description',
      content: 'A personal website created with nuxt, netlify, and a lot of coffee' }
      ]
    };
  },
  mounted() {
    new TypeIt("#type-it-text")
    .type("welcome to the danger zone", {speed: 60, delay: 200})
    .delete(15, {delay: 200})
    .type("my personal site", {speed: 60})
    .break({delay: 300})
    .type("can i interest you in...", {speed: 60})
    .break({delay: 100})
    .type("<a href='/blog'>some posts</a>", {speed: 60})
    .break({delay: 200})
    .type("or maybe", {speed: 60})
    .break({delay: 200})
    .type("<a href='/projects'>some projects of mine</a>", {speed: 60})
    .go();

    console.log("hey you, stop it.")
    console.log("110 111 32 114 101 97 108 108 121 44 32 115 116 111 112 32 105 116 46")

  }

  
}
</script>

