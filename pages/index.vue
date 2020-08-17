<template>
  <div id="particles-js">
    <div class="home-container" >
      <div class="u-full-width">
        <h1 class="site-title">
            greg<span class="txt-color">/</span>data
        </h1>
        <h5 class="subtitle" id="type-it-text">
          <!-- Fancy Typed Text -->
        </h5>
        <p>
          infrequently updated musings of a confused developer / data scientist
        </p>
        <span class="sm-txt"><em>I wouldn't read too much into anything here...</em></span>

        <div class="m20">
          <ColorModePicker />
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </div>
</div>
</template>

<script>
import TypeIt from 'typeit'
import ColorModePicker from '@/components/ColorModePicker'
 

export default {
  components: {
    ColorModePicker
  },
  head() {
    return {
      title: 'greg on data',
      meta: [
      { hid: 'description',
      name: 'description',
      content: 'a personal website created with nuxt, netlify, and a lot of coffee' }
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

    particlesJS.load('particles-js', '/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }

  
}
</script>


<style>
#particles-js canvas {
    position:absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>