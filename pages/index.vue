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
        random musings of a confused developer / data scientist
      </p>
      <span class="sm-txt"><em>I wouldn't read too much into anything here...</em></span>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  components: {
  },
  head: {
    title: 'Greg on Data',
    meta: [
    { hid: 'description',
    name: 'description',
    content: 'A personal website created with nuxt, netlify, and a lot of coffee' }
    ]
  },
  mounted() {
    new TypeIt("#type-it-text", {
      strings: ["welcome to my completely pointless site"],
      speed: 40,
      waitUntilVisible: true
    })
    .break({delay: 300})
    .type("can i interest you in...", {speed: 40})
    .break({delay: 100})
    .type("<a href='/blog'>some posts</a>", {speed: 60})
    .break({delay: 200})
    .type("or maybe", {speed: 50})
    .break({delay: 200})
    .type("<a href='/projects'>some projects of mine</a>", {speed: 60})
    .go();

    console.log("hey you, stop it.")
    console.log("110 111 32 114 101 97 108 108 121 44 32 115 116 111 112 32 105 116 46")

  }

  
}
</script>

