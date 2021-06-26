<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <div class="row">
        <div class="col-8">
          <h1>Latest and Greatest</h1>
          <article-view
            v-for="article in nextArticles"
            :key="article.id"
            class="article-spacer"
            :article="article"
          />
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <q-img alt="Power Up logo" src="~assets/logo-clear.svg" width="80%" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { fetchPublishedArticles } from '../api/PowerUpService'
import ArticleView from '../components/ArticleView.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { ArticleView },
  setup() {
    let articles = ref([])
    const getArticles = async () => {
      const results = await fetchPublishedArticles()
      console.log('found articles', results)
      articles.value = results.data
    }

    onMounted(getArticles)

    return {
      articles,
    }
  },
  computed: {
    nextArticles() {
      return this.articles
    },
  },
})
</script>

<style scoped>
.article-spacer {
  margin-bottom: 1em;
}
</style>
