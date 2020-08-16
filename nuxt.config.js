
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "apple-touch-icon", sizes:"180x180", href:"/favicon/apple-touch-icon.png" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-32x32.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', type: 'text/css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&family=Rajdhani:wght@500&display=swap', type: 'text/css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css', type: 'text/css'},
      

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/pile-of-bones.css',
    '@/assets/css/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-analytics', {
      id: 'UA-174474647-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/feed' //@nuxt/content must go before @nuxtjs/feed
  ],

  // Configure a feed for blog posts - uses @nuxtjs/feed
  feed () {
    const baseUrlArticles = 'https://gregondata.com/blog'
    const baseLinkFeedArticles = '/feed'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      atom: { type: 'atom1', file: 'atom.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Greg on Data',
        description: 'I write about things',
        link: baseUrlArticles,
      }
      const articles = await $content('posts').fetch()

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: (new Date(article.createdAt)),
          description: article.summary,
          content: article.summary,
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }))
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: "404.html"
  }
}
