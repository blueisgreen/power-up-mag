import { api } from '../boot/axios'

export async function fetchArticles() {
  console.log('PowerUpService.fetchArticles')
  return await api.get('/articles')
}

export async function fetchArchivedArticles() {
  console.log('PowerUpService.fetchArchivedArticles')
  return await api.get('/articles/archived')
}

export async function fetchPublishedArticles() {
  console.log('PowerUpService.fetchPublishedArticles')
  return await api.get('/articles/published')
}

export async function fetchArticle(articleId) {
  console.log('PowerUpService.fetchArticle', articleId)
  return await api.get(`/articles/${articleId}`)
}

export async function createArticle(update) {
  console.log('PowerUpService.createArticle', update)
  return await api.post('/articles/', update)
}

export async function saveArticle(update) {
  console.log('PowerUpService.saveArticle', update)
  return await api.put(`/articles/${update.id}`, update)
}

export async function publishArticle(articleId) {
  console.log('PowerUpService.publishArticle', articleId)
  return await api.put(`/articles/${articleId}/publish`)
}

export async function unpublishArticle(articleId) {
  console.log('PowerUpService.unpublishArticle', articleId)
  return await api.put(`/articles/${articleId}/unpublish`)
}

export async function archiveArticle(articleId) {
  console.log('PowerUpService.archiveArticle', articleId)
  return await api.delete(`/articles/${articleId}`)
}

export async function purgeArticle(articleId) {
  console.log('PowerUpService.purgeArticle', articleId)
  return await api.delete(`/articles/${articleId}/purge`)
}
