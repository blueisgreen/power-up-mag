import { reactive, ref, computed } from 'vue'

const articles = reactive([])
const activeId = ref(null)
const draft = ref(null)
let loaded = false

export const useArticleHandler = function () {
  let activeArticle = computed(() => {
    return activeId.value
      ? articles.find((article) => article.id === activeId.value)
      : null
  })
  let load = function (articlesIn) {
    activeId.value = null
    if (!loaded) {
      articlesIn.forEach((article) => {
        articles.push(article)
      })
      loaded = true
    }
  }
  let replaceOrAdd = function (newArticle) {
    const ind = articles.findIndex((article) => article.id === newArticle.id)
    if (ind > -1) {
      articles[ind] = newArticle
    } else {
      articles.push(newArticle)
    }
  }
  let remove = function (id) {
    const ind = articles.findIndex((article) => article.id === id)
    if (ind > -1) {
      articles.splice(ind, 1)
    }
  }
  let select = function (id) {
    activeId.value = articles.find((article) => article.id === id) ? id : null
  }
  let unselect = function () {
    activeId.value = null
  }
  let startNewDraft = function () {
    draft.value = {
      headline: '',
      byline: '',
      content: ''
    }
  }
  let startEdit = function(original) {
    draft.value = {
      id: original.id,
      headline: original.headline,
      byline: original.byline,
      content: original.content
    }
  }
  let clearDraft = function() {
    draft.value = null
  }
  return {
    articles,
    activeArticle,
    draft,
    load,
    replaceOrAdd,
    remove,
    select,
    unselect,
    startNewDraft,
    startEdit,
    clearDraft,
  }
}

export default useArticleHandler
