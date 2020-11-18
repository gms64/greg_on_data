
<template>
    <div class="container-fluid">
        <article>
            <h1 class="m20">Books</h1>
            <hr>
            <!-- <div v-show="books.length > 0"> -->
                <div v-for="obj in books" :key="obj.id.$t">
                    <a v-bind:href="obj.gsx$goodreadslink.$t" target="_blank">
                        <p > {{obj.gsx$title.$t}}</p>
                    </a>
                </div>
            <!-- </div> -->
        </article>
    </div>

</template>

<script>
export default {
  head() {
    return {
      title: 'Coding Books | greg on data',
      meta: [
          { hid: 'description', 
          name: 'description',
          content: 'List of books' }
      ]
      }
  },
    data() {
      return {
        books: []
      }
    },
  async fetch () {
        const tgt_url = 'https://spreadsheets.google.com/feeds/list/17ze2O7JUkiqKsNt2uGp0hTA8uQ1AMhdOaNRkqNW6yD4/1/public/full?alt=json'
        const gs_json = await this.$axios.$get(tgt_url)
        const entries = gs_json['feed']['entry']
        this.books = entries
  },
    fetchOnServer: false
    

//   async asyncData({ $axios, params, error }) {
//     try {
//         const tgt_url = 'https://spreadsheets.google.com/feeds/list/17ze2O7JUkiqKsNt2uGp0hTA8uQ1AMhdOaNRkqNW6yD4/1/public/full?alt=json'
//         const gs_json = await $axios.$get(tgt_url)
//         const entries = gs_json['feed']['entry']
//         return { entries }
//     } catch {
//         error({ statusCode: 404, message: 'Page not found' })
//     }
    
//   }
}
</script>

