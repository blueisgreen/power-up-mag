<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div v-if="!activeArticle">
      <div>
        <q-btn
          color="green"
          icon="add_circle"
          label="New Article"
          @click="addArticle"
        />
      </div>
      <q-scroll-area style="height: 400px; max-width: 800px">
        <q-list bordered separator>
          <q-item
            v-for="article in allArticles"
            :key="article.id"
            clickable
            ripple
            @click="() => select(article)"
          >
            <q-item-section>
              <q-item-label>{{ article.headline }}</q-item-label>
              <q-item-label v-if="article.byline" caption>
                By: {{ article.byline ? article.byline : 'anonymous' }}
              </q-item-label>
              <q-item-label v-if="article.publishedAt" caption>
                Published on: {{ date.formatDate(new Date(), 'D MMM YYYY') }}
              </q-item-label>
              <q-item-label v-else-if="article.updatedAt" caption>
                Updated on: {{ date.formatDate(new Date(), 'D MMM YYYY') }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </div>
    <article-detail v-if="activeArticle" :is-new="state.isNewArticle" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import { date } from 'quasar'
import ArticleDetail from '../components/ArticleDetail.vue'
import useArticleHandler from '../composables/use-article-handler'
import { fetchArticles } from '../api/PowerUpService'

export default {
  components: { ArticleDetail },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }
    const state = ref({
      isNewArticle: false
    })

    onMounted(getArticles)

    return {
      handler,
      date,
      state,
    }
  },
  computed: {
    allArticles() {
      return this.handler.articles
    },
    publishedArticles() {
      return this.handler.articles.filter((e) => e.publishedAt)
    },
    activeArticle() {
      console.log('activeArticle', this.handler.activeArticle.value)
      return this.handler.activeArticle.value
    },
  },
  methods: {
    select(article) {
      this.handler.select(article.id)
    },
    unselect() {
      this.handler.unselect()
    },
    addArticle() {
      console.log('addArticle')
      this.state.isNewArticle = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
