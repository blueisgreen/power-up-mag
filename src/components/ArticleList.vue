<template>
  <q-scroll-area style="height: 600px; max-width: 800px">
    <q-list bordered separator>
      <q-item
        v-for="article in articles"
        :key="article.id"
        clickable
        ripple
        :active="article === selectedArticle"
        active-class="active-highlight"
        @click="() => emit('select-article', article)"
      >
        <q-item-section>
          <q-item-label>{{ article.headline }}</q-item-label>
          <q-item-label v-if="article.byline" caption>
            By: {{ article.byline ? article.byline : 'anonymous' }}
          </q-item-label>
          <q-item-label v-if="article.publishedAt" caption>
            Published on
            {{ date.formatDate(article.publishedAt, timestampFormat) }}
          </q-item-label>
          <q-item-label v-if="article.updatedAt !== article.createdAt" caption>
            Updated on {{ date.formatDate(article.updatedAt, timestampFormat) }}
          </q-item-label>
          <q-item-label caption>
            Created on {{ date.formatDate(article.createdAt, timestampFormat) }}
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar
            color="primary"
            icon="edit"
            label="Edit"
            square
            @click.stop="() => emit('open-for-edit', article)"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar
            v-if="!article.publishedAt"
            color="secondary"
            icon="publish"
            label="Publish"
            square
            @click.stop="() => emit('publish-article', article)"
          />
          <q-avatar
            v-if="article.publishedAt"
            color="secondary"
            icon="undo"
            label="Withdraw"
            square
            @click.stop="() => emit('unpublish-article', article)"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar
            color="warning"
            icon="archive"
            square
            @click.stop="() => emit('archive-article', article)"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar
            color="red-10"
            icon="delete_forever"
            text-color="white"
            square
            @click.stop="() => emit('purge-article', article)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { date } from 'quasar'
import { emit } from 'vue'

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    selectedArticle: {
      type: Object,
      default: null,
    },
  },
  emits: [
    'select-article',
    'open-for-edit',
    'publish-article',
    'unpublish-article',
    'archive-article',
    'purge-article',
  ],
  setup(props, { emit }) {
    return {
      date,
      emit,
      timestampFormat: 'D-MMM-YYYY @ H:m:s',
    }
  },
}
</script>

<style scoped>
.activeHighlight {
  background-color: lightsalmon;
}
</style>
