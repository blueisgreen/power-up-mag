<template>
  <q-page class="q-pa-md">
    <h1>Article Management</h1>
    <article-action-bar
      :mode="mode"
      @start-new-article="newArticle"
      @open-for-edit="openActiveForEdit"
      @save-draft="saveDraft"
      @cancel-draft="cancelUnsavedEdits"
      @close-article="unselect"
    />
    <!--
      'start-new-article',
      'select-for-edit',
      'save-draft',
      'cancel-draft',
      'close-article',
    -->
    <article-list
      v-if="mode === 'list'"
      :articles="allArticles"
      :selected-article="activeArticle"
      @select-article="select"
      @open-for-edit="openForEdit"
      @publish-article="publish"
      @unpublish-article="unpublish"
      @archive-article="archive"
      @purge-article="purge"
    />
    <article-view v-if="mode === 'view'" :article="activeArticle" />
    <article-edit v-if="mode === 'edit' || mode === 'new'" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import ArticleActionBar from '../components/ArticleActionBar.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import useArticleHandler from '../composables/use-article-handler'
import {
  fetchArticles,
  createArticle,
  saveArticle,
  publishArticle,
  unpublishArticle,
  archiveArticle,
  purgeArticle,
} from '../api/PowerUpService'

export default {
  components: { ArticleActionBar, ArticleList, ArticleView, ArticleEdit },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }
    let state = ref({
      mode: 'list', // 'view' 'edit' 'new'
    })

    onMounted(getArticles)

    return {
      handler,
      state,
    }
  },
  computed: {
    allArticles() {
      return this.handler.articles
    },
    activeArticle() {
      return this.handler.activeArticle.value
    },
    draftArticle() {
      return this.handler.draft.value
    },
    mode() {
      return this.state.mode
    },
  },
  methods: {
    select(article) {
      console.log('select', article)
      this.handler.select(article.id)
      this.state.mode = 'view'
    },
    unselect() {
      console.log('unselect')
      this.handler.unselect()
      this.state.mode = 'list'
    },
    newArticle() {
      console.log('newArticle')
      this.handler.unselect()
      this.handler.startNewDraft()
      this.state.mode = 'new'
    },
    openActiveForEdit() {
      console.log('openActiveForEdit')
      this.handler.startEdit(this.activeArticle)
      this.state.mode = 'edit'
    },
    openForEdit(article) {
      console.log('openForEdit', article)
      this.select(article)
      this.openActiveForEdit()
    },
    async saveDraft() {
      console.log('saveDraft', this.draftArticle)
      let resp
      if (this.state.mode === 'new') {
        resp = await createArticle(this.draftArticle)
        this.state.mode = 'edit'
      } else if (this.state.mode === 'edit') {
        resp = await saveArticle(this.draftArticle)
      } else {
        console.warn('Not sure why saveDraft was called. Ignoring.')
        return
      }
      this.handler.replaceOrAdd(resp.data)
      this.handler.select(resp.data.id)
      this.state.mode = 'edit'
    },
    cancelUnsavedEdits() {
      console.log('cancelUnsavedEdits')
      this.handler.clearDraft()
      if (!this.activeArticle) {
        this.state.mode = 'list'
      } else {
        this.state.mode = 'view'
      }
    },
    async publish(article) {
      const resp = await publishArticle(article.id)
      this.handler.replaceOrAdd(resp.data)
    },
    async unpublish(article) {
      const resp = await unpublishArticle(article.id)
      this.handler.replaceOrAdd(resp.data)
    },
    async archive(article) {
      const resp = await archiveArticle(article.id)
      this.handler.remove(article.id)
      this.unselect()
    },
    async purge(article) {
      const resp = await purgeArticle(article.id)
      this.handler.remove(article.id)
      this.unselect()
    },
  },
}
</script>

<style lang="scss" scoped></style>
