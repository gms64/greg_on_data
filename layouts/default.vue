<template>
  <div>
    <header class="header">
      <a href="/" class="logo dark-gray-color">g/d</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" v-model="menuChecked"/>
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><nuxt-link to="/blog" @click.native="menuChecked=false">Blog</nuxt-link></li>
        <li><nuxt-link to="/projects" @click.native="menuChecked=false">Projects</nuxt-link></li>
        <li><nuxt-link to="/about" @click.native="menuChecked=false">About</nuxt-link></li>
      </ul>
    </header>

    <div class='main-content'>
      <nuxt />
    </div>
    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <span class="copyright-text">&#169; gms64</span>
          <span class="footer-link u-pull-right"><nuxt-link to="/about">About</nuxt-link></span>
          <span class="footer-link u-pull-right">
            <a href="https://github.com/gms64">
              <img style="color:#fff;" height="12" width="12" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
            </a>
            &nbsp;&nbsp;
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuChecked: false
    }
  }
}
</script>
